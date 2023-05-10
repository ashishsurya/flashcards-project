import express from 'express';
import * as trpcExpress from '@trpc/server/adapters/express';
import { renderTrpcPanel } from 'trpc-panel';
import { appRouter } from './routers/root';


async function main() {
  // express implementation
  const app = express();

  app.use((req, _res, next) => {
    // request logger
    console.log('⬅️ ', req.method, req.path, req.body ?? req.query);

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
    console.log('listening on  http://localhost:8000');
  });
}

void main();
