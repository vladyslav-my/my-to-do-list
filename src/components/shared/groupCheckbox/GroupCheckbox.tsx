import { FC, useState } from 'react';
import cn from 'classnames';
import SpriteSvg from '@/components/other/spriteSvg/SpriteSvg';

type GroupCheckboxProps = {
   className?: string;
   isChecked?: boolean;
   isInterminate?: boolean;
};

const GroupCheckbox: FC<GroupCheckboxProps> = ({
   className = '',
   isChecked = false,
   isInterminate = false,
}) => {
   const [checked, setChecked] = useState<boolean>(isChecked);
   const [interminate, setInterminate] = useState<boolean>(isInterminate);

   const classNames = {
      checked: cn('checkbox__checked', {
         checkbox__checked_enable: checked,
      }),
      interminate: cn('checkbox__interminate', {
         checkbox__interminate_enable: interminate,
      }),
   };

   const handleCheckboxClick = () => {
      if (!interminate) {
         setChecked(!checked);
      } else {
         setChecked(false);
      }
   };

   return (
      <span
         className={`checkbox ${className}`}
         aria-checked={checked}
         onClick={handleCheckboxClick}
         role="checkbox"
         tabIndex={0}
      >
         <SpriteSvg
            className="checkbox__group-input"
            namePath="checkbox"
            name="group-input"
         />
         <SpriteSvg
            className={classNames.checked}
            namePath="checkbox"
            name="checked"
         />
         <SpriteSvg
            className={classNames.interminate}
            namePath="checkbox"
            name="interminate"
         />
      </span>
   );
};

export default GroupCheckbox;
