import { Compradores, FaleConosco, Home, Produtores, Sobre } from '@/pages';
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
  {
    path: '/compradores',
    element: <Compradores />,
  },
  {
    path: '/produtores',
    element: <Produtores />,
  },
  {
    path: '/faleconosco',
    element: <FaleConosco />,
  },
];

export default routes;
