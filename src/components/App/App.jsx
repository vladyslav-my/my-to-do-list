/* eslint-disable jsx-a11y/control-has-associated-label */
import './app.scss';

import { FC, useEffect, useState } from 'react';
import { useLocation, useOutlet } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { ReactComponent as NotebookIcon } from '@/assets/notebook.svg';
import { routes } from '@/routing/router';

import Shell from '@/components/blocks/shell/Shell';
import LogIn from '@/components/navBar/logIn/LogIn';
import LogOut from '@/components/navBar/logOut/LogOut';

const App = () => {
   const [isAuth, setIsAuth] = useState(true);
   const location = useLocation();
   const currentOutlet = useOutlet();

   const { nodeRef } =
      routes.find((route) => route.path === location.pathname) ?? {};
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
                  <LogOut />
                  {/* <LogIn /> */}
               </Shell>
               <Shell className="shell_main">
                  <SwitchTransition>
                     <CSSTransition
                        key={location.pathname}
                        nodeRef={nodeRef}
                        timeout={200}
                        classNames="router"
                        unmountOnExit
                     >
                        {(state) => (
                           <div ref={nodeRef} className="router">
                              {currentOutlet}
                           </div>
                        )}
                     </CSSTransition>
                  </SwitchTransition>
               </Shell>
            </div>
         </div>
      </main>
   );
};

export default App;
