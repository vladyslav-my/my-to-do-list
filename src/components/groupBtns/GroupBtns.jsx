import Btn from '../btn/Btn';
import './groupBtns.scss';

const btns = {
   markColor: [
      {
         label: 'Default',
         className: 'btn',
      },
      {
         label: 'Red',
         className: 'btn btn_red',
      },
      {
         label: 'Green',
         className: 'btn btn_green',
      },
      {
         label: 'Yellow',
         className: 'btn btn_yellow',
      },
      {
         label: 'Blue',
         className: 'btn btn_blue',
      },
   ],
};

function GroupBtns() {
   const renderBtns = (arr) => {
      return arr.map((btn) => {
         return (
            <Btn key={btn.label} label={btn.label} className={btn.className} />
         );
      });
   };

   return <div className="group-btns">{renderBtns(btns.markColor)}</div>;
}

export default GroupBtns;
