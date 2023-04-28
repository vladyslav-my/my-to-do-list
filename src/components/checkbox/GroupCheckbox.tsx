/* eslint-disable prettier/prettier */
import { useState } from 'react';
import className from 'classnames';
import CheckboxSvg from '../checkboxSvg/CheckboxSvg';

import './checkbox.scss';


function GroupCheckbox() {
   const [checked, setChecked] = useState(false);
   const [interminate, setInterminate] = useState(false);

   const classNames = {
      checked: className({
         'checkbox__checked': true,
         'checkbox__checked_enable': checked
      }),
      interminate: className({
         'checkbox__interminate': true,
         'checkbox__interminate_enable': interminate
      }),
   }

   const handleCheckboxClick = () => {
      if(!interminate) {
         setChecked(!checked);
      } else {
         setChecked(false);
      }

   };

   return (
      <span className="checkbox" onClick={handleCheckboxClick}>
         <CheckboxSvg className="checkbox__group-input" name="group-input" />
         <CheckboxSvg className={classNames.checked} name="checked" />
         <CheckboxSvg className={classNames.interminate} name="interminate" />
      </span>
   );
}

export default GroupCheckbox;
