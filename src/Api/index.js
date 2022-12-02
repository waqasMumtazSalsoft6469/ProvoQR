import {
  dataToQueryParameter,
  getConfigs,
  getConfigsForSubscription,
  getMessage,
  handleResponse,
  performNetworkRequest,
} from './HelperFunction';
import {base_url} from './configs';

export const post = async (endpoint, body, formData = false, queryParams) => {
  const url = base_url + endpoint + dataToQueryParameter(queryParams);

  console.log('URL', url);

  const configs = getConfigs('POST', body, formData);

  try {
    const networkResult = await performNetworkRequest(url, configs);
    console.log('NETWORK RESULT', networkResult);
    const result = await handleResponse(networkResult);

    return Promise.resolve(result);
  } catch (e) {
    console.log('e == ', e);
    const message = getMessage(e);
    return Promise.reject(message);
  }
};

export const get = async (endpoint, queryParams) => {
  const url = base_url + endpoint + dataToQueryParameter(queryParams);
  console.log('URL GET', url);
  const configs = getConfigs('GET');

  try {
    const networkResult = await performNetworkRequest(url, configs);
    const result = await handleResponse(networkResult);

    // console.log('ressssss', result);

    return Promise.resolve(result);
  } catch (e) {
    const message = getMessage(e);
    return Promise.reject(message);
  }
};

export const put = async (endpoint, body, formData, queryParams) => {
  const url = base_url + endpoint + dataToQueryParameter(queryParams);
  const configs = getConfigs('PUT', body, formData);
  try {
    const networkResult = await performNetworkRequest(url, configs);
    const result = await handleResponse(networkResult);
    return Promise.resolve(result);
  } catch (e) {
    const message = getMessage(e);
    return Promise.reject(message);
  }
};

// post only for subscription
export const postForSubscription = async (
  endpoint,
  body,
  formData = false,
  queryParams,
  token,
) => {
  const url = base_url + endpoint + dataToQueryParameter(queryParams);

  console.log('URL', url);

  const configs = getConfigsForSubscription('POST', body, formData, token);

  try {
    const networkResult = await performNetworkRequest(url, configs);
    console.log('NETWORK RESULT', networkResult);
    const result = await handleResponse(networkResult);

    return Promise.resolve(result);
  } catch (e) {
    console.log('e == ', e);
    const message = getMessage(e);
    return Promise.reject(message);
  }
};

export const customGet = async (endpoint, queryParams, token) => {
  const url = base_url + endpoint + dataToQueryParameter(queryParams);
  console.log('URL GET', url);
  const configs = getConfigsForSubscription('GET', null, false, token);

  try {
    const networkResult = await performNetworkRequest(url, configs);
    const result = await handleResponse(networkResult);

    // console.log('ressssss', result);

    return Promise.resolve(result);
  } catch (e) {
    const message = getMessage(e);
    return Promise.reject(message);
  }
};
const Api = {
  performNetworkRequest: performNetworkRequest,
  post: post,
  get: get,
  put: put,
};
export default Api;
