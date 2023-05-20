import express from 'express';
import * as trpcExpress from '@trpc/server/adapters/express';
import { appRouter } from './trpc.js';

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({ msg: 'go to /api/trpc ' });
  
});

app.use(
  '/api/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
  })
);





app.listen(8000, () => {
  console.log('🚀🚀🚀 Server listening on http://localhost:8000 🚀🚀🚀');
});
