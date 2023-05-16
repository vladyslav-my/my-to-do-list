import cn from 'classnames';

import { FC } from 'react';
import { NavLink, useMatch } from 'react-router-dom';

type BtnProps = {};

const CustomNavLink: FC<BtnProps> = ({
   className = '',
   label,
   to,
   ...props
}) => {
   const match = useMatch(to);

   const classNames = cn('btn', {
      btn_active: match,
      [className]: className,
   });

   return (
      <NavLink className={classNames} type="button" to={to} {...props}>
         <span className="btn__label">{label}</span>
      </NavLink>
   );
};

export default CustomNavLink;
