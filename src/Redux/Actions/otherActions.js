import {useDispatch} from 'react-redux';
import actionTypes from './actionTypes';
import {endpoints} from '../../Api/configs';
import {post, get, postForSubscription} from '../../Api';
import {showToast, getMessage} from '../../Api/HelperFunction';
import {getAddressByLatLong} from '../../Utils/mapSearchHelperFunctions';

export const getHomeData = data => {
  return async (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          const location = {
            lat: getState()?.GeneralReducer?.location?.coordinate?.latitude,
            lng: getState()?.GeneralReducer?.location?.coordinate?.longitude,
          };
          // dispatch({type: actionTypes.loaderOn});

          console.log('User Current Location new >>>>', data);
          let obj = {
            ...data,
            ...location,
          };
          console.log('New Obj Location User >>>>', obj);
          const response = await get(endpoints.other.home, {
            ...data,
            // ...location,
          });

          resolve(response);
        } catch (e) {
          showToast(getMessage(e));
          reject(e);
        } finally {
          // dispatch({type: actionTypes.loaderOff});
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

//Provo Coins Transfer to other user
export const provoCashTransfer = data => {
  return async dispatch => {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          dispatch({type: actionTypes.loaderOn});

          const response = await post(
            endpoints.other.provoCashTransfer,
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

//LootBox Claim
export const claimLootbox = data => {
  return async dispatch => {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          dispatch({type: actionTypes.loaderOn});

          const response = await post(endpoints.other.claimLootbox, data);
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

export const provoCashPayment = detail => {
  return async dispatch => {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        let response = null;
        try {
          dispatch({type: actionTypes.loaderOn});

          response = await post(endpoints.other.provoPayment, detail, true);

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

export const getRestaurantRequest = data => {
  return async dispatch => {
    try {
      const response = await get(endpoints.other.getRestaurantRequest, data);

      return Promise.resolve(response);
    } catch (e) {
      // showToast(getMessage(e));
      return Promise.reject(e);
    }
  };
};

export const getMenu = data => {
  return async dispatch => {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          dispatch({type: actionTypes.loaderOn});

          const response = await post(endpoints.other.getMenu, data, true);

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

export const contactUs = data => {
  return async dispatch => {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          dispatch({type: actionTypes.loaderOn});

          const response = await post(endpoints.other.contactUs, data, true);

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

export const getAboutUs = () => {
  return async dispatch => {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          dispatch({type: actionTypes.loaderOn});

          const response = await get(endpoints.other.aboutUs);

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

export const getReferalCode = () => {
  return async dispatch => {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          dispatch({type: actionTypes.loaderOn});

          const response = await get(endpoints.other.referal);

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

export const getNearestRestaurants = data => {
  // return async dispatch => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(async () => {
  //       try {
  //         dispatch({type: actionTypes.loaderOn});

  //         const response = await post(endpoints.other.nearRes, data, true);

  //         resolve(response);
  //       } catch (e) {
  //         showToast(getMessage(e));
  //         reject(e);
  //       } finally {
  //         dispatch({type: actionTypes.loaderOff});
  //       }
  //     }, 300);
  //   });
  // };
  return async () => {
    try {
      const response = await post(endpoints.other.nearRes, data, true);
      return Promise.resolve(response);
    } catch (e) {
      return Promise.reject(e);
    }
  };
};

export const lootBoxPurchaseByCoin = data => {
  console.log('lootBoxPurchaseByCoin New >', data);
  return async dispatch => {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          dispatch({type: actionTypes.loaderOn});

          const response = await post(
            endpoints.other.lootBoxPurchaseByCoin,
            data,
            true,
          );

          resolve(response);
        } catch (e) {
          console.log('Error lootBoxPurchaseByCoin >>', e);
          showToast(getMessage(e));
          reject(e);
        } finally {
          dispatch({type: actionTypes.loaderOff});
        }
      }, 300);
    });
  };
};

export const lootBoxPurchaseByCard = data => {
  return async dispatch => {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          dispatch({type: actionTypes.loaderOn});

          const response = await post(
            endpoints.other.lootBoxPurchaseByCard,
            data,
            true,
          );

          resolve(response);
        } catch (e) {
          console.log('by card e', e);
          showToast(e);
          reject(e);
        } finally {
          dispatch({type: actionTypes.loaderOff});
        }
      }, 300);
    });
  };
};

export const getAllRestaurant = data => {
  return async (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          // dispatch({type: actionTypes.softLoaderOn});

          const location = {
            lat: getState()?.GeneralReducer?.location?.coordinate?.latitude,
            lng: getState()?.GeneralReducer?.location?.coordinate?.longitude,
          };

          const response = await get(endpoints.other.restaurantList, {
            ...data,
            ...location,
          });
          // console.log('action response', response);
          resolve(response);
        } catch (e) {
          showToast(getMessage(e));
          reject(e);
        } finally {
          // dispatch({type: actionTypes.softLoaderOff});
        }
      }, 300);
    });
  };
};

export const getRecommendedRestaurant = data => {
  return async (dispatch, getState) => {
    try {
      const location = {
        lat: getState()?.GeneralReducer?.location?.coordinate?.latitude,
        lng: getState()?.GeneralReducer?.location?.coordinate?.longitude,
        // lat: 24.873880539144672,
        // lng: 67.0672943910021,
      };
      console.log('Recommended Location Obj >>>', location);
      console.log('Recommended Location Data >>>', data);
      const response = await get(endpoints.other.recommendedRestaurantList, {
        ...data,
        ...location,
      });
      console.log('getRecommendedRestaurant', response);
      return Promise.resolve(response);
    } catch (e) {
      return Promise.reject(e);
    }
  };
};

export const getAllCategories = data => {
  return async dispatch => {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          // dispatch({type: actionTypes.softLoaderOn});

          const response = await get(endpoints.other.categoryList, data);

          dispatch({
            type: actionTypes.allCategories,
            payload: response?.categoryList?.data,
          });

          resolve(response);
        } catch (e) {
          showToast(getMessage(e));
          reject(e);
        } finally {
          // dispatch({type: actionTypes.softLoaderOff});
        }
      }, 300);
    });
  };
};

