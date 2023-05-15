import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { initTRPC } from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';

const t = initTRPC.create();

const appRouter = t.router({
  getHello: t.procedure.query((req) => {
    return { message: 'Welcome to Full-Stack tRPC CRUD App' };
  }),

  
});

export type AppRouter = typeof appRouter;

const app = express();
if (process.env.NODE_ENV !== 'production') app.use(morgan('dev'));

app.use(
  cors({
    origin: ['http://localhost:3000'],
    credentials: true,
  })
);
app.use(
  '/api/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
  })
);

const port = 8000;
app.listen(port, () => {
  console.log(`🚀 Server listening on port ${port}`);
});
