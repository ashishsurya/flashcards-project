import { router } from '../trpc';
import { authRouter } from './auth';
import { stacksRouter } from './stack';

export const appRouter = router({
  auth: authRouter,
  stack: stacksRouter,
});

export type AppRouterType = typeof appRouter;
