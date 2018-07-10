import {
  FETCH_PEOPLE_PENDING,
  FETCH_PEOPLE_SUCCESS,
  FETCH_PEOPLE_FAIL
} from "../actions/actionTypes";

const initialState = {
  people: [
    {
      id: "1",
      name: "John",
      lastName: "Wick"
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PEOPLE_SUCCESS:
      console.log(action);
      return { ...state, people: action.payload.persons };
    default:
      return state;
  }
};

//sem action pra frente, passando apenas um inicial state
