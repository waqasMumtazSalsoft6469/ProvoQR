import {useDispatch} from 'react-redux';
import actionTypes from './actionTypes';
import {post, get, postForSubscription, customGet} from '../../Api';
import {endpoints} from '../../Api/configs';
import {getMessage, showToast} from '../../Api/HelperFunction';

export const login = data => {
  return async dispatch => {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          dispatch({type: actionTypes.loaderOn});

          const response = await post(endpoints.auth.login, data, false);
          dispatch({type: actionTypes.login, session: response});

          resolve(response);
        } catch (e) {
          showToast(getMessage(e));
          reject(e);
        } finally {
          dispatch({type: actionTypes.loaderOff});
        }
      }, 1000);
    });
  };
};

export const sendEmail = data => {
  return async dispatch => {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          dispatch({type: actionTypes.loaderOn});

          const response = await post(endpoints.auth.sendEmail, data, true);

          resolve(response);
        } catch (e) {
          showToast(getMessage(e));
          reject(e);
        } finally {
          dispatch({type: actionTypes.loaderOff});
        }
      }, 1000);
    });
  };
};

export const verifyOTP = data => {
  return async dispatch => {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          dispatch({type: actionTypes.loaderOn});

          const response = await post(endpoints.auth.verifyOTP, data, true);

          resolve(response);
        } catch (e) {
          showToast(getMessage(e));
          reject(e);
        } finally {
          dispatch({type: actionTypes.loaderOff});
        }
      }, 1000);
    });
  };
};

export const setPassword = data => {
  return async dispatch => {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          dispatch({type: actionTypes.loaderOn});

          const response = await post(endpoints.auth.setPassword, data, true);

          resolve(response);
        } catch (e) {
          showToast(getMessage(e));
          reject(e);
        } finally {
          dispatch({type: actionTypes.loaderOff});
        }
      }, 1000);
    });
  };
};

export const userSignup = data => {
  return async dispatch => {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          dispatch({type: actionTypes.loaderOn});
          const response = await post(endpoints.auth.userSignup, data, false);
          console.log(response, 'RESPONSE');
          resolve(response);
        } catch (e) {
          showToast(getMessage(e));
          reject(e);
        } finally {
          dispatch({type: actionTypes.loaderOff});
        }
      }, 1000);
    });
  };
};

export const subPackges = token => {
  return async dispatch => {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          dispatch({type: actionTypes.loaderOn});
          const response = await customGet(endpoints.auth.packages, {}, token);
          console.log(response, 'SUBSCRIPTION');
          resolve(response);
        } catch (e) {
          showToast(getMessage(e));
          reject(e);
        } finally {
          dispatch({type: actionTypes.loaderOff});
        }
      }, 1000);
    });
  };
};

export const subscribePackage = (detail, token) => {
  return async dispatch => {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        let response = null;
        try {
          dispatch({type: actionTypes.loaderOn});

          if (token) {
            response = await postForSubscription(
              endpoints.auth.subscription,
              detail,
              true,
              {},
              token,
            );
          } else {
            response = await post(
              endpoints.auth.subscription,
              detail,
              true,
              {},
            );
          }

          dispatch({
            type: actionTypes.getMySubscription,
            subscription: response,
          });
          resolve(response);
        } catch (e) {
          showToast(getMessage(e));
          reject(e);
        } finally {
          dispatch({type: actionTypes.loaderOff});
        }
      }, 1000);
    });
  };
};

export const completeProfile = data => {
  return async dispatch => {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          dispatch({type: actionTypes.loaderOn});
          const response = await post(
            endpoints.auth.completeProfile,
            data,
            false,
          );
          dispatch({type: actionTypes.completeProfile, session: response});

          resolve(response);
        } catch (e) {
          showToast(getMessage(e));
          reject(e);
        } finally {
          dispatch({type: actionTypes.loaderOff});
        }
      }, 1000);
    });
  };
};

export const editProfile = data => {
  return async dispatch => {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          dispatch({type: actionTypes.loaderOn});
          const response = await post(endpoints.auth.editProfile, data, true);
          // dispatch({type: actionTypes.completeProfile, session: response});

          resolve(response);
        } catch (e) {
          showToast(getMessage(e));
          reject(e);
        } finally {
          dispatch({type: actionTypes.loaderOff});
        }
      }, 1000);
    });
  };
};

export const changePassword = data => {
  return async dispatch => {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          dispatch({type: actionTypes.loaderOn});
          const response = await post(
            endpoints.auth.changePassword,
            data,
            false,
          );
          // dispatch({type: actionTypes.completeProfile, session: response});

          resolve(response);
        } catch (e) {
          showToast(getMessage(e));
          reject(e);
        } finally {
          dispatch({type: actionTypes.loaderOff});
        }
      }, 1000);
    });
  };
};

export const logout = () => ({
  type: 'LOGOUT',
});
