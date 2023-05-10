import { router, publicProcedure } from '../trpc';
import { z } from 'zod';

export const authRouter = router({
  login: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        password: z.string().min(8, 'Password must be atleast 8 characters'),
      })
    )
    .mutation((opts) => {
      return {
        username: opts.input.email,
      };
    }),

  register: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        password: z.string().min(8, 'Password must be atleast 8 characters'),
        name: z.string(),
      })
    )
    .mutation((opts) => {}),
});
