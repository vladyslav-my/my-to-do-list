/* eslint-disable jsx-a11y/control-has-associated-label */
import Shell from '../shell/Shell';
import MainPage from '../page/mainPage/MainPage';
import AuthPage from '../page/authPage/AuthPage';
import LogIn from '../logIn/LogIn';
import LogOut from '../logOut/LogOut';
import { ReactComponent as NotebookIcon } from '../../assets/notebook.svg';

import './app.scss';

function App() {
   return (
      <main className="app">
         <div className="app__container">
            <div className="title-app app__title">
               <NotebookIcon className="title-app__icon" />
               <h1 className="title-app__title">To-Do List</h1>
            </div>
            <div className="app__shell-wrapper">
               <Shell className="shell_nav app__shell">
                  <LogIn />
                  {/* <LogOut /> */}
               </Shell>
               <Shell className="shell_main">
                  <MainPage />
                  {/* <AuthPage /> */}
               </Shell>
            </div>
         </div>
      </main>
   );
}

export default App;
