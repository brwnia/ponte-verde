import { Home, Sobre } from '@/pages';
import { Navigate } from 'react-router';

/** @type {import('react-router').RouteObject[]} */
const routes = [
  {
    path: '/',
    element: <Navigate to="/home" replace />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/sobre',
    element: <Sobre />,
  },
];

export default routes;
