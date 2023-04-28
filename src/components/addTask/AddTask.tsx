import './addTask.scss';
// import { ReactComponent as Add } from '../../assets/remove.svg';
import IconsSvg from '../iconsSvg/IconsSvg';

function AddTask() {
   return (
      <div className="add-task">
         <input className="add-task__input" type="text" />
         <IconsSvg className="add-task__add-icon" name="cross" />
      </div>
   );
}

export default AddTask;
