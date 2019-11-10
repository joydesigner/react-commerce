import UserActionTypes from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null
      };
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
<<<<<<< HEAD
    case UserActionTypes.SIGN_UP_FAILURE:
=======
>>>>>>> 6ba2bffae2949c5320b42f02c7c39871f15ac149
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}

export default userReducer;