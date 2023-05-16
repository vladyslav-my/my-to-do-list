import Btn from '@/components/shared/btn/Btn';
import InputField from '@/components/shared/inputField/InputField';

function LoginForm() {
   return (
      <form className="auth-page__wrapper-input">
         <InputField className="auth-page__input" placeholder="Login" />
         <InputField className="auth-page__input" placeholder="Password" />
         <Btn className="btn_red" label="Submit" />
      </form>
   );
}

export default LoginForm;
