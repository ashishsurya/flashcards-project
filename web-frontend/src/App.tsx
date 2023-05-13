import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomeScreen } from './components/screens/HomeScreen';
import { LoginScreen } from './components/screens/LoginScreen';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { trpc } from './utils/trpc';
import { httpBatchLink } from '@trpc/client';
import { Toaster } from 'react-hot-toast';

export const App = () => {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: 'http://localhost:8000/trpc',
          // You can pass any HTTP headers you wish here
        }),
      ],
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Toaster position='top-center'/>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/login' element={<LoginScreen />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </trpc.Provider>
  );
};
