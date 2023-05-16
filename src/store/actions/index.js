export const btnsFetching = () => {
   return {
      type: 'BTNS_FETCHING',
   };
};

export const btnsFetched = (btns) => {
   return {
      type: 'BTNS_FETCHED',
      payload: btns,
   };
};

export const fetchBtns = (request) => (dispatch) => {
   dispatch(btnsFetching());
   request.then((data) => dispatch(btnsFetched(data)));
};

export const fetchUserAuth = (request) => (dispatch) => {
   dispatch(btnsFetching());
   request.then((data) => dispatch(btnsFetched(data)));
};

export const authChengedType = (authType) => {
   return {
      type: 'AUTH_CHANGED_TYPE',
      payload: authType,
   };
};
