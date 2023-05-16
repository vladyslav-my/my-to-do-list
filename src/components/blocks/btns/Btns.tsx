import './groupBtns.scss';

import { FC, useState } from 'react';
import Btn from '@/components/shared/btn/Btn';
import '@/components/blocks/groupBtns/GroupBtns';
import cn from 'classnames';

const btns: DataBtnsType = [
   {
      label: 'Default',
      name: 'default',
      className: 'btn',
   },
   {
      label: 'Red',
      name: 'red',
      className: 'btn btn_red',
   },
   {
      label: 'Green',
      name: 'green',
      className: 'btn btn_green',
   },
   {
      label: 'Yellow',
      name: 'yellow',
      className: 'btn btn_yellow',
   },
   {
      label: 'Blue',
      name: 'blue',
      className: 'btn btn_blue',
   },
];

type BtnType = {
   label: string;
   name: string;
   className?: string;
};

type DataBtnsType = Array<BtnType>;

interface GroupBtnsProps {
   dataBtns?: DataBtnsType;
}

const Btns: FC<GroupBtnsProps> = ({ dataBtns = btns }) => {
   const [activeBtn, setActiveBtn] = useState('default');
   const handleClick = (name: string) => {
      const active = name !== activeBtn ? name : activeBtn;
      setActiveBtn(active);
   };

   const renderBtns = (dataBtns: DataBtnsType) => {
      return dataBtns.map(({ name, label, className = '' }) => {
         const classNames = cn({
            btn_active: activeBtn === name,
            [className]: className,
         });

         return (
            <Btn
               onClick={() => handleClick(name)}
               key={name}
               label={label}
               className={classNames}
            />
         );
      });
   };

   return <div className="group-btns">{renderBtns(dataBtns)}</div>;
};

export default Btns;
