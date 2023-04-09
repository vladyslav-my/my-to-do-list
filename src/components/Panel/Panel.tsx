import './panel.scss';

function Panel({ className, title, children }) {
   return (
      <div className={`admin-panel ${className}`}>
         <h1 className="admin-panel__title">{title}</h1>
         <div className="admin-panel__action">{children}</div>
      </div>
   );
}

export default Panel;
