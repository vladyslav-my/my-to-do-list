import iconsSvgSpritePath from '../../assets/icons.svg';

import './iconsSvg.scss';

function CheckboxSvg({ className, name }) {
   return (
      <svg className={`icons ${className}`}>
         <use href={`${iconsSvgSpritePath}#icons-${name}`} />
      </svg>
   );
}

export default CheckboxSvg;
