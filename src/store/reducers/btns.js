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

const btns = (state = initialState, action) => {
   switch (action.type) {
      case 'BTNS_FETCHING':
         return {
            ...state,
            status: 'loading',
         };
      case 'BTNS_FETCHED':
         return {
            ...state,
            btns: action.payload,
            status: 'idle',
         };
      default:
         return state;
   }
};

export default btns;
