import './groupBtns.scss';

import { FC, useEffect, useState } from 'react';
import Btn from '@/components/shared/btn/Btn';
import '@/components/blocks/groupBtns/GroupBtns';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import Skeleton from '@/components/other/skeleton/Skeleton';

type BtnType = {
   label: string;
   name: string;
   className?: string;
};

type DataBtnsType = Array<BtnType>;

interface GroupBtnsProps {
   data: DataBtnsType;
}

const Btns = ({ data }) => {
   const [activeBtn, setActiveBtn] = useState(data?.[0]?.name);

   const handleClick = (name: string) => {
      const active = name !== activeBtn ? name : activeBtn;
      setActiveBtn(active);
   };

   const renderBtns = (data: DataBtnsType) => {
      return data.map(({ name, label, className = '' }) => {
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

   return <>{renderBtns(data)}</>;
};

const GroupBtns: FC<GroupBtnsProps> = ({ data }) => {
   const { status } = useSelector((state) => state.btns);
   return (
      <div className="group-btns">
         {status === 'emty' || status === 'loading' ? (
            <Skeleton />
         ) : (
            <Btns data={data} />
         )}
      </div>
   );
};

export default GroupBtns;
