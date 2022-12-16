import actionTypes from '../Actions/actionTypes';
import initialStates from './initialStates';
const initialState = initialStates.GeneralReducer;
const off_payload = {
  loading: false,
  softLoading: false,
};
const on_payload = {
  loading: true,
  softLoading: true,
};
const on_soft = {
  softLoading: true,
};
const off_soft = {
  softLoading: false,
};
export default GeneralReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.getHomeData: {
      return {
        ...state,
        ...off_soft,
      };
    }
    case actionTypes.storeBiometricData: {
      return {
        ...state,
        ...off_payload,
      };
    }
    case actionTypes.logout: {
      return {
        ...state,
        ...off_payload,
      };
    }
    case actionTypes.softLoaderOff: {
      return {
        ...state,
        ...off_soft,
      };
    }
    case actionTypes.softLoaderOn: {
      return {
        ...state,
        ...on_soft,
      };
    }
    case actionTypes.login: {
      return {
        ...state,
        ...off_payload,
      };
    }
    case actionTypes.saveProfile: {
      return {
        ...state,
        ...off_payload,
      };
    }
    case actionTypes.loaderOn: {
      return {
        ...state,
        ...on_payload,
      };
    }
    case actionTypes.loaderOff: {
      return {
        ...state,
        ...off_payload,
      };
    }

    case actionTypes.getMySubscription: {
      return {
        ...state,
        mySubscription: action.subscription,
      };
    }
    case actionTypes.setServices: {
      return {
        ...state,
        services: action.payload,
      };
    }
    case actionTypes.billingDetails: {
      return {
        ...state,
        billingDetails: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
