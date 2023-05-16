import { FC, useState } from 'react';
import cn from 'classnames';
// import CheckboxSvg from '@/components/other/checkboxSvg/CheckboxSvg';

import SpriteSvg from '@/components/other/spriteSvg/SpriteSvg';

type CheckboxProps = {
   className?: string;
   isChecked?: boolean;
};

const Checkbox: FC<CheckboxProps> = ({ className = '', isChecked = false }) => {
   const [checked, setChecked] = useState<boolean>(isChecked);

   const handleCheckboxClick = () => {
      setChecked(!checked);
   };

   const classNameChecked: string = cn({
      checkbox__checked: true,
      checkbox__checked_enable: checked,
   });

   return (
      <span
         className={`checkbox ${className}`}
         aria-checked={checked}
         onClick={handleCheckboxClick}
         role="checkbox"
         tabIndex={0}
      >
         <SpriteSvg
            className="checkbox__input"
            namePath="checkbox"
            name="input"
         />
         <SpriteSvg
            className={classNameChecked}
            namePath="checkbox"
            name="checked"
         />
      </span>
   );
};

export default Checkbox;
