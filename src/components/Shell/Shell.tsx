import './shell.scss';

function Shell({ className, children }) {
   return <div className={`shell ${className}`}>{children}</div>;
}

export default Shell;
