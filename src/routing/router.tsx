import { createBrowserRouter } from 'react-router-dom';

import MainPage from '@/components/pages/mainPage/MainPage';
import LoginPage from '@/components/pages/loginPage/LoginPage';
import RegisterPage from '@/components/pages/registerPage/AuthPage';

const router = createBrowserRouter([
   {
      path: '/',
      element: <MainPage />,
   },
   {
      path: '/login',
      element: <LoginPage />,
   },
   {
      path: '/register',
      element: <RegisterPage />,
   },
]);

export default router;
