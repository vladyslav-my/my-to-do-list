import './task.scss';
import cn from 'classnames';
import { FC } from 'react';
import Checkbox from '@/components/shared/checkbox/Checkbox';
import GroupCheckbox from '@/components/shared/groupCheckbox/GroupCheckbox';
import SpriteSvg from '@/components/other/spriteSvg/SpriteSvg';

type TaskProps = {
   className?: string;
   isAdd?: boolean;
};

const Task: FC<TaskProps> = ({ className = '', isAdd = false }) => {
   const classNames = cn(className, {
      task: true,
      task_add: isAdd,
   });

   return (
      <div className={classNames}>
         <input className="task__input" type="text" />
         <div className="task__action">
            {isAdd ? (
               <GroupCheckbox className="task__checkbox" />
            ) : (
               <Checkbox className="task__checkbox" />
            )}
            <SpriteSvg className="task__rewrite" namePath="icons" name="pen" />
            <SpriteSvg className="task__cross" namePath="icons" name="cross" />
         </div>
      </div>
   );
};

export default Task;
