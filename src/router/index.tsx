import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '../layouts/RootLayout';
import { HomePage, ComputadoresPage, AboutPage, ComputadorPage } from '../pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'computadores',
        element: <ComputadoresPage />,
      },
      {
        path: 'computadores/:slug',
        element: <ComputadorPage />,
      },
      {
        path: 'nosotros',
        element: <AboutPage />,
      },
    ],
  },
]);
