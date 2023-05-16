import './logIn.scss';

import { NavLink } from 'react-router-dom';
import Btn from '@/components/shared/btn/Btn';
import CustomNavLink from '@/components/shared/customNavLink/CustomNavLink';

function LogIn() {
   // const navigate = useNavigate();

   // const btnsLink = {
   //    'log-in': () => {
   //       navigate('/login');
   //    },
   //    'sign-in': () => {
   //       navigate('/register');
   //    },
   // };
   return (
      <div className="auth">
         <CustomNavLink to="/login" className="btn btn_red" label="Log in" />
         <CustomNavLink
            className="btn btn_red"
            label="Sign in"
            to="/register"
         />
      </div>
   );
}

export default LogIn;
