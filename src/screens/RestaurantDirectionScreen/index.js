import React from 'react';
import {ImageBackground, View, Image, Text} from 'react-native';
import {backgrounds, icons, sampleimage} from '../../assets/images';
import MapView, {
  Polyline,
  Marker,
  Callout,
  CalloutSubview,
} from 'react-native-maps';
import styles from './styles';
import RateCard from '../../components/RatingCard';
import GilroyBold from '../../components/Text/GilroyBold';
import RubikRegular from '../../components/Text/RubikRegular';
import RubikLight from '../../components/Text/RubikLight';
import TouchableHOC from '../../components/Buttons/TouchableHOC';
import {vh, vw} from '../../Utils/Units';
import {LATITUDE_DELTA, LONGITUDE_DELTA} from '../../Utils/mapHelperFunction';

class RestaurantDirection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
  getMarkersArray = () => {
    let markers = [];

    for (var i = 0; i < 20; i++) {
      markers.push({
        latitude:
          Math.random() * (37.8025259 - (37.8025259 - 0.1)) +
          37.8025259 -
          0.002,
        longitude:
          Math.random() * (-122.4351431 - (-122.4351431 - 0.1)) +
          -122.4351431 -
          0.002,
      });
    }

    return markers;
  };
  rendercuisines = () => {
    return (
      <View
        style={{flexDirection: 'row', alignItems: 'center', marginTop: 1 * vh}}>
        {this.state.restaurant.cusines.map((item, index) => {
          return <RubikLight style={styles.cus}>{item?.name},</RubikLight>;
        })}
      </View>
    );
  };

  renderratings = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 1 * vh,
          width: 65 * vw,
        }}>
        {this.state.restaurant.ratings.map((item, index) => {
          return (
            <View>
              <RateCard item={item} index={index} />
            </View>
          );
        })}
      </View>
    );
  };

  renderMarkers = () => {
    let markers = this.getMarkersArray();

    if (markers.length == 0) {
      return null;
    }

    return React.Children.toArray(
      markers?.map(location => {
        return (
          <Marker
            draggable={false}
            coordinate={{
              latitude: location?.latitude,
              longitude: location?.longitude,
            }}
            image={icons.marker}>
            <Callout
              style={{borderRadius: vh}}
              onPress={() =>
                this.props.navigation.navigate('RestaurantDetails')
              }>
              <View style={styles.boxview}>
                <View style={{height: 10 * vh}}>
                  <Text
                    style={{position: 'relative', bottom: 75, height: 20 * vh}}>
                    <Image
                      source={this.state.restaurant.image}
                      style={styles.imgcard}
                      // style={styles.cardimage}
                    />
                  </Text>
                </View>
                <View style={{marginTop: vh}}>
                  <GilroyBold style={styles.name}>
                    {this.state.restaurant.name}
                  </GilroyBold>
                </View>
              </View>
            </Callout>
          </Marker>
        );
      }),
    );
  };

  animateToRegions = (latitude, longitude) => {
    setTimeout(() => {
      this.mapRef?.animateToRegion(
        {
          latitude: Number(latitude),
          longitude: Number(longitude),
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        },
        2000,
      );
    }, 500);
  };

  componentDidMount() {
    const {latitude, longitude} = this.props.route.params;
    this.animateToRegions(latitude, longitude);
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
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}>
            {/* {this.renderMarkers()} */}
            {
              <Marker
                draggable={false}
                coordinate={{
                  latitude: Number(latitude),
                  longitude: Number(longitude),
                }}>
                <Image source={icons.marker} style={styles.markerIconStyle} />
              </Marker>
            }
          </MapView>
        </ImageBackground>
      </View>
    );
  }
}
export default RestaurantDirection;
