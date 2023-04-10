import './panel.scss';

function Panel({ className, title, children }) {
   return (
      <div className={`panel ${className}`}>
         <h1 className="panel__title">{title}</h1>
         <div className="panel__action">{children}</div>
      </div>
   );
}

export default Panel;
