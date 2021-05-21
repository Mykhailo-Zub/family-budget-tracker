import { GET_USERS } from "./types";

const getUsersReducer = (state = [], action) => {
  switch (action.type) {
    case GET_USERS:
      return action.payload;
    default:
      return state;
  }
};

export default getUsersReducer;
