import Btn from '@/components/shared/btn/Btn';
import InputField from '@/components/shared/inputField/InputField';

function RegisterForm() {
   return (
      <form className="auth-form">
         <InputField className="auth-form__input" placeholder="Login" />
         <InputField className="auth-form__input" placeholder="Password" />
         <InputField className="auth-form__input" placeholder="Email" />
         <Btn className="auth-form btn_red" label="Submit" />
      </form>
   );
}

export default RegisterForm;
