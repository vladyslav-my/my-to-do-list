import './logIn.scss';
import Btn from '../btn/Btn';

function LogIn() {
   return (
      <div className="log-in">
         <span className="log-in__name">Vladislav</span>
         <Btn className="btn btn_red log-in__btn-log-out" label="Log out" />
      </div>
   );
}

export default LogIn;
