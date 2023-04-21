/* eslint-disable jsx-a11y/control-has-associated-label */
import Shell from '../shell/Shell';
import Notebook from '../notebook/Notebook';
import Panel from '../panel/Panel';
import './app.scss';
// import Btn from '../btn/Btn';
import ActionContent from '../actionContent/ActionContent';
import Checkbox from '../checkbox/Checkbox';
import GroupBtns from '../groupBtns/groupBtns';

function App() {
   return (
      <main className="app">
         <div className="app__container">
            <div className="title-app app__title">
               <Notebook className="title-app__icon" />
               <h1 className="title-app__title">To-Do List</h1>
            </div>
            <div className="app__shell-wrapper">
               <Shell className="app__shell app__shell_nav">
                  <div>Space</div>
               </Shell>
               <Shell className="app__shell_main">
                  <>
                     <Panel title="Add task">
                        <ActionContent
                           className=""
                           subtitle="Note"
                           action={<GroupBtns />}
                        />
                        <ActionContent
                           className=""
                           subtitle="Mark color"
                           action={<GroupBtns />}
                        />
                     </Panel>
                     <Panel title="Filters tasks">
                        <ActionContent
                           className=""
                           subtitle="Mark color"
                           action={<GroupBtns />}
                        />
                        <ActionContent
                           className=""
                           subtitle="Status"
                           action={<GroupBtns />}
                        />
                     </Panel>
                     <Panel title="Selection action">
                        <ActionContent
                           className=""
                           subtitle="Note"
                           action={<GroupBtns />}
                        />
                        <ActionContent
                           className=""
                           subtitle="Mark color"
                           action={<GroupBtns />}
                        />
                     </Panel>
                     <Panel
                        className="shell__extended-panel"
                        title="All your tasks"
                     >
                        <ActionContent
                           className=""
                           subtitle="Note"
                           action={<Checkbox />}
                        />
                        <ActionContent
                           className=""
                           subtitle="Mark color"
                           action="space"
                        />
                     </Panel>
                  </>
               </Shell>
            </div>
         </div>
      </main>
   );
}

export default App;
