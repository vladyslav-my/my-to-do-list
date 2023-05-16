import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useState } from 'react';
import Btn from '@/components/shared/btn/Btn';
import InputField from '@/components/shared/inputField/InputField';
import './authPage.scss';
import { instance } from '@/api/api.js';

function AuthForm() {
   const [authType, setAuthType] = useState('login');
   const [login, setLogin] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');

   const handlerClick = () => {
      // setMount(!mount);
      setAuthType((authType) =>
         authType === 'register' ? 'login' : 'register'
      );
   };

   const handlerSubmitRegister = (e) => {
      e.preventDefault();
      const newUser = {
         id: null,
         login,
         email,
         password,
      };
      setLogin('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');

      instance.post('users', newUser).then((data) => console.log(data));
   };

   const handlerSubmitLogin = (e) => {
      e.preventDefault();
      setLogin('');
      setPassword('');

      instance
         .get('users', {
            params: {
               login,
               password,
            },
         })
         .then((data) => console.log(data));
   };

   return (
      <form
         className="auth-form"
         onSubmit={
            authType === 'register' ? handlerSubmitRegister : handlerSubmitLogin
         }
      >
         <InputField
            className="auth-form__input"
            placeholder="Login"
            setValue={setLogin}
            value={login}
         />
         <AnimatedInputField
            className="auth-form__input"
            placeholder="Email"
            isMount={authType === 'register'}
            setValue={setEmail}
            value={email}
         />
         <InputField
            className="auth-form__input"
            placeholder="Password"
            setValue={setPassword}
            value={password}
         />
         <AnimatedInputField
            className="auth-form__input"
            placeholder="Confirm password"
            isMount={authType === 'register'}
            setValue={setConfirmPassword}
            value={confirmPassword}
         />
         <Btn type="submit" className="auth-form btn_red" label="Submit" />
      </form>
   );
}

export default AuthForm;

const AnimatedInputField = ({ isMount, ...props }) => {
   return (
      <CSSTransition
         in={isMount}
         timeout={200}
         classNames="my-node"
         mountOnEnter
         unmountOnExit
      >
         <InputField {...props} />
      </CSSTransition>
   );
};
