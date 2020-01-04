import { ERROR, CLEAR_ERROR } from "../actions/constants";

const initialState = {
  errors: []
};

export default function ErrorReducer(state = initialState, action) {
  switch (action.type) {
    case ERROR:
      return {
        ...state,
        errors: [...state.errors, { message: action.payload }]
      };

    case CLEAR_ERROR:
      return {
        ...state,
        errors: []
      };

    default:
      return state;
  }
}
