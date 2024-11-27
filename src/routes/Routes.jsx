import Contact from '@/pages/Contact/Contact';
import ShowCases from '@/pages/ShowCase/ShowCases';
import Sollutions from '@/pages/Solutions/Sollutions';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: '/solutions',
        element: <Sollutions></Sollutions>,
      },
      {
        path: '/showcases',
        element: <ShowCases></ShowCases>,
      },
      {
        path: '/contact',
        element: <Contact></Contact>,
      },
    ],
  },
]);
