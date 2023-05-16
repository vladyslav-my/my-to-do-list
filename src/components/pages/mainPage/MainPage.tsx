import './mainPage.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Panel from '@/components/blocks/panel/Panel';
import ActionContent from '@/components/blocks/actionContent/ActionContent';
import AddTask from '@/components/shared/addTask/AddTask';
import GroupBtns from '@/components/blocks/groupBtns/GroupBtns';
import Tasks from '@/components/other/tasks/Tasks';
import Skeleton from '@/components/other/skeleton/Skeleton';
import { responseBtns } from '@/api/api.js';
import { fetchBtns } from '@/store/actions';
import Shell from '@/components/blocks/shell/Shell';
import LogIn from '@/components/navBar/logIn/LogIn';

function MainPage() {
   const { btns } = useSelector((state) => state.btns);
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(fetchBtns(responseBtns));
   }, []);
   return (
      <div className="main-page">
         <Panel title="Add task">
            <ActionContent className="" subtitle="Note" action={<AddTask />} />
            <ActionContent
               className=""
               subtitle="Mark color"
               action={<GroupBtns data={btns.addTask.markColor} />}
            />
         </Panel>
         <Panel title="Filters tasks">
            <ActionContent
               className=""
               subtitle="Mark color"
               action={<GroupBtns data={btns.filtersTask.markColor} />}
            />
            <ActionContent
               className=""
               subtitle="Status"
               action={<GroupBtns data={btns.filtersTask.status} />}
            />
         </Panel>
         <Panel title="Selection action">
            <ActionContent
               className=""
               subtitle="Mark color"
               action={<GroupBtns data={btns.selectionAction.markColor} />}
            />
            <ActionContent
               className=""
               subtitle="Status"
               action={<GroupBtns data={btns.selectionAction.status} />}
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
