import './addTask.scss';

import { FC } from 'react';
import IconsSvg from '@/components/other/iconsSvg/IconsSvg';
import SpriteSvg from '@/components/other/spriteSvg/SpriteSvg';

const AddTask: FC = () => {
   return (
      <div className="add-task">
         <input className="add-task__input" type="text" />
         <SpriteSvg
            className="add-task__add-icon"
            namePath="icons"
            name="cross"
         />
      </div>
   );
};

export default AddTask;
