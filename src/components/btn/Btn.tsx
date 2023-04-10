import './btn.scss';

function Btn({ className, label }) {
   return (
      <button className={`btn ${className}`}>
         <span className="btn__label">{label}</span>
      </button>
   );
}

export default Btn;
