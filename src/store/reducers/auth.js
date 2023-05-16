const initialState = {
   userData: null,
   auth: false, // true
   authType: 'log-in', // sign in
   status: 'idle',
};

const auth = (state = initialState, action) => {
   switch (action.type) {
      case 'AUTH_FETCHING':
         return {
            ...state,
            status: 'loading',
         };
      case 'AUTH_FETCHED':
         return {
            ...state,
            userData: action.payload,
            status: 'idle',
         };
      case 'AUTH_CHANGED_TYPE':
         return {
            ...state,
            authType: action.payload,
         };
      default:
         return state;
   }
};

export default auth;
