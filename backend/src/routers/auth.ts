import { router, publicProcedure } from '../trpc';
import { z } from 'zod';
import jwt from 'jsonwebtoken';
import { TRPCError } from '@trpc/server';

export const authRouter = router({
  login: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        password: z.string().min(8, 'Password must be atleast 8 characters'),
      })
    )
    .mutation(async (opts) => {
      const { email, password } = opts.input;

      const user = await opts.ctx.prisma.user.findFirst({ where: { email } });

      if (user && password === user.password) {
        const token = jwt.sign(
          { email: user.email, password: user.password },
          process.env.JWT_SECRET_KEY!
        );

        return {
          token,
        };
      } else {
        throw new TRPCError({
          message: 'User not found / Invalid credentials',
          code: 'NOT_FOUND',
        });
      }
    }),

  register: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        password: z.string().min(8, 'Password must be atleast 8 characters'),
        name: z.string(),
      })
    )
    .mutation(async (opts) => {
      const { email, name, password } = opts.input;

      const user = await opts.ctx.prisma.user.findFirst({
        where: { email },
      });

      if (user) {
        throw new TRPCError({
          message: 'User with same email already exists',
          code: 'CONFLICT',
        });
      }

      const newUser = await opts.ctx.prisma.user.create({
        data: { email, name, password },
        select: { email: true, name: true },
      });

      const token = jwt.sign({ user, newUser }, process.env.JWT_SECRET_KEY!);
      return {
        token,
      };
    }),
});
