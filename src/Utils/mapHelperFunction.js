import Geolocation from '@react-native-community/geolocation';
import {Dimensions, Platform} from 'react-native';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
import {check, PERMISSIONS, request, RESULTS} from 'react-native-permissions';

const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
export const LATITUDE_DELTA = 0.02;
export const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export const checkLocationPermissions = async () => {
  try {
    if (Platform.OS == 'android') {
      await promptForLocation();
    }
    const permission =
      Platform.OS == 'android'
        ? PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
        : PERMISSIONS.IOS.LOCATION_WHEN_IN_USE;

    await checkPermission(permission);
  } catch (error) {
    throw new Error(error);
  }
};

export const checkCameraPermissions = async () => {
  try {
    // if (Platform.OS == 'android') {
    //   await promptForLocation();
    // }

    const permission =
      Platform.OS == 'android'
        ? PERMISSIONS.ANDROID.CAMERA
        : PERMISSIONS.IOS.CAMERA;

    await checkPermission(permission);
  } catch (error) {
    // show toast
  }
};

export const getCurrentLocation = () => {
  console.log('location success');
  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      success => {
        console.log('location success', success);
        let Coords = {
          latitude: success.coords.latitude,
          longitude: success.coords.longitude,
        };

        return resolve(Coords);
      },
      error => {
        return reject(error);
      },
      Platform.select({
        ios: {
          enableHighAccuracy: true,
          timeout: 20000,
          maximumAge: 0,
        },
        android: {enableHighAccuracy: false, timeout: 20000, maximumAge: 0},
      }),
    );
  });
};

// Private functions
const promptForLocation = async () => {
  try {
    await RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
      interval: 10000,
      fastInterval: 5000,
    });
  } catch (error) {
    console.log('errorrrr ', error);
    // show toast
  }
};

export const checkPermission = async permission => {
  const result = await check(permission);
  switch (result) {
    case RESULTS.UNAVAILABLE:
      throw new Error(RESULTS.UNAVAILABLE);
    case RESULTS.DENIED:
      try {
        const request_result = await getPermission(permission);
        return request_result;
      } catch (error) {
        throw new Error(error);
      }
    case RESULTS.GRANTED:
      return RESULTS.GRANTED;
    case RESULTS.BLOCKED:
      throw new Error(RESULTS.BLOCKED);
  }
};

const getPermission = async permission => {
  const result = await request(permission);
  switch (result) {
    case RESULTS.UNAVAILABLE:
      throw new Error(RESULTS.UNAVAILABLE);

    case RESULTS.DENIED:
      throw new Error(RESULTS.DENIED);

    case RESULTS.GRANTED:
      return RESULTS.GRANTED;

    case RESULTS.BLOCKED:
      throw new Error(RESULTS.BLOCKED);
  }
};
