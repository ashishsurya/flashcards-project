import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import type { AppRouterType } from '../../../backend/src/routers/root';

export const client = createTRPCProxyClient<AppRouterType>({
  links: [
    httpBatchLink({
      url: 'http://localhost:8000/trpc',
    }),
  ],
});
