import { useEffect, useState } from 'react';
import './InputField.scss';
import classNames from 'classnames';

function InputField({ placeholder, error, maxLength, minLength, validation }) {
   const [isError, setIsError] = useState(false);
   const [errorMsg, setErrorMsg] = useState('');
   const [value, setValue] = useState('');
   const validationFunc = (e) =>
      validation(e.target.value, setIsError, setErrorMsg);

   const handleChange = (e) => {
      setValue(e.target.value);
      validationFunc(e);
   };

   const className = classNames({
      'input-field': true,
      'input-field_active': value,
      'input-field_error': isError,
   });

   const renderError = error ? (
      <span className="input-field__error">{errorMsg}</span>
   ) : null;

   console.log('render');
   return (
      <div className={className}>
         <span className="input-field__placeholder">{placeholder}</span>
         <div className="input-field__wrapper">
            <input
               className="input-field__input"
               type="text"
               placeholder={placeholder}
               value={value}
               onChange={handleChange}
               onBlur={validationFunc}
               maxLength={maxLength}
               minLength={minLength}
            />
         </div>
         {renderError}
      </div>
   );
}

export default InputField;
