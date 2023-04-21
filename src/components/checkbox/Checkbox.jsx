import { useState } from 'react';
import classNames from 'classnames';
import './checkbox.scss';

const CHECKBOX_STATES = {
   Checked: 'Checked',
   Indeterminate: 'Indeterminate',
   Empty: 'Empty',
};

function Checkbox() {
   const [checked, setChecked] = useState(false);

   // const handleChange = () => {
   //    const updatedChecked = (() => {
   //       switch (checked) {
   //          case CHECKBOX_STATES.Checked:
   //             return CHECKBOX_STATES.Empty;

   //          case CHECKBOX_STATES.Emty:
   //             return CHECKBOX_STATES.Checked;

   //          default:
   //             return CHECKBOX_STATES.Checked;
   //       }
   //    })();

   //    setChecked(updatedChecked);
   // };

   // const indeterminateChange = () => {};

   const className = classNames('checkbox', {
      isChecked: checked,
   });

   return (
      <span className={className} onClick={() => setChecked(!checked)}>
         <svg
            className="checkbox__input svg-checkbox"
            viewBox="0 0 18 18"
            xmlns="http://www.w3.org/2000/svg"
         >
            <path d="M14.625 2H15C15.5523 2 16 2.44772 16 3V3.375V14.625V15C16 15.5523 15.5523 16 15 16H14.5H3.375H3C2.44772 16 2 15.5523 2 15V14.625V3.375V3C2 2.44772 2.44772 2 3 2H3.375H14.625ZM3.375 0C1.51104 0 0 1.51104 0 3.375V14.625C0 16.489 1.51104 18 3.375 18H14.625C16.489 18 18 16.489 18 14.625V3.375C18 1.51104 16.489 0 14.625 0H3.375Z" />
         </svg>
         <svg
            className="checkbox__cheched svg-checkbox"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
         >
            <path d="M19.5826 3.08372C17.1375 6.15946 11.1933 13.6494 6.42149 19.7637C6.18767 20.0633 5.76964 20.0802 5.5146 19.8019L0.503707 14.333C-0.169549 13.5982 -0.167658 12.4085 0.507934 11.6762C1.17659 10.9515 2.25617 10.9457 2.93139 11.6632L5.8174 14.7298L16.9904 0.6458C17.6051 -0.129105 18.6792 -0.219286 19.3959 0.44382C20.1213 1.11504 20.2056 2.30003 19.5826 3.08372Z" />
         </svg>
      </span>
   );
}

export default Checkbox;
