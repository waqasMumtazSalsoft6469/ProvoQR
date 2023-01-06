import Toast from 'react-native-toast';
import store from '../Redux/store';
import {EventRegister} from 'react-native-event-listeners';

export const showToast = msg => {
  setTimeout(() => {
    Toast.show(getMessage(msg));
  }, 500);
};

export const handleResponse = ({response, jsonResponse}) => {
  switch (response.status) {
    case 200: {
      console.log('case 200');
      if (
        jsonResponse.hasOwnProperty('errors') ||
        (jsonResponse.hasOwnProperty('error') && jsonResponse.error == true)
      ) {
        const message = getMessage(jsonResponse);
        return Promise.reject(message);
      } else {
        return Promise.resolve(jsonResponse);
      }
      break;
    }
    case 201: {
      console.log('case 201');
      if (
        jsonResponse.hasOwnProperty('errors') ||
        (jsonResponse.hasOwnProperty('error') && jsonResponse.error == true)
      ) {
        const message = getMessage(jsonResponse);
        return Promise.reject(message);
      } else {
        return Promise.resolve(jsonResponse);
      }
      break;
    }
    case 401: {
      const message = getMessage(jsonResponse);
      return Promise.reject(message);
    }
    case 500: {
      EventRegister.emit('logout');
    }
    default: {
      const message = getMessage(jsonResponse);
      return Promise.reject(message);
    }
  }
};
export const performNetworkRequest = async (url, configs) => {
  url = encodeURI(url);
  try {
    const response = await fetch(url, configs);
    const jsonResponse = await response.json();
    return Promise.resolve({response, jsonResponse});
  } catch (e) {
    return Promise.reject(e);
  }
};
export const message = 'Something went wrong';
export const getMessage = json => {
  console.log('JSON   KKKKKK', json);
  switch (typeof json) {
    case 'string': {
      return json;
    }
    case 'object': {
      if (Array.isArray(json)) {
        var data = json[0];
        return getMessage(data);
      } else {
        if (json.errors) {
          const data = json.errors;
          if (typeof data === 'object') {
            const values = Object.values(data);
            return getMessage(values);
          } else {
            return getMessage(data);
          }
        } else if (json.error) {
          const data = json.error;
          if (typeof data === 'object') {
            const values = Object.values(data);
            return getMessage(values);
          } else {
            return getMessage(data);
          }
        } else if (json.message) {
          if (json.message) {
            return getMessage(json.message);
          } else if (json.error) {
            return getMessage(json.error);
          } else {
            return message;
          }
        } else if (json?.response) {
          const data = json?.response;
          if (typeof data === 'object') {
            const values = Object.values(data);
            return getMessage(values);
          } else {
            return getMessage(data);
          }
        } else {
          const data = json;
          if (typeof data === 'object') {
            const values = Object.values(data);
            return getMessage(values);
          } else {
            return getMessage(data);
          }
        }
      }
    }
    default: {
      return message;
    }
  }
};
export const jsonToFormdata = json => {
  var data = new FormData();
  const entries = Object.entries(json);
  entries.forEach(entry => {
    data.append(entry[0], entry[1]);
  });
  return data;
};

export const getFormData = object => {
  const formData = new FormData();
  Object.keys(object).forEach(key => {
    if (typeof object[key] !== 'object') formData.append(key, object[key]);
    else formData.append(key, JSON.stringify(object[key]));
  });
  return formData;
};

export const getConfigs = (method, body, formData = true) => {
  var headers = {
    Accept: 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
  };
  if (formData == true) {
    headers['Content-Type'] = 'multipart/form-data';
  }
  const data = store.getState();
  console.log('Token==>', data.SessionReducer.token);
  if (data) {
    if (data.SessionReducer) {
      if (data.SessionReducer.token != null) {
        if (data.SessionReducer.token) {
          console.log('TOKEN', data.SessionReducer.token);
          headers['Authorization'] = 'Bearer ' + data.SessionReducer.token;
        }
      }
    }
  }
  var configs = {
    method: method,
    headers: headers,
  };
  if (body) {
    if (method == 'POST' || method == 'PUT') {
      if (formData == true) {
        configs['body'] = jsonToFormdata(body);
      } else {
        configs['body'] = JSON.stringify(body);
      }
    }
  }
  console.log(JSON.stringify(configs['body'], null, 4), 'new form data');
  return configs;
};

export const dataToQueryParameter = data => {
  if (typeof data === 'object') {
    if (!Array.isArray(data)) {
      var params = '?';
      const dataArray = Object.entries(data);
      if (dataArray.length > 0) {
        dataArray.forEach((entry, index) => {
          var amp = index < dataArray.length - 1 ? '&' : '';
          params = `${params}${entry[0]}=${entry[1]}${amp}`;
        });
        return params;
      }
    }
  } else if (typeof data === 'string') {
    return data;
  }
  return '';
};

export const getConfigsForSubscription = (
  method,
  body,
  formData = true,
  token,
) => {
  var headers = {
    Accept: 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
  };
  if (formData == true) {
    headers['Content-Type'] = 'multipart/form-data';
  }
  // const data = store.getState();
  if (token) {
    if (token != null) {
      if (token) {
        console.log('TOKEN for subscription', token);
        headers['Authorization'] = 'Bearer ' + token;
      }
    }
  }

  var configs = {
    method: method,
    headers: headers,
  };
  if (body) {
    if (method == 'POST' || method == 'PUT') {
      if (formData == true) {
        configs['body'] = jsonToFormdata(body);
      } else {
        configs['body'] = JSON.stringify(body);
      }
    }
  }
  // console.log(config, 'formdata');
  return configs;
};

export const checkIfImageExists = (url, callback) => {
  const img = new Image();
  img.src = url;

  if (img.complete) {
    callback(true);
  } else {
    img.onload = () => {
      callback(true);
    };

    img.onerror = () => {
      callback(false);
    };
  }
};
