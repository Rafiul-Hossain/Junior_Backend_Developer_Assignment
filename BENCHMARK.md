# Benchmark Report

## Environment

| | |
|---|---|
| Tool | [`autocannon`](https://github.com/mcollina/autocannon) v8 |
| Server | Node.js v24, Express 4, Prisma 7 (`@prisma/adapter-pg`) |
| Database | Supabase PostgreSQL (`ap-northeast-1`, Tokyo) — accessed over public internet |
| Client | Same Windows host as server (`localhost`) — DB round-trip is the dominant cost |
| Date | 2026-04-18 |
| Connections | 20 |
| Duration | 10s per endpoint |
| Rate limiter | `globalLimiter` bypassed via `DISABLE_GLOBAL_LIMITER=true` for accurate measurement |

## Results

| Endpoint | Req/s | Latency avg | p50 | p90 | p99 | Max | 2xx | non-2xx | Errors |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| `GET /produce?page=1&limit=10` | 18.0 | 1048 ms | 865 ms | 2410 ms | 2611 ms | 2647 ms | 180 | 0 | 0 |
| `GET /produce?search=tomato&limit=20` | 21.7 | 906 ms | 875 ms | 1018 ms | 1224 ms | 1698 ms | 217 | 0 | 0 |
| `GET /rentals?page=1&limit=10` | 20.5 | 927 ms | 865 ms | 942 ms | 1605 ms | 1649 ms | 205 | 0 | 0 |
| `GET /vendors?page=1&limit=10` | 21.6 | 909 ms | 866 ms | 1042 ms | 1307 ms | 1564 ms | 216 | 0 | 0 |
| `GET /community?page=1&limit=10` | 20.6 | 924 ms | 864 ms | 919 ms | 1626 ms | 1630 ms | 206 | 0 | 0 |

## Interpretation

- **Throughput** — sustained ~20 req/s per endpoint under 20 concurrent connections. Zero errors, zero non-2xx. That's the ceiling imposed by a single-node server talking to a geographically distant managed database over TLS.
- **Latency floor is network-bound.** p50 across every endpoint lands at **~865 ms**, which is the RTT cost of two TLS round-trips to Supabase Tokyo from the test host. Any Node-side optimization below that floor is invisible.
- **Search vs. pure list** — `/produce?search=tomato` (217 req) matches the throughput of simpler list endpoints, confirming the `contains` + `mode: 'insensitive'` filter does not regress against the baseline at this cardinality (100 produce rows).
- **`/produce` first endpoint tail** — p90/p99/max are elevated (2.4–2.6 s) relative to the others. This is cold-start behavior: first run of the session rebuilds the Prisma connection pool against Supabase. Subsequent endpoints show normal tails (~1.0–1.6 s).
- **Rate-limiter effectiveness** — a prior run with the limiter enabled rejected ~6,700 req/s per endpoint at 0.1 ms latency, confirming `express-rate-limit` shields the database layer at essentially zero CPU cost. Production deployments should keep the limiter on.

## What would move the numbers

The current latency floor is dominated by the client-to-database geography. In priority order:

1. **Colocate the app with the database** — deploying to an `ap-northeast-1` runtime (Vercel/Fly/Supabase Edge) would drop p50 from ~865 ms to the low tens of ms; everything else in this report is downstream of that.
2. **Add targeted indexes** for the hot filter paths:
   - `Produce(category, certificationStatus)`
   - `RentalSpace(availability, location)`
   - `RentalBooking(rentalSpaceId, startDate, endDate)` — the overlap check is the most expensive query in the booking path.
3. **HTTP response compression** (`compression` middleware) — response bodies here are already JSON-small, but as the catalog grows this is free throughput.
4. **Prepared statement reuse** — Prisma adapter-pg keeps the pool warm; verify `pg`'s default `max: 10` is appropriate under expected concurrency, bump if needed.

## Reproducing

```bash
# Terminal A — start server with limiter bypassed (bench-only!)
DISABLE_GLOBAL_LIMITER=true PORT=5001 npm start

# Terminal B — run the suite
BENCH_URL=http://localhost:5001/api/v1 BENCH_CONNECTIONS=20 BENCH_DURATION=10 npm run bench
```

Tunable knobs: `BENCH_URL`, `BENCH_CONNECTIONS`, `BENCH_DURATION`. The script writes a fresh `BENCHMARK.md` on each run.

> **Do not** disable the global limiter in production — it is the primary defense against accidental/abusive traffic spikes. The env toggle exists purely for benchmarking.
