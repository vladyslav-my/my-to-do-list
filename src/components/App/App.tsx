/* eslint-disable jsx-a11y/control-has-associated-label */
import './app.scss';

import { FC, useState } from 'react';
import {
   createBrowserRouter,
   Route,
   RouterProvider,
   Routes,
} from 'react-router-dom';
import { ReactComponent as NotebookIcon } from '@/assets/notebook.svg';
import router from '@/routing/router';

import Shell from '@/components/blocks/shell/Shell';

import MainPage from '@/components/pages/mainPage/MainPage';
import RegisterPage from '@/components/pages/registerPage/AuthPage';
import LoginPage from '@/components/pages/loginPage/LoginPage';
import LogIn from '../navBar/logIn/LogIn';
import LogOut from '../navBar/logOut/LogOut';

const App: FC = () => {
   const [isAuth, setIsAuth] = useState(true);
   return (
      <main className="app">
         <div className="app__container">
            <div className="title-app app__title">
               <NotebookIcon className="title-app__icon" />
               <h1 className="title-app__title">To-Do List</h1>
            </div>
            <div className="app__shell-wrapper">
               <Shell className="shell_nav app__shell">
                  {/* {isAuth ? <LogIn /> : <LogOut />} */}
                  {/* <LogOut /> */}
                  <LogIn />
               </Shell>
               <Shell className="shell_main">
                  {/* <MainPage />
                  <RegisterPage />
                  <LoginPage /> */}
                  <Routes>
                     <Route path="/" element={<MainPage />} />
                     <Route path="/login" element={<LoginPage />} />
                     <Route path="/register" element={<RegisterPage />} />
                  </Routes>
                  {/* <RouterProvider router={router} /> */}
               </Shell>
               {/* <MainPage /> */}
               {/* <RegisterPage /> */}
               {/* <LoginPage /> */}
            </div>
         </div>
      </main>
   );
};

export default App;
