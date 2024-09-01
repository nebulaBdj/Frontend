import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router.tsx';
import './index.css';

const queryCilent = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryCilent}>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </QueryClientProvider>,
);
