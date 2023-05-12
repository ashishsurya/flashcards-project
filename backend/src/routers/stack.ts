import { publicProcedure, router } from '../trpc';

export const stacksRouter = router({
  getAllStacks: publicProcedure.query((opts) => {
    return opts.ctx.prisma.stack.findMany();
  }),
});
