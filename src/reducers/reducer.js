const iState = {
  name: "Munesh"
};
const reducer = (state = iState, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return {
        name: action.payload
      };
    case "CHANGE_NAME_SUCCESS":
      return {
        ...state,
        name: action.payload
      };
    case "CHANGE_NAME_FAILED":
      return {
        ...state
      };
    default:
      return state;
  }
};

export default reducer;
