import { configureStore } from '@reduxjs/toolkit';

import auth from '@/store/reducers/auth';
import tasks from '@/store/reducers/tasks';
import btns from '@/store/reducers/btns';

const store = configureStore({
   reducer: { auth, tasks, btns },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
   devTools: process.env.NODE_ENV !== 'production',
});

export default store;
