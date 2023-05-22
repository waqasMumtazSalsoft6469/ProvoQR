import React, {useEffect, useRef, useState} from 'react';
import {saveLocation} from '../../Redux/Actions/otherActions';
import {useDispatch, useSelector} from 'react-redux';
import { getCurrentLocation } from '../../Utils/mapHelperFunction';

const LocationComponent = props => {
  const dispatch = useDispatch();

  const userLocation = useSelector(state => state.GeneralReducer?.location)
  // const { profile, userLocation, saveLocation } = useProfile();
  console.log('userLocation from loc comp', userLocation);

  useEffect(() => {
    if (props?.coordinates) {
      dispatch(saveLocation(props?.coordinates));
    }
    else if (
      userLocation?.coordinate?.latitude === 0 &&
      userLocation?.coordinate?.longitude === 0
    ) {
      console.log("useEffect");
      setupMethods();
    }
    // dependency for == if user changes location from map or for first time
  }, [props?.coordinates]);

  // useEffect(() => {
  //   const subscription = AppState.addEventListener("change", nextAppState => {
  //     if (
  //       appState.current.match(/inactive|background/) &&
  //       nextAppState === "active"
  //     ) {
  //       if (!userLocation.address && openingSettings) {
  //         const permission =
  //           Platform.OS == "android"
  //             ? PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
  //             : PERMISSIONS.IOS.LOCATION_WHEN_IN_USE;
  //         check(permission).then(res => {
  //           if (res === RESULTS.GRANTED) {
  //             getUserLocation();
  //           } else {
  //             handleOnCancel();
  //           }
  //         });
  //         setOpeningSettings(false);
  //       }
  //     }
  //     appState.current = nextAppState;
  //     setAppStateVisible(appState.current);
  //   });

  //   return () => {
  //     subscription.remove();
  //   };
  // }, [openingSettings]);

  const getUserLocation = () => {
    getCurrentLocation()
      .then(location => {
        console.log("curr loc", location);
        saveLocation(location);
      })
      // .catch(handleOnCancel);
  };
  const setupMethods = async () => {
    // console.log("setupMethods");
    checkLocationPermissions()
      .then(() => {
        // console.log("then");
        getUserLocation();
      })
      .catch(() => {
        console.log("catch");
        // handleOnCancel();
        // popupRef.current.show();
      });
  };
  // const handleOnCancel = () => {
  //   if (profile?.lat && profile?.lng) {
  //     saveLocation({
  //       latitude: profile?.lat,
  //       longitude: profile?.lng,
  //     });
  //   }
  // };
};
export default LocationComponent;

// ! 1. if user has already saved location in redux then do nothing
// ! 2. if redux is null, check user location permission
// !      a) if user grants permission ==> fetch location and save it to redux
// !      b) if permission denied ==> show popup
// !          i) if user open settings then goto -> 2
// !          ii) if user cancels, set permission has been asked. then check if user has location in profile ? setLocation : ''
