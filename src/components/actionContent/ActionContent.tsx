import './actionContent.scss';

type ActionContentProps = {
   className: string;
   subtitle: string;
   action: string;
};

function ActionContent({ className, subtitle, action }: ActionContentProps) {
   return (
      <div className="action-content">
         <h2 className="action-content__subtitle">{subtitle}</h2>
         <div className="action-content__action">{action}</div>
      </div>
   );
}

export default ActionContent;
