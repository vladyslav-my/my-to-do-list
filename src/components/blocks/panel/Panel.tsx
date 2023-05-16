import { FC, ReactChild, ReactNode } from 'react';
import './panel.scss';

interface PanelProps {
   className?: string;
   title: string;
   children: ReactNode | ReactChild;
}

const Panel: FC<PanelProps> = ({ className, title, children }) => {
   return (
      <div className={`panel ${className}`}>
         <div className="panel__box">
            <h1 className="panel__title">{title}</h1>
            <div className="panel__content">{children}</div>
         </div>
      </div>
   );
};

Panel.defaultProps = {
   className: '',
};

export default Panel;
