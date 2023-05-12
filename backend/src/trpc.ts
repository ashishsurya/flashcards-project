import { inferAsyncReturnType, initTRPC } from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';
import { prisma } from './prisma';

export const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({
  prisma: prisma,
  req,
}); // no context
type Context = inferAsyncReturnType<typeof createContext>;

export const t = initTRPC.context<Context>().create();
export const publicProcedure = t.procedure;
export const router = t.router;
export const middleware = t.middleware;

// const isAuthenticated = middleware(async (opts) => {
//   // TODO : check if user is authenticated and return error if not

  
// });
