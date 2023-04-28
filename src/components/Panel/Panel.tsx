import './panel.scss';

function Panel({ className, title, children }) {
   return (
      <div className={`panel ${className}`}>
         <div className="panel__box">
            <h1 className="panel__title">{title}</h1>
            <div className="panel__content">{children}</div>
         </div>
      </div>
   );
}

export default Panel;
