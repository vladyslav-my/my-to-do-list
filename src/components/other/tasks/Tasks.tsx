import { FC } from 'react';
import Task from '../task/Task';

import './tasks.scss';

type TasksProps = {
   className: string;
};

const Tasks: FC<TasksProps> = ({ className = '' }) => {
   return (
      <div className={`tasks ${className}`}>
         <Task className="tasks__item" />
         <Task className="tasks__item" />
         <Task className="tasks__item" />
         <Task className="tasks__item" />
         <Task className="tasks__item" />
         <Task className="tasks__item" />
         <Task className="tasks__item" />
         <Task className="tasks__item" isAdd />
         <div />
      </div>
   );
};

export default Tasks;
