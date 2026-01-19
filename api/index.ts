import app from '../server';

export default async function handler(req: Request) {
  return app.fetch(req);
}
