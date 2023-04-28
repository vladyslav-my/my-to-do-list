import Task from '../task/Task';

import './tasks.scss';

function Tasks({ className, label }) {
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
}

export default Tasks;
