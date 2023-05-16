import Panel from '@/components/blocks/panel/Panel';
import LoginForm from '@/components/forms/loginForm/LoginForm';

function LoginPage() {
   return (
      <div className="auth-page">
         <Panel className="panel_box_auth auth-page__panel" title="Login">
            <LoginForm />
         </Panel>
      </div>
   );
}

export default LoginPage;
