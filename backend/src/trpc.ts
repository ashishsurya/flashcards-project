import { inferAsyncReturnType, initTRPC } from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';
import { prisma } from './prisma';
import { ZodError } from 'zod';

export const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({
  prisma: prisma,
  req,
}); // no context

export const t = initTRPC.context<typeof createContext>().create({
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    };
  },
});
export const publicProcedure = t.procedure;
export const router = t.router;
export const middleware = t.middleware;

// const isAuthenticated = middleware(async (opts) => {
//   // TODO : check if user is authenticated and return error if not

// });