export const getRewardList = () => {
  return async dispatch => {
    try {
      const response = await get(endpoints.other.rewardList);
      return Promise.resolve(response);
    } catch (e) {
      showToast(getMessage(e));
      return Promise.reject(e);
    }
  };
};

export const getRewardDetail = data => {
  return async dispatch => {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          dispatch({type: actionTypes.loaderOn});

          const response = await post(endpoints.other.rewardDetail, data, true);

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

export const redeemReward = data => {
  return async dispatch => {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          dispatch({type: actionTypes.loaderOn});

          const response = await post(endpoints.other.redeem, data, true);

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

export const getRewardHistory = data => {
  return async dispatch => {
    try {
      const response = await get(endpoints.other.history, data);
      // console.log('response', response);
      return Promise.resolve(response);
    } catch (e) {
      return Promise.reject(e);
    }
  };
};

export const getHistoryDetail = data => {
  return async dispatch => {
    try {
      const response = await get(endpoints.other.historyDetail, data);
      // console.log('response', response);
      return Promise.resolve(response);
    } catch (e) {
      return Promise.reject(e);
    }
  };
};

export const getAllNotifications = data => {
  return async dispatch => {
    try {
      const response = await get(endpoints.other.notifications, data);
      dispatch({type: actionTypes.getNotifications, payload: response?.count});
      // console.log('response', response);
      return Promise.resolve(response);
    } catch (e) {
      return Promise.reject(e);
    }
  };
};

export const lootBoxDraw = data => {
  return async dispatch => {
    let response = null;
    try {
      dispatch({type: actionTypes.loaderOn});

      response = await post(endpoints.other.lootBoxDraw, data, true);

      dispatch({type: actionTypes.loaderOff});
      return Promise.resolve(response);
    } catch (e) {
      dispatch({type: actionTypes.loaderOff});
      showToast(getMessage(e));
      return Promise.reject(e);
    }
  };
};

export const getLootBoxes = data => {
  return async dispatch => {
    let response = null;
    try {
      dispatch({type: actionTypes.loaderOn});

      response = await post(endpoints.other.lootBoxes, data, true);

      dispatch({type: actionTypes.loaderOff});
      return Promise.resolve(response);
    } catch (e) {
      dispatch({type: actionTypes.loaderOff});
      showToast(getMessage(e));
      return Promise.reject(e);
    }
  };
};

export const saveRestaurant = data => {
  return dispatch => {
    dispatch({
      type: actionTypes.saveRestaurantId,
      payload: data,
    });
  };
};

export const saveLocation = coordinate => {
  return async dispatch => {
    try {
      const response = await getAddressByLatLong(coordinate)();
      console.log('Save location Data', response?.results[0]);
      let address_city = '';
      let address_country = '';
      response?.results[0]?.address_components.map(item => {
        if (item?.types[0] === 'administrative_area_level_2') {
          address_city = item?.long_name;
        }
        if (item?.types[0] === 'country') {
          address_country = item?.long_name;
        }
      });
      const data = {
        coordinate: {
          latitude: response?.results[0]?.geometry?.location?.lat ?? 0,
          longitude: response?.results[0]?.geometry?.location?.lng ?? 0,
        },
        address: response?.results[0]?.formatted_address ?? '',
        city: address_city,
        country: address_country,
      };
      dispatch({
        type: actionTypes.saveUserLocation,
        payload: data,
      });
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };
};
