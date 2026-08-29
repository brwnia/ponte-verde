import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import routes from './routes';
import './index.css';

const router = createBrowserRouter(routes, {
  basename: import.meta.env.DEV ? '/' : '/ponte-verde',
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
