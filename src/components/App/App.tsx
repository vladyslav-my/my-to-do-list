/* eslint-disable jsx-a11y/control-has-associated-label */
import Shell from '../shell/Shell';
import Notebook from '../notebook/Notebook';
import './app.scss';

function App() {
   return (
      <main className="app">
         <div className="app__container">
            <div className="title-app app__title">
               <Notebook className="title-app__icon" />
               <h1 className="title-app__title">To-Do List</h1>
            </div>
            <Shell className="app__shell app__shell_nav">
               <div>Space</div>
            </Shell>
            <Shell className="app__shell">
               <div>Space</div>
            </Shell>
         </div>
      </main>
   );
}

export default App;
