import { createBrowserRouter } from 'react-router-dom';
import { createRef } from 'react';

import App from '@/components/app/App';
import MainPage from '@/components/pages/mainPage/MainPage';
import LoginPage from '@/components/pages/loginPage/LoginPage';
import RegisterPage from '@/components/pages/registerPage/RegisterPage';

export const routes = [
   { path: '/', name: 'Main', element: <MainPage />, nodeRef: createRef() },
   {
      path: '/register',
      name: 'Register',
      element: <RegisterPage />,
      nodeRef: createRef(),
   },
   {
      path: '/login',
      name: 'Login',
      element: <LoginPage />,
      nodeRef: createRef(),
   },
];

const router = createBrowserRouter([
   {
      path: '/',
      element: <App />,
      children: routes.map((route) => ({
         index: route.path === '/',
         path: route.path === '/' ? undefined : route.path,
         element: route.element,
      })),
   },
]);

export default router;
