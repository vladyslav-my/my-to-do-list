import { useState } from 'react';
import './InputField.scss';
import cn from 'classnames';

function InputField({
   placeholder,
   error,
   validation,
   className,
   value,
   setValue,
   ...props
}) {
   const [isError, setIsError] = useState(false);
   const [errorMsg, setErrorMsg] = useState('');
   // const [value, setValue] = useState('');
   const validationFunc = (e) =>
      validation(e.target.value, setIsError, setErrorMsg);

   const handleChange = (e) => {
      setValue(e.target.value);
      validationFunc(e);
   };

   const classNames = cn({
      'input-field': true,
      'input-field_active': value,
      'input-field_error': isError,
      [className]: [className],
   });

   const renderError = error ? (
      <span className="input-field__error">{errorMsg}</span>
   ) : null;

   return (
      <div className={classNames}>
         <span className="input-field__placeholder">{placeholder}</span>
         <div className="input-field__wrapper">
            <input
               className="input-field__input"
               type="text"
               placeholder={placeholder}
               value={value}
               onChange={handleChange}
               onBlur={validationFunc}
               {...props}
            />
         </div>
         {renderError}
      </div>
   );
}

export default InputField;
