const initialState = {
   tasks: [],
   status: 'idle', // loading, error
};

const tasks = (state = initialState, action) => {
   switch (action.type) {
      case 'TASKS_FETCHING':
         return {
            ...state,
         };
      default:
         return state;
   }
};

export default tasks;
