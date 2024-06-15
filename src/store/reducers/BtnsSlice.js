import { createSlice } from '@reduxjs/toolkit';
import { fetchBtns } from './ActionCreators';

const initialState = {
   btns: {
      addTask: {
         markColor: [],
      },
      filtersTask: {
         markColor: [],
         status: [],
      },
      selectionAction: {
         markColor: [],
         status: [],
      },
   },
   status: 'emty', // loading, error
};

const btnsSlice = createSlice({
   name: 'btns',
   initialState,
   reducers: {},
   extraReducers: {
      [fetchBtns.fulfilled.type]: (state, action) => {
         state.status = 'idle';
         state.btns = action.payload;
      },
      [fetchBtns.pending.type]: (state, action) => {
         state.status = 'loading';
      },
      [fetchBtns.rejected.type]: (state, action) => {
         state.status = 'emty'; // error
      },
   },
});

export default btnsSlice.reducer;
