/* eslint-disable jsx-a11y/control-has-associated-label */
import Shell from '../shell/Shell';
import Notebook from '../notebook/Notebook';
import Panel from '../panel/Panel';
import './app.scss';
import Btn from '../btn/Btn';

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
               <Panel title="Hello world">
                  <Btn className="btn_red" label="Label" />
                  <Btn className="btn_yellow" label="Label" />
                  <Btn className="btn_blue btn_active" label="Label" />
               </Panel>
            </Shell>
         </div>
      </main>
   );
}

export default App;
