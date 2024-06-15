import Panel from '@/components/blocks/panel/Panel';
import RegisterForm from '@/components/forms/registerForm/RegisterForm';

function RegisterPage() {
   return (
      <Panel className="panel_box_auth auth-page__panel" title="Register">
         <RegisterForm />
      </Panel>
   );
}

export default RegisterPage;
