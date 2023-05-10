import express from 'express';
import * as trpcExpress from '@trpc/server/adapters/express';
import { renderTrpcPanel } from 'trpc-panel';
import { appRouter } from './routers/root';

// for importing enviroment variables
import dotenv from 'dotenv';
dotenv.config();

console.log(process.env.DATABASE_URL);

async function main() {
  // express implementation
  const app = express();

  app.use((req, _res, next) => {
    // request logger
    console.log(
      '💎',
      new Date().toISOString(),
      req.method,
      req.path,
      req.body ?? req.query
    );
    next();
  });

  app.use(
    '/trpc',
    trpcExpress.createExpressMiddleware({
      router: appRouter,
    })
  );

  app.use('/panel', (_, res) => {
    return res.send(
      renderTrpcPanel(appRouter, { url: 'http://localhost:8000/trpc' })
    );
  });

  app.listen(8000, () => {
    console.log('server listening on  http://localhost:8000 🚀🚀🚀');
  });
}

void main();
