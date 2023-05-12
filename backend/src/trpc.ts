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

export const t = initTRPC.context<typeof createContext>().create();
export const publicProcedure = t.procedure;
export const router = t.router;
export const middleware = t.middleware;

// const isAuthenticated = middleware(async (opts) => {
//   // TODO : check if user is authenticated and return error if not

  
// });
