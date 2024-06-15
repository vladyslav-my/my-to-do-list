import { configureStore } from '@reduxjs/toolkit';
import btnsReducer from './reducers/BtnsSlice';

// import auth from '@/store/reducers/auth';
// import tasks from '@/store/reducers/tasks';
// import btns from '@/store/reducers/btns';

const store = configureStore({
   reducer: { btnsReducer },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
   devTools: process.env.NODE_ENV !== 'production',
});

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

export default store;
