import React from 'react';
import {ImageBackground, View, Image, Text, Dimensions} from 'react-native';
import {backgrounds, icons, sampleimage} from '../../assets/images';
import MapView, {
  Polyline,
  Marker,
  Callout,
  CalloutSubview,
} from 'react-native-maps';
import styles from './styles';
import MapViewDirections from 'react-native-maps-directions';
import {
  checkLocationPermissions,
  getCurrentLocation,
  LATITUDE_DELTA,
  LONGITUDE_DELTA,
} from '../../Utils/mapHelperFunction';
import ThemeColors from '../../Utils/ThemeColors';
import {showToast} from '../../Api/HelperFunction';
class RestaurantDirection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
      userLocation: {
        latitude: 39.847311175738646,
        longitude: -99.58578285202184,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      restaurant: {
        image: sampleimage.places,
        name: 'Finest Dining Restaurant',
        distance: '113 meter',
        ratings: [
          {
            rate: '102',
          },
          {
            rate: '150',
          },
          {
            rate: '200',
          },
        ],
        cusines: [
          {
            name: 'Cuisine 01',
          },
          {
            name: 'Cuisine 02',
          },
          {
            name: 'Cuisine 03',
          },
        ],
      },
    };
    this.mapRef = React.createRef();
  }

  animateToRegion = (latitude, longitude) => {
    setTimeout(() => {
      this.mapRef?.animateToRegion(
        {
          latitude: Number(latitude),
          longitude: Number(longitude),
          latitudeDelta: this.state.latitudeDelta,
          longitudeDelta: this.state.longitudeDelta,
        },
        2000,
      );
    }, 500);
  };

  getUserLocation = async () => {
    try {
      const location = await getCurrentLocation();
      this.calculate(location?.latitude, location?.longitude);
      this.setState({
        userLocation: {
          latitude: parseFloat(location?.latitude),
          longitude: parseFloat(location?.longitude),
          latitudeDelta: this.state.latitudeDelta,
          longitudeDelta: this.state.longitudeDelta,
        },
      });
      const {latitude, longitude} = this.props.route.params;

      this.animateToRegion(latitude, latitude);
    } catch (error) {
      showToast(error);
    }
  };
  calculate = (userLat, userLong) => {
    const {latitude, longitude} = this.props.route.params;
    const deltaLat = Math.abs(latitude - userLat);

    const deltaLng = Math.round(
      Math.log((360 / Math.abs(longitude - userLong)) * 0.07) / Math.LN2,
    );
    console.log(deltaLat, deltaLng);
    this.setState({latitudeDelta: deltaLat, longitudeDelta: deltaLng});
  };

  setupMethods = async () => {
    try {
      await checkLocationPermissions();
      this.getUserLocation();
    } catch (error) {
      console.log('location** error ', error);
    }
  };
  componentDidMount() {
    // const {latitude, longitude} = this.props.route.params;
    // this.animateToRegions(latitude, longitude);
    // this.getUserLocation();
    this.setupMethods();
  }

  render() {
    const {latitude, longitude} = this.props.route.params;

    return (
      <View style={styles.container}>
        <ImageBackground
          source={backgrounds.bgimage}
          style={styles.imgbg}
          resizeMode="cover"
          imageStyle={styles.imgbg}>
          <MapView
            ref={r => (this.mapRef = r)}
            style={{flex: 1}}
            // mapType={Platform.OS == "android" ? "none" : "standard"}
            initialRegion={{
              latitude: 37.8025259,
              longitude: -122.4351431,
              latitudeDelta: this.state.latitudeDelta,
              longitudeDelta: this.state.longitudeDelta,
            }}>
            <Marker
              draggable={false}
              coordinate={{
                latitude: Number(this.state.userLocation.latitude),
                longitude: Number(this.state.userLocation.longitude),
              }}>
              <Image source={icons.mapButton} style={styles.markerIconStyle} />
            </Marker>
            <Marker
              draggable={false}
              coordinate={{
                latitude: Number(latitude),
                longitude: Number(longitude),
              }}>
              <Image source={icons.marker} style={styles.markerIconStyle} />
            </Marker>

            <MapViewDirections
              origin={{
                latitude: Number(this.state.userLocation.latitude),
                longitude: Number(this.state.userLocation.longitude),
                latitudeDelta: this.state.latitudeDelta,
                longitudeDelta: this.state.longitudeDelta,
              }}
              destination={{
                latitude: Number(latitude),
                longitude: Number(longitude),
                latitudeDelta: this.state.latitudeDelta,
                longitudeDelta: this.state.longitudeDelta,
              }}
              apikey={'AIzaSyB2hxNhJCBwaHoQ2eggJmLR4pfDYAN93cY'}
              strokeWidth={3}
              strokeColor={ThemeColors.primary}
            />
          </MapView>
        </ImageBackground>
      </View>
    );
  }
}
export default RestaurantDirection;
