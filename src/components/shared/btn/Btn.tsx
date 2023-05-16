import cn from 'classnames';
import './btn.scss';

import { FC } from 'react';

type BtnProps = {
   className?: string;
   label: string;
   onClick: () => void;
};

const Btn: FC<BtnProps> = ({ className = '', label, onClick, ...props }) => {
   const classNames = cn('btn', {
      [className]: className,
   });

   return (
      <button onClick={onClick} className={classNames} {...props}>
         <span className="btn__label">{label}</span>
      </button>
   );
};

export default Btn;
