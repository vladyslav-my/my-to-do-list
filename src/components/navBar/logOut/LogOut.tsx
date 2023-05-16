import './logOut.scss';
import Btn from '@/components/shared/btn/Btn';

function LogOut() {
   return (
      <div className="log-out">
         <span className="log-out__name">Vladislav</span>
         <Btn className="btn btn_red log-out__btn" label="Log out" />
      </div>
   );
}

export default LogOut;
