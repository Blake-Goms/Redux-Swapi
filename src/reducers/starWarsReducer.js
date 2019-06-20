import {FETCH, SUCCESS, ERROR} from '../actions';

const initialState = {
  characters: [],
  isFetching: false,
  error: null,
  // Array characters, Boolean fetching, null error.
}
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCH: 
    return {
      ...state,
      isFetching: true,
      error: null
    };
    case SUCCESS:
      return {
        ...state,
        isFetching: false,
        characters: action.payload,
        error: null
      }
      case ERROR: 
      return {
        ...state,
        isFetching: false,
        error: 'Uh oh... shits broken 💩 '
      }
    default:
      return state;
  }
};
