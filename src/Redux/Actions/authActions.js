import {useDispatch} from 'react-redux';
import actionTypes from './actionTypes';
import {post, get, postForSubscription} from '../../Api';
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
      }, 300);
    });
  };
};

export const sendEmail = data => {
  return async dispatch => {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          dispatch({type: actionTypes.loaderOn});

          const response = await post(endpoints.auth.sendEmail, data, false);

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

export const verifyOTP = data => {
  return async dispatch => {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          dispatch({type: actionTypes.loaderOn});

          const response = await post(endpoints.auth.verifyOTP, data, false);

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

export const updatePassword = data => {
  return async dispatch => {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          dispatch({type: actionTypes.loaderOn});

          const response = await post(endpoints.auth.setPassword, data, false);

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

export const userSignup = data => {
  return async dispatch => {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          dispatch({type: actionTypes.loaderOn});

          const response = await post(endpoints.auth.userSignup, data, true);

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

export const subPackges = () => {
  return async dispatch => {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          dispatch({type: actionTypes.loaderOn});

          const response = await get(endpoints.auth.packages);
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
      }, 300);
    });
  };
};

export const setWelcomeQuestions = data => {
  return async dispatch => {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          dispatch({type: actionTypes.loaderOn});

          const response = await post(
            endpoints.auth.welcomeQuestions,
            data,
            false,
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

export const logout = () => ({
  type: 'LOGOUT',
});
