import Panel from '../../panel/Panel';
import InputField from '../../inputField/InputField';
import Btn from '../../btn/Btn';
import './authPage.scss';

function AuthPage() {
   return (
      <div className="auth-page">
         <Panel className="panel_box_auth auth-page__panel" title="Auth">
            <div className="auth-page__wrapper-input">
               <InputField className="auth-page__input" placeholder="Login" />
               <InputField
                  className="auth-page__input"
                  placeholder="Password"
               />
            </div>
            <Btn className="btn_red" label="Submit" />
         </Panel>
      </div>
   );
}

export default AuthPage;

{
   /* <div className="authorization-features">
                     <Panel
                        className="authorization-features__panel"
                        title="Add task"
                     >
                        <InputField
                           placeholder="placeholder"
                           error="error"
                           maxLength={20}
                           minLength={2}
                           validation={(value, setIsError, setErrorMsg) => {
                              console.log('validation');
                              switch (value) {
                                 case '': {
                                    setIsError(true);
                                    setErrorMsg(
                                       'Поле placeholder не заповнене'
                                    );
                                    break;
                                 }
                                 default: {
                                    setIsError(false);
                                    setErrorMsg('');
                                 }
                              }
                           }}
                        />
                     </Panel>
                  </div> */
}
