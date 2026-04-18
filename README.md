# Urban Farming Platform — API

A Node.js + Express REST API for an urban farming marketplace that connects vendors (urban farmers) with customers, supports produce sales, rental-space bookings, plant-growth tracking, sustainability certifications, and a community feed.

## Stack

- **Runtime**: Node.js (ESM), Express 4
- **Database**: PostgreSQL via [Prisma 7](https://www.prisma.io/) with the `@prisma/adapter-pg` driver adapter
- **Auth**: JWT (access + refresh tokens), bcrypt
- **Realtime**: Socket.IO (used for plant-tracking updates)
- **Validation**: Joi, express-validator
- **Security**: helmet, cors, xss-clean, express-rate-limit
- **Media**: Cloudinary + Multer
- **Email**: Nodemailer (OTP / password-reset)
- **Logging**: Winston + Morgan

## Project layout

```
prisma/              Prisma schema + seed script
prisma.config.js     Prisma 7 config (datasource URL lives here, not in schema)
src/
  app.js             Express app, middleware, Socket.IO setup
  core/              Config, middleware, shared app router
  lib/               Shared clients (prisma, rate limiters, mailer, etc.)
  entities/          Feature folders — each has routes/controller/service
index.js             Entry point
```

## Getting started

### 1. Install

```bash
npm install
```

### 2. Configure environment

Create a `.env` at the project root:

```env
PORT=5000
NODE_ENV=development

DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DB"

ACCESS_TOKEN_SECRET=change_me
ACCESS_TOKEN_EXPIRES=7d
REFRESH_TOKEN_SECRET=change_me
REFRESH_TOKEN_EXPIRES=10d

EMAIL_EXPIRES=900000
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_ADDRESS=your@gmail.com
EMAIL_PASS=your_app_password
EMAIL_FROM=your@gmail.com
ADMIN_EMAIL=admin@urbanfarming.com

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

> **Prisma 7 note**: `DATABASE_URL` is consumed by [`prisma.config.js`](prisma.config.js) for migrations and by the `PrismaPg` adapter at runtime in [`src/lib/prisma.js`](src/lib/prisma.js). The schema no longer declares `url`.

### 3. Set up the database

```bash
npm run db:migrate      # prisma migrate dev --name init
npm run db:generate     # prisma generate
npm run db:seed         # seed admin, vendors, produce, customers, posts
```

Seed credentials (password `Password123!` for all):

- Admin — `admin@urbanfarming.com`
- Vendors — `vendor1@urbanfarming.com` … `vendor10@urbanfarming.com`
- Customers — `customer1@urbanfarming.com` … `customer5@urbanfarming.com`

### 4. Run

```bash
npm run dev    # nodemon
npm start      # production
```

Server listens on `PORT` (defaults to `5000`).

## NPM scripts

| Script | What it does |
| --- | --- |
| `npm start` | Start the server |
| `npm run dev` | Start with nodemon auto-reload |
| `npm run db:migrate` | Run Prisma migrations (dev, named `init`) |
| `npm run db:generate` | Regenerate the Prisma client |
| `npm run db:seed` | Seed the database (`prisma/seed.js`) |
| `npm run db:studio` | Open Prisma Studio |
| `npm run bench` | Run the autocannon benchmark suite → writes [`BENCHMARK.md`](BENCHMARK.md) |

## API overview

All routes are mounted under `/api/v1`. Route groups:

| Prefix | Module | Purpose |
| --- | --- | --- |
| `/v1/auth` | [auth](src/entities/auth/auth.routes.js) | Register, login, refresh, OTP, password reset |
| `/v1/users` | [users](src/entities/user/user.routes.js) | Profile management |
| `/v1/vendors` | [vendors](src/entities/vendor/vendor.routes.js) | Vendor profiles, farm info |
| `/v1/produce` | [produce](src/entities/produce/produce.routes.js) | Product catalog (CRUD, search) |
| `/v1/rentals` | [rentals](src/entities/rental/rental.routes.js) | Rental spaces + bookings |
| `/v1/orders` | [orders](src/entities/order/order.routes.js) | Customer orders |
| `/v1/community` | [community](src/entities/community/community.routes.js) | Community posts |
| `/v1/plants` | [plants](src/entities/plant/plant.routes.js) | Plant-growth tracking (also emits Socket.IO events) |
| `/v1/certifications` | [certifications](src/entities/certification/certification.routes.js) | Sustainability certs |
| `/v1/admin` | [admin](src/entities/admin/admin.routes.js) | Admin-only operations |

A ready-to-import Postman collection is available at [`urban-farming-postman-collection.json`](urban-farming-postman-collection.json).

## Realtime

Socket.IO is attached to the same HTTP server. Clients can join a per-user plant-tracking room:

```js
socket.emit('join_plant_room', userId);
```

Plant-update events are broadcast to `plant_<userId>`.

## Data model

See [`prisma/schema.prisma`](prisma/schema.prisma). Core entities:

- `User` (roles: `ADMIN`, `VENDOR`, `CUSTOMER`)
- `VendorProfile`, `SustainabilityCert`
- `Produce`, `Order`
- `RentalSpace`, `RentalBooking`
- `PlantTracking`
- `CommunityPost`

## Performance & benchmarks

See [`PERFORMANCE.md`](PERFORMANCE.md) for the response-envelope, pagination, rate-limiting, transactional-write, and indexing strategy. Measured latency/throughput for the public list endpoints is in [`BENCHMARK.md`](BENCHMARK.md).

## Troubleshooting

- **`Cannot find module '@prisma/client/runtime/library.js'`** — leftover from a pre-v7 install. Run `rm -rf node_modules/.prisma/client generated && npm run db:generate`.
- **`The datasource property 'url' is no longer supported in schema files`** — ensure the `url` lives in [`prisma.config.js`](prisma.config.js), not in `schema.prisma`.
