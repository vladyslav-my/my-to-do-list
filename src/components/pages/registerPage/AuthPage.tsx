import Panel from '@/components/blocks/panel/Panel';

import RegisterForm from '@/components/forms/registerForm/RegisterForm';
import AuthForm from '@/components/forms/authForm/AuthForm';

function RegisterPage() {
   return (
      <div className="auth-page">
         <Panel className="panel_box_auth auth-page__panel" title="Register">
            {/* <RegisterForm /> */}
            <AuthForm />
         </Panel>
      </div>
   );
}

export default RegisterPage;
