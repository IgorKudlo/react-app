import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AboutPage } from '@/pages/AboutPage';
import { MainPage } from '@/pages/MainPage';
import Default from '@/layout/Default';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Suspense fallback={<>loading...</>}><Default /></Suspense>,
    children: [
      {
        path: '/',
        element: <MainPage />
      },
      {
        path: '/about',
        element: <AboutPage />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
