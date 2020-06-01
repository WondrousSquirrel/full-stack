import { REQUEST_SUCCESS } from "../actions/types";

export default (state = {}, { type, error }) => {
  if (type === REQUEST_SUCCESS) {
    return { errorMessage: null };
  }
  if (error) {
    return {
      errorMessage: error,
    };
  }
  return state;
};
