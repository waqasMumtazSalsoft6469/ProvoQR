import {Dimensions} from 'react-native';
import ThemeColors from './ThemeColors';

export const vh = Dimensions.get('window').height * 0.01;
export const vw = Dimensions.get('window').width * 0.01;

export const themeShadow = {
  shadowColor: ThemeColors.black,
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.27,
  shadowRadius: 4.65,
  elevation: 4,
};

export const calculateDistance = (
  lattitude1,
  longittude1,
  lattitude2,
  longittude2,
) => {
  const toRadian = n => (n * Math.PI) / 180;

  let lat2 = lattitude2;
  let lon2 = longittude2;
  let lat1 = lattitude1;
  let lon1 = longittude1;

  let R = 6371; // km
  let x1 = lat2 - lat1;
  let dLat = toRadian(x1);
  let x2 = lon2 - lon1;
  let dLon = toRadian(x2);
  let a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadian(lat1)) *
      Math.cos(toRadian(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  let d = R * c;
  return d;
};

export const calculateDistanceInMiles = (
  latitude1,
  longitude1,
  latitude2,
  longitude2,
) => {
  const toRadian = n => (n * Math.PI) / 180;

  let lat2 = latitude2;
  let lon2 = longitude2;
  let lat1 = latitude1;
  let lon1 = longitude1;

  let R = 3959; // miles
  let x1 = lat2 - lat1;
  let dLat = toRadian(x1);
  let x2 = lon2 - lon1;
  let dLon = toRadian(x2);
  let a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadian(lat1)) *
      Math.cos(toRadian(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  let distanceInMiles = R * c;
  return distanceInMiles;
};
