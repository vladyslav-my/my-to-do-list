/* eslint-disable react/jsx-props-no-spreading */
import './shell.scss';

import { FC, HTMLAttributes, ReactChild, ReactNode } from 'react';

const Shell: FC<ShellProps> = ({ className, children, ...restProps }) => {
   return (
      <div className={`shell ${className}`} {...restProps}>
         {children}
      </div>
   );
};

interface ShellProps {
   className?: string;
   children: ReactNode | ReactChild;
   // eslint-disable-next-line react/require-default-props
   restProps?: HTMLAttributes<HTMLDivElement>;
}

Shell.defaultProps = {
   className: '',
};

export default Shell;
