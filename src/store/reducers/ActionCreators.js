import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { AppDispatch } from '../store';
// import { IUser } from '../../models/IUser';

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(userSlice.actions.usersFetching())
//         const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
//         dispatch(userSlice.actions.usersFetchingSuccess(response.data))
//     } catch (e) {
//         dispatch(userSlice.actions.usersFetchingError(e.message))
//     }
// }

export const fetchBtns = createAsyncThunk(
   'user/fetchAll',
   async (_, thunkAPI) => {
      try {
         const response = await axios.get('http://localhost:8009/btns');
         return response.data;
      } catch (e) {
         return thunkAPI.rejectWithValue('Не удалось загрузить пользователей');
      }
   }
);
