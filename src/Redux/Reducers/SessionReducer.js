import actionTypes from '../Actions/actionTypes';
import initialStates from './initialStates';
const initialState = initialStates.SessionReducer;

export default SessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.logout: {
      return {
        ...initialStates.SessionReducer,
        token: null,
        userData: null,
      };
    }
    case actionTypes.login: {
      return {
        ...state,
        token: action.session.token,
        userData: action.session.user,
      };
    }
    case actionTypes.getProfile: {
      return {
        ...state,
        userData: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export const selectUser = state => state.SessionReducer.loggedInfo;
export const selectSavedInfo = state => state.SessionReducer.savedInfo;
