const INITIAL_STATE = {
  current_user: null,
};
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET CURRENT_USER":
      return {
        ...state,
        current_user: action.payload,
      };
    default:
      return state;
  }
};
