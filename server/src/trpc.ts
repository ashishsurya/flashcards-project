import { initTRPC } from '@trpc/server';

export const t = initTRPC.create();

import { stacksRouter } from './routers/stack';
export const appRouter = t.router({
  stack: stacksRouter,
});

export type AppRouter = typeof appRouter;
