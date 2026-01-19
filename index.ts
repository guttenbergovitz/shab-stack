import app from './server';

const port = process.env.PORT ? Number.parseInt(process.env.PORT, 10) : 3000;

console.log(`🚀 SHAB Stack running at http://localhost:${port}`);

Bun.serve({
  fetch: app.fetch,
  port,
});
