import autocannon from 'autocannon';
import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const BASE_URL = process.env.BENCH_URL || 'http://localhost:5000/api/v1';
const DURATION = Number(process.env.BENCH_DURATION || 10);
const CONNECTIONS = Number(process.env.BENCH_CONNECTIONS || 20);

const __dirname = dirname(fileURLToPath(import.meta.url));

const endpoints = [
  { name: 'GET /produce (list)',   path: '/produce?page=1&limit=10' },
  { name: 'GET /produce (search)', path: '/produce?search=tomato&limit=20' },
  { name: 'GET /rentals',          path: '/rentals?page=1&limit=10' },
  { name: 'GET /vendors',          path: '/vendors?page=1&limit=10' },
  { name: 'GET /community',        path: '/community?page=1&limit=10' },
];

const runOne = (endpoint) =>
  new Promise((resolve, reject) => {
    console.log(`\n> ${endpoint.name}`);
    const instance = autocannon(
      {
        url: `${BASE_URL}${endpoint.path}`,
        connections: CONNECTIONS,
        duration: DURATION,
        headers: { 'Content-Type': 'application/json' },
      },
      (err, result) => {
        if (err) return reject(err);
        resolve(result);
      }
    );
    autocannon.track(instance, { renderProgressBar: false });
  });

const fmt = (n) => (typeof n === 'number' ? n.toFixed(2) : String(n));

const run = async () => {
  const results = [];
  for (const ep of endpoints) {
    const r = await runOne(ep);
    results.push({ endpoint: ep, result: r });
  }

  const lines = [];
  lines.push('# Benchmark Report');
  lines.push('');
  lines.push(`- **Tool**: autocannon`);
  lines.push(`- **Base URL**: ${BASE_URL}`);
  lines.push(`- **Connections**: ${CONNECTIONS}`);
  lines.push(`- **Duration (per endpoint)**: ${DURATION}s`);
  lines.push(`- **Date**: ${new Date().toISOString()}`);
  lines.push('');
  lines.push('## Results');
  lines.push('');
  lines.push('| Endpoint | Req/s (avg) | Latency avg | p50 | p90 | p99 | Max | 2xx | non-2xx | Errors |');
  lines.push('| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |');
  for (const { endpoint, result } of results) {
    const l = result.latency;
    lines.push(
      `| \`${endpoint.path}\` | ${fmt(result.requests.average)} | ${fmt(l.average)} ms | ${fmt(l.p50)} ms | ${fmt(l.p90)} ms | ${fmt(l.p99)} ms | ${fmt(l.max)} ms | ${result['2xx']} | ${result.non2xx} | ${result.errors} |`
    );
  }
  lines.push('');
  lines.push('## Notes');
  lines.push('');
  lines.push('- Latency is in milliseconds. p50/p95/p99 are end-to-end request latency.');
  lines.push('- Req/s is the average throughput across the duration window.');
  lines.push('- `non-2xx` includes 429 responses from the global rate limiter (100 req / 15 min / IP). Expect this to rise on long runs from a single host — it is a feature, not a regression.');
  lines.push('- Benchmarks hit a remote Supabase PostgreSQL instance; network RTT dominates latency. Numbers from a deployment colocated with the database will be materially better.');

  const out = join(__dirname, '..', 'BENCHMARK.md');
  writeFileSync(out, lines.join('\n') + '\n');
  console.log(`\nReport written to ${out}`);
};

run().catch((err) => {
  console.error('Benchmark failed:', err);
  process.exit(1);
});
