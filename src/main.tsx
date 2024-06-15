import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import router from './routing/router';
import store from '@/store/store';

import App from './components/app/App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
   // <React.StrictMode></React.StrictMode>
   <Provider store={store}>
      <RouterProvider router={router} />
   </Provider>
);
