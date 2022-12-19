import {useDispatch} from 'react-redux';
import actionTypes from './actionTypes';
import {endpoints} from '../../Api/configs';
import {post, get, postForSubscription} from '../../Api';
import {showToast, getMessage} from '../../Api/HelperFunction';

export const getHomeData = () => {
  return async dispatch => {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          dispatch({type: actionTypes.loaderOn});

          const response = await get(endpoints.other.home);
          resolve(response);
        } catch (e) {
          showToast(getMessage(e));
          reject(e);
        } finally {
          dispatch({type: actionTypes.loaderOff});
        }
      }, 300);
    });
  };
};

export const restaurantDetails = data => {
  return async dispatch => {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          dispatch({type: actionTypes.loaderOn});

          const response = await post(
            endpoints.other.restaurantDetail,
            data,
            true,
          );

          resolve(response);
        } catch (e) {
          showToast(getMessage(e));
          reject(e);
        } finally {
          dispatch({type: actionTypes.loaderOff});
        }
      }, 300);
    });
  };
};

export const getProfileData = () => {
  return async dispatch => {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          dispatch({type: actionTypes.loaderOn});

          const response = await get(endpoints.other.getProfile);
          dispatch({type: actionTypes.getProfile, session: response});
          resolve(response);
        } catch (e) {
          showToast(getMessage(e));
          reject(e);
        } finally {
          dispatch({type: actionTypes.loaderOff});
        }
      }, 300);
    });
  };
};

export const getMySubscription = () => {
  return async dispatch => {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          // dispatch({type: actionTypes.loaderOn});

          const response = await get(endpoints.other.getMySubscription);
          resolve(response);
        } catch (e) {
          showToast(getMessage(e));
          reject(e);
        } finally {
          dispatch({type: actionTypes.loaderOff});
        }
      }, 300);
    });
  };
};

export const getSubscriptionLogs = () => {
  return async dispatch => {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          dispatch({type: actionTypes.loaderOn});

          const response = await get(endpoints.other.subscriptionLogs);
          resolve(response);
        } catch (e) {
          showToast(getMessage(e));
          reject(e);
        } finally {
          dispatch({type: actionTypes.loaderOff});
        }
      }, 300);
    });
  };
};

export const getProvoPackages = () => {
  return async dispatch => {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          dispatch({type: actionTypes.loaderOn});

          const response = await get(endpoints.other.provoPackages);
          resolve(response);
        } catch (e) {
          showToast(getMessage(e));
          reject(e);
        } finally {
          dispatch({type: actionTypes.loaderOff});
        }
      }, 300);
    });
  };
};

export const getProvoWallet = () => {
  return async dispatch => {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          dispatch({type: actionTypes.loaderOn});

          const response = await get(endpoints.other.provoWallet);
          resolve(response);
        } catch (e) {
          showToast(getMessage(e));
          reject(e);
        } finally {
          dispatch({type: actionTypes.loaderOff});
        }
      }, 300);
    });
  };
};
export const getBillingDetails = () => {
  return async dispatch => {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          dispatch({type: actionTypes.loaderOn});

          const response = await get(endpoints.other.getBilling);
          dispatch({
            type: actionTypes.billingDetails,
            payload: response?.billingdetails,
          });

          resolve(response);
        } catch (e) {
          showToast(getMessage(e));
          reject(e);
        } finally {
          dispatch({type: actionTypes.loaderOff});
        }
      }, 300);
    });
  };
};

export const addRestaurantRequest = data => {
  return async dispatch => {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          dispatch({type: actionTypes.loaderOn});

          const response = await post(
            endpoints.other.addRestaurantRequest,
            data,
            true,
          );

          resolve(response);
        } catch (e) {
          showToast(getMessage(e));
          reject(e);
        } finally {
          dispatch({type: actionTypes.loaderOff});
        }
      }, 300);
    });
  };
};

export const getRestaurantRequest = () => {
  return async dispatch => {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          dispatch({type: actionTypes.loaderOn});

          const response = await get(endpoints.other.getRestaurantRequest);

          resolve(response);
        } catch (e) {
          showToast(getMessage(e));
          reject(e);
        } finally {
          dispatch({type: actionTypes.loaderOff});
        }
      }, 300);
    });
  };
};
