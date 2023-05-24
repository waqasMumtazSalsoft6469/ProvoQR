import React, {useEffect, useRef, useState} from 'react';
import {saveLocation} from '../../Redux/Actions/otherActions';
import {useDispatch, useSelector} from 'react-redux';
import {
  checkLocationPermissions,
  getCurrentLocation,
} from '../../Utils/mapHelperFunction';

const LocationComponent = props => {
  const dispatch = useDispatch();
  const userLocation = useSelector(state => state.GeneralReducer?.location);
  const profile = useSelector(state => state.SessionReducer.userData);
  console.log('userLocation from loc comp', userLocation);
  console.log('profile from loc comp', profile);
  console.log('props?.coordinates from loc comp', props?.coordinates);

  useEffect(() => {
    console.log('useEffect');
    if (props?.coordinates) {
      console.log('if');
      dispatch(saveLocation(props?.coordinates));
    } else if (
      userLocation?.coordinate?.latitude === 0 &&
      userLocation?.coordinate?.longitude === 0
    ) {
      console.log('else');
      setupMethods();
    }
    // dependency for == if user changes location from map or for first time
  }, [props?.coordinates]);

  const getUserLocation = () => {
    getCurrentLocation()
      .then(location => {
        console.log('curr loc', location);
        dispatch(saveLocation(location));
      })
      .catch(handleOnCancel);
  };
  const setupMethods = async () => {
    // console.log("setupMethods");
    checkLocationPermissions()
      .then(() => {
        // console.log("then");
        getUserLocation();
      })
      .catch(() => {
        console.log('catch');
        handleOnCancel();
      });
  };
  const handleOnCancel = () => {
    if (profile?.lat && profile?.lng) {
      dispatch(
        saveLocation({
          latitude: profile?.lat,
          longitude: profile?.lng,
        }),
      );
    }
  };
};
export default LocationComponent;

// ! 1. if user has already saved location in redux then do nothing
// ! 2. if redux is null, check user location permission
// !      a) if user grants permission ==> fetch location and save it to redux
// !      b) if permission denied ==> show popup
// !          i) if user open settings then goto -> 2
// !          ii) if user cancels, set permission has been asked. then check if user has location in profile ? setLocation : ''
