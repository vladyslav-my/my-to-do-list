import './actionContent.scss';
import { FC, ReactNode, ReactChild } from 'react';

type ActionContentProps = {
   className?: string;
   subtitle: string;
   action: ReactNode | ReactChild;
};

const ActionContent: FC<ActionContentProps> = ({
   className,
   subtitle,
   action,
}) => {
   return (
      <div className={`action-content ${className}`}>
         <h2 className="action-content__subtitle">{subtitle}</h2>
         <div className="action-content__action">{action}</div>
      </div>
   );
};

ActionContent.defaultProps = {
   className: '',
};

export default ActionContent;
