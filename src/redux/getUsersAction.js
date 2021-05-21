import axios from "axios";
import { GET_USERS } from "./types";

const getUsers = (users) => {
  return {
    type: GET_USERS,
    payload: users,
  };
};

const getAllUsers = (url) => (dispatch) =>
  axios.get(url).then(({ data }) => dispatch(getUsers(data)));

export default getAllUsers;
