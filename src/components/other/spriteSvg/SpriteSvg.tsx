import './spriteSvg.scss';
import { FC } from 'react';
import checkboxPath from '@/assets/checkbox.svg';
import iconsPath from '@/assets/icons.svg';

interface CheckboxSvgProps {
   className?: string;
   name: string;
   namePath: string;
}

const CheckboxSvg: FC<CheckboxSvgProps> = ({
   className = '',
   name,
   namePath,
}) => {
   const [path, clazz] = (() => {
      switch (namePath) {
         case 'checkbox':
            return [checkboxPath, 'svg-icon_checkbox'];
         case 'icons':
            return [iconsPath, 'svg-icon_icons'];
         default:
            return [iconsPath, undefined];
      }
   })();

   return (
      <svg className={`svg-icon ${clazz} ${className}`}>
         <use href={`${path}#${name}`} />
      </svg>
   );
};

export default CheckboxSvg;
