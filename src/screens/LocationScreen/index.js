import React, {useEffect, useRef, useState} from 'react';
import {ImageBackground, View, Image, Platform, StyleSheet} from 'react-native';
import {backgrounds, icons} from '../../assets/images';
import styles from './styles';
import MainInput from '../../components/Input/MainInput';
import RubikRegular from '../../components/Text/RubikRegular';
import MapView, {Polyline, Marker} from 'react-native-maps';
import Uploadimage from '../../components/Popups/UploadImage';
import Button from '../../components/Buttons/SimpleButton';
import {vh, vw} from '../../Utils/Units';
import BottomSheetWrapper from '../../components/BottomSheetWrapper';
import OutfitSemiBoldText from '../../components/Text/OutfitSemiBoldText';
import ThemeColors from '../../Utils/ThemeColors';
import OutfitMediumText from '../../components/Text/OutfitMediumText';
import {
  checkLocationPermissions,
  getCurrentLocation,
  LATITUDE_DELTA,
  LONGITUDE_DELTA,
} from '../../Utils/mapHelperFunction';
import {getAddressByLatLong} from '../../Utils/mapSearchHelperFunctions';
import {useDispatch} from 'react-redux';
import {showToast} from '../../Api/HelperFunction';

const AddressLocation = () => {
  const dispatch = useDispatch();

  const [initialRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [userLocation, setUserLocation] = useState({
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [searchedAddress, setSearchedAddress] = useState(null);
  const mapRef = useRef(null);
  console.log(userLocation, 'USER Location');
  const handleDonePress = () => {
    props.route.params.handleRoute(searchedAddress);
    props.navigation.goBack();
  };

  const animateToRegion = location => {
    mapRef.current.animateToRegion(
      {
        latitude: location?.latitude,
        longitude: location?.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      2000,
    );
  };

  const onMarkerDragEnd = async event => {
    const coordinate = {
      latitude: event?.nativeEvent?.coordinate?.latitude,
      longitude: event?.nativeEvent?.coordinate?.longitude,
    };
    try {
      const response = await dispatch(getAddressByLatLong(coordinate));
      setSearchedAddress(response?.results[0]);
      setUserLocation({
        location: {
          latitude: parseFloat(coordinate?.latitude),
          longitude: parseFloat(coordinate?.longitude),
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
          address: response?.results[0]?.formatted_address,
        },
      });
      animateToRegion(coordinate);
    } catch (e) {
      // console.log(e);
      // showToast(e);
    }
  };
  const getUserLocation = async () => {
    try {
      const location = await getCurrentLocation();
      console.log('CURRENT LOCATION', location);
      const response = await dispatch(getAddressByLatLong(location));
      console.log('LOCATION ADDRESS', response);
      setSearchedAddress(response?.results[0]);
      setUserLocation({
        location: {
          latitude: parseFloat(location?.latitude),
          longitude: parseFloat(location?.longitude),
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
          address: response?.results[0]?.formatted_address,
        },
      });
      animateToRegion(location);
    } catch (error) {
      showToast(error);
    }
  };
  const setupMethods = async () => {
    try {
      await checkLocationPermissions();
      getUserLocation();
    } catch (error) {
      console.log('location** error ', error);
    }
  };
  useEffect(() => {
    setupMethods();
  }, []);

  return (
    <View style={styles.container}>
      {/* <Uploadimage ref={r => (this.upload = r)} /> */}

      {userLocation && (
        <MapView
          ref={mapRef}
          initialRegion={initialRegion}
          style={[
            {...StyleSheet.absoluteFill},
            // {height: vh * 100, width: vw * 100, flex: 1},
          ]}>
          {userLocation && (
            <Marker
              coordinate={userLocation}
              draggable={true}
              onDragEnd={onMarkerDragEnd}>
              <Image source={icons.mapButton} style={styles.markerIconStyle} />
            </Marker>
          )}
        </MapView>
      )}

      {/* <MapView
          // customMapStyle={mapStyle}
          ref={r => (this.mapRef = r)}
          // mapType={Platform.OS == 'android' ? 'none' : 'standard'}
          style={[
            {...StyleSheet.absoluteFill},
            {height: vh * 100, width: vw * 100, flex: 1},
          ]}
          initialRegion={{
            latitude: 64.8025259,
            longitude: -64.4351431,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}></MapView> */}

      {/* <View style={{ alignItems: 'center', }}> */}
      {/* <View style={styles.locationscroll}>
        <RubikRegular style={styles.scrolltext}>
          Scroll the screen to set your location by moving the marker
        </RubikRegular>
      </View>
      <View style={styles.bottomWrapper}>
        <View style={styles.backOpacity} />

        <View style={styles.horizontalLine} />

        <View style={styles.box}>
          <OutfitSemiBoldText style={styles.haeding}>
            Add a New Address
          </OutfitSemiBoldText>
          <OutfitMediumText style={styles.label}>Address</OutfitMediumText>
          <MainInput
            placeholder="Enter Address"
            style={{
              width: 75 * vw,
              backgroundColor: ThemeColors.backgroundGray,
            }}
            ref={r => (this.name = r)}
            value={searchedAddress}
          />
          <Button
            title="CONTINUE"
            onPress={() => this.props.navigation.goBack()}
            btnContainer={{marginTop: 2 * vh}}
          />
        </View>
      </View> */}
    </View>
  );
};

export default AddressLocation;
