import { POST_PEOPLE_SUCCESS } from "../actions/actionTypes";
const initialState = { name: "", lastName: "" };

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_PEOPLE_SUCCESS:
      console.log(action);
      return { ...state, people: action.payload.persons };
    default:
      return state;
  }
};
