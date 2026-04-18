# API Response Control & Performance Strategy

This document explains the conventions, safeguards, and performance levers wired into the Urban Farming Platform API.

## 1. Consistent response envelope

Every handler routes responses through a single helper — [`generateResponse`](src/lib/responseFormate.js) — so every payload has the same shape:

```json
{
  "status": true,
  "message": "Produce fetched",
  "data": { /* result or null */ }
}
```

Benefits:
- Clients write one parser for every endpoint (success, error, paginated).
- Errors never expose internal stack traces to the client — they are formatted and logged through the Winston-based `errorMiddleware`.
- `data` is `null` on error / empty result, never `undefined`, so strict clients don't trip on missing keys.

### HTTP status code policy
| Code | When |
|---|---|
| 200 | Successful read/update |
| 201 | Resource created |
| 400 | Validation / bad input |
| 401 | Missing or invalid token |
| 403 | Authenticated but role/ownership mismatch |
| 404 | Resource not found |
| 409 | Conflicts (e.g. double-booked rental space, duplicate email) |
| 429 | Rate limit exceeded |
| 500 | Unhandled errors (funneled through `errorMiddleware`) |

## 2. Pagination

List endpoints (`/produce`, `/rentals`, `/orders/my`, `/vendors`, `/community`, `/plants/my`, `/certifications`, `/admin/users`) go through the shared helper in [`pagination.js`](src/lib/pagination.js):

- `page` defaults to `1`, `limit` defaults to `10`.
- `limit` is **capped at 100** to prevent accidental or adversarial full-table scans.
- Each list response includes a `pagination` block:

  ```json
  {
    "currentPage": 2,
    "totalPages": 12,
    "totalData": 115,
    "hasNextPage": true,
    "hasPrevPage": true
  }
  ```

Heavy queries use `Promise.all([findMany, count])` to issue the page fetch and the total count in parallel, halving round-trip time.

## 3. Rate limiting

Defined in [`limit.js`](src/lib/limit.js) using `express-rate-limit`:

| Limiter | Scope | Budget |
|---|---|---|
| `globalLimiter` | Every request | 100 / 15 min per IP |
| `authLimiter` | `/auth/register`, `/auth/login` | 10 / 15 min per IP |
| `emailVerificationLimiter` | `/auth/forget-password` | 5 / hour, keyed by **email** (not IP) — prevents enumeration attacks |

Keying the OTP limiter on email rather than IP blocks credential-enumeration attempts from a single corporate NAT.

## 4. Database access

- **PostgreSQL via Prisma 7** with the `@prisma/adapter-pg` driver adapter — a single shared `PrismaClient` is exported from [`src/lib/prisma.js`](src/lib/prisma.js) and imported everywhere, so connections are pooled and reused.
- Foreign-key constraints and `onDelete: Cascade` relations prevent orphan rows (see `VendorProfile`, `Produce`, `RentalBooking`).
- `select` / `include` are scoped to what the endpoint actually returns — no `SELECT *` into the wire format.
- Money fields (`price`, `pricePerMonth`, `totalPrice`) use `Decimal(10, 2)` to avoid float drift.
- **Transactional writes** for composite operations — e.g. placing an order creates the `Order` row *and* decrements `Produce.availableQuantity` inside `prisma.$transaction`, so a partial failure never leaves stock inconsistent. Same pattern for cancel + stock restock. See [`order.service.js:11`](src/entities/order/order.service.js#L11).
- **Conflict detection before writes** — `createBookingService` runs an overlap query against `PENDING`/`CONFIRMED` bookings before inserting, so we fail fast instead of relying on a later constraint error. See [`rental.booking.service.js:16`](src/entities/rental/rental.booking.service.js#L16).

### Indexing recommendations (future work)
The schema relies on default indexes plus FK indexes. Hot query patterns that would benefit from explicit indexes once traffic grows:

- `Produce(category, certificationStatus)` — marketplace filter
- `RentalSpace(availability, location)` — browse spaces
- `RentalBooking(rentalSpaceId, startDate, endDate)` — overlap lookup
- `Order(userId, createdAt)` — "my orders" sorted by newest

## 5. Real-time updates

Socket.IO is attached to the same HTTP server in [`src/app.js`](src/app.js). Plant create/update events are emitted to **per-user rooms** (`plant_<userId>`), not broadcast globally — so every client receives only their own updates, keeping fan-out O(1) per write.

## 6. Security middleware

Each of these has a measurable but small runtime cost; together they catch entire vulnerability classes before we pay to investigate them.

- `helmet` — sane default response headers
- `cors` with credential support
- `xss-clean` — strips HTML/script payloads from request bodies
- `cookie-parser` — reads refresh-token cookies
- `morgan` + Winston — structured access + app logs
- JSON body limit of `10000kb` — upper bound on request payload size

## 7. Error handling

- Service layer throws `Error` with a human-readable message.
- Controllers catch known-shape errors (e.g. `'Produce not found'`) and map to the correct HTTP code; everything else falls through to `next(error)`.
- [`errorMiddleware`](src/core/middlewares/errorMiddleware.js) is the last `app.use` — formats, logs, and returns a consistent envelope.
- `notFound` middleware catches unmatched routes and returns `404` through the same envelope.

## 8. Benchmarking

Load tests use `autocannon`. See [`benchmarks/bench.js`](benchmarks/bench.js) and the results in [`BENCHMARK.md`](BENCHMARK.md). Run locally with:

```bash
npm run dev      # terminal 1
npm run bench    # terminal 2
```
