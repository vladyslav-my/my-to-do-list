import Panel from '../../panel/Panel';
import './mainPage.scss';
import ActionContent from '../../actionContent/ActionContent';
import AddTask from '../../addTask/AddTask';
import GroupBtns from '../../groupBtns/groupBtns';
import Tasks from '../../tasks/Tasks';

function MainPage() {
   return (
      <div className="main-page">
         <Panel title="Add task">
            <ActionContent className="" subtitle="Note" action={<AddTask />} />
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
            className="panel_content_scroll main-page__extended"
            title="All your tasks"
         >
            <Tasks className="panel__tasks" />
         </Panel>
      </div>
   );
}

export default MainPage;
