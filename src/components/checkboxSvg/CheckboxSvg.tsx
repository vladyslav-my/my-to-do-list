import checkboxSvgSpritePath from '../../assets/checkbox.svg';
import './checkboxSvg.scss';

function CheckboxSvg({ className, name }) {
   return (
      <svg className={`checkbox-svg ${className}`}>
         <use href={`${checkboxSvgSpritePath}#checkbox-${name}`} />
      </svg>
   );
}

export default CheckboxSvg;
