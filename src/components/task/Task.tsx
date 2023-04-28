/* eslint-disable prettier/prettier */
import './task.scss';
import cn from 'classnames';
import Checkbox from '../checkbox/Checkbox';
import GroupCheckbox from '../checkbox/GroupCheckbox';
import IconsSvg from '../iconsSvg/IconsSvg';

function Task({ className, isAdd }) {

   const classNames = cn(className, {
      'task': true,
      'task_add': isAdd
   });

   return (
      <div className={classNames}>
         <input className="task__input" type="text" />
         <div className="task__action">
            {isAdd ? <GroupCheckbox className="task__checkbox" /> : <Checkbox className="task__checkbox"/>}
            <IconsSvg className="task__rewrite" name="pen" />
            <IconsSvg className="task__cross task__cross" name="cross" />
         </div>
      </div>
   );
}

export default Task;
