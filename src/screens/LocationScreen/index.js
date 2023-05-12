import React, {useEffect, useRef, useState} from 'react';
import {
  ImageBackground,
  View,
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {backgrounds, icons} from '../../assets/images';
import styles from './styles';
import MainInput from '../../components/Input/MainInput';
import RubikRegular from '../../components/Text/RubikRegular';
import MapView, {Polyline, Marker} from 'react-native-maps';
import Uploadimage from '../../components/Popups/UploadImage';
import Button from '../../components/Buttons/SimpleButton';
import {themeShadow, vh, vw} from '../../Utils/Units';
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
import OutfitRegularText from '../../components/Text/OutfitRegularText';

const AddressLocation = props => {
  const dispatch = useDispatch();
  const [initialRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });
  const [userLocation, setUserLocation] = useState({
    location: {
      latitude: 0,
      longitude: 0,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  });
  const [searchedAddress, setSearchedAddress] = useState(null);
  const [selection, setSelection] = React.useState({start: 0, end: 0});
  const mapRef = useRef(null);
  const inputRef = useRef(null);

  const handleRoute = location => {
    console.log('route loc', location);
    setSearchedAddress(location?.formatted_address);
    const coordiantes = {
      latitude: location?.geometry?.location?.lat,
      longitude: location?.geometry?.location?.lng,
    };
    setUserLocation({
      location: {
        latitude: parseFloat(location?.geometry?.location?.lat),
        longitude: parseFloat(location?.geometry?.location?.lng),
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
        address: location?.formatted_address,
      },
    });
    animateToRegion(coordiantes);
  };

  const handleSearchAddress = () => {
    props.navigation?.navigate('LocationSearchScreen', {handleRoute});
  };

  const handleDonePress = () => {
    if (props?.route?.params?.handleDoneAddress) {
      props?.route?.params?.handleDoneAddress(
        searchedAddress,
        userLocation?.location?.latitude,
        userLocation?.location?.longitude,
      );
      props.navigation.goBack();
    } else {
      props.navigation.goBack();
    }
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
      setSearchedAddress(response?.results[1].formatted_address);
      setUserLocation({
        location: {
          latitude: parseFloat(coordinate?.latitude),
          longitude: parseFloat(coordinate?.longitude),
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
          address: response?.results[1]?.formatted_address,
        },
      });
      animateToRegion(coordinate);
    } catch (e) {
      console.warn(e);
      // showToast(e);
    }
  };
  const getUserLocation = async () => {
    try {
      const location = await getCurrentLocation();
      console.log('CURRENT LOCATION', location);
      const response = await dispatch(getAddressByLatLong(location));
      console.log('LOCATION ADDRESS', response);
      setSearchedAddress(response?.results[1].formatted_address);
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
              coordinate={userLocation?.location}
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
      <View style={styles.locationscroll}>
        <RubikRegular style={styles.scrolltext}>
          Scroll the screen to set your location by moving the marker
        </RubikRegular>
      </View>

      <TouchableOpacity
        activeOpacity={0.9}
        style={{position: 'absolute', right: vw * 5, top: vh * 8}}
        onPress={getUserLocation}>
        <Image source={icons.currentLocIcon} style={styles.cuuLocIconStyle} />
      </TouchableOpacity>

      <View style={styles.bottomWrapper}>
        <View style={styles.backOpacity} />

        <View style={styles.horizontalLine} />

        <View style={styles.box}>
          <OutfitSemiBoldText style={styles.haeding}>
            Add a New Address
          </OutfitSemiBoldText>
          <OutfitMediumText style={styles.label}>Address</OutfitMediumText>
          <TouchableOpacity
            style={styles.addressContainer}
            onPress={handleSearchAddress}
            activeOpacity={0.9}>
            <ScrollView
              horizontal
              contentContainerStyle={{
                alignItems: 'center',
              }}>
              <OutfitRegularText style={styles.addressText}>
                {searchedAddress ?? 'Search Location'}
              </OutfitRegularText>
            </ScrollView>
          </TouchableOpacity>
          {/* <MainInput
            selection={selection}
            onSelectionChange={({nativeEvent: {selection, text}}) =>
              setSelection(selection)
            }
            placeholder="Enter Address"
            style={{
              width: 75 * vw,
              backgroundColor: ThemeColors.backgroundGray,
            }}
            ref={inputRef}
            defaultValue={searchedAddress}
            onChangeText={text => setSearchedAddress(text)}
          /> */}
          <Button
            title="CONTINUE"
            onPress={handleDonePress}
            btnContainer={{marginTop: 3 * vh}}
          />
        </View>
      </View>
    </View>
  );
};

export default AddressLocation;
