/* eslint-disable prettier/prettier */
import { useState } from 'react';
import className from 'classnames';
import CheckboxSvg from '../checkboxSvg/checkboxSvg';

import './checkbox.scss';

function Checkbox() {
   const [checked, setChecked] = useState(false);


   const handleCheckboxClick = () => {
      setChecked(!checked);
   };

   const classNameChecked = className({
      'checkbox__checked': true,
      'checkbox__checked_enable': checked
   })

   return (
      <span className="checkbox" onClick={handleCheckboxClick}>
         <CheckboxSvg className="checkbox__input" name="input" />
         <CheckboxSvg className={classNameChecked} name="checked" />
      </span>
   );
}

export default Checkbox;
