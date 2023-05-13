import { createTRPCReact } from '@trpc/react-query';
import type { AppRouterType } from '../../../backend/src/routers/root';

export const trpc = createTRPCReact<AppRouterType>();