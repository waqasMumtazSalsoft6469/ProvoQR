import React from 'react';
import {
  ImageBackground,
  View,
  Image,
  Text,
  FlatList,
  Keyboard,
} from 'react-native';
import {
  backgrounds,
  icons,
  lottieImage,
  sampleimage,
} from '../../assets/images';
import MapView, {
  Polyline,
  Marker,
  Callout,
  CalloutSubview,
} from 'react-native-maps';
import styles from './styles';
import OutfitRegularText from '../../components/Text/OutfitRegularText';
import OutfitLightText from '../../components/Text/OutfitLightText';
import OutfitMediumText from '../../components/Text/OutfitMediumText';
import OutfitSemiBoldText from '../../components/Text/OutfitSemiBoldText';
import TouchableHOC from '../../components/Buttons/TouchableHOC';
import Button from '../../components/Buttons/SimpleButton';
import DetailList from '../../components/DetailList';
import {vh, vw} from '../../Utils/Units';
import MainInput from '../../components/Input/MainInput';
import BottomSheetWrapper from '../../components/BottomSheetWrapper';
import Dash from 'react-native-dash';
import HomeCarouselConmponent from '../../components/HomeCarouselComponent';
import {ScrollView} from 'react-native-gesture-handler';
import {mapStyle} from '../../Utils/customeMap';
import {
  getNearestRestaurants,
  restaurantDetails,
} from '../../Redux/Actions/otherActions';
import {connect} from 'react-redux';
import {
  checkLocationPermissions,
  getCurrentLocation,
  LATITUDE_DELTA,
  LONGITUDE_DELTA,
} from '../../Utils/mapHelperFunction';
import {showToast} from '../../Api/HelperFunction';
import CategoryModal from '../../components/Popups/CategoryModal';
import {imageUrl} from '../../Api/configs';
import RateCard from '../../components/RatingCard';
import AnimatedLottieView from 'lottie-react-native';
import SearchInput from '../../components/Input/SearchInput';

var tempTime = 0;

class MapScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resturentModal: false,
      campaignModal: false,
      categoryModal: false,
      userLocation: {latitude: 0, longitude: 0},
      restaurants: [],
      search: '',
      details: {},
      category: '',
      ratings: [],
      lootbox_amount: '',
      provo_cash_price: '',
    };
  }

  handleCategory = categoryId => {
    // console.log('categoryId', categoryId);
    const {userLocation} = this.state;
    this.props
      .getNearestRestaurant({
        lat: parseFloat(userLocation?.latitude),
        lng: parseFloat(userLocation?.longitude),
        category_id: categoryId?.id,
      })
      .then(res => {
        if (res?.nearestRestaurant?.data?.length > 0) {
          this.setState({restaurants: res?.nearestRestaurant?.data});
          this.animateToRegion(
            parseFloat(
              res?.nearestRestaurant?.data[0]?.lat
                ? res?.nearestRestaurant?.data[0]?.lat
                : 0,
            ),
            parseFloat(
              res?.nearestRestaurant?.data[0]?.lng
                ? res?.nearestRestaurant?.data[0]?.lng
                : 0,
            ),
          );
        } else {
          showToast('No Restarant Found');
        }
      });
  };

  handleClear = () => {
    this.setState({search: ''}, this.getNearestRestaurant);
  };

  search = () => {
    this.getNearestRestaurant();
  };

  onChangeSearch = text => {
    this.setState({search: text});
    // const {search, userLocation} = this.state;
    // setTimeout(() => {
    //   tempTime = tempTime + 1;
    //   if (tempTime == 2) {
    //     this.props
    //       .getNearestRestaurant({
    //         lat: parseFloat(userLocation?.latitude),
    //         lng: parseFloat(userLocation?.longitude),
    //         search_text: text,
    //       })
    //       .then(res => {
    //         tempTime = 0;
    //         Keyboard.dismiss();
    //         if (res?.nearestRestaurant?.data?.length > 0) {
    //           this.setState({restaurants: res?.nearestRestaurant?.data});
    //           this.animateToRegion(
    //             parseFloat(res?.nearestRestaurant?.data[0]?.lat),
    //             parseFloat(res?.nearestRestaurant?.data[0]?.lng),
    //           );
    //         } else {
    //           showToast('No Restarant Found');
    //         }
    //       });
    //   }
    // }, 5000);
  };

  getRestaurantDetails = id => {
    this.props.restaurantDetails({organisation_id: id}).then(res => {
      this.setState({
        details: res?.details,
        // ratings: res?.badges,
        // lootbox_amount: res?.lootbox_amount,
        // provo_cash_price: res?.provo_cash_price,
      });
      setTimeout(() => {
        this.setState({resturentModal: true});
      }, 500);
    });
  };

  getNearestRestaurant = async () => {
    this.setState({
      refreshing: true,
    });

    try {
      const filters = {
        lat: this.state?.userLocation?.latitude,
        lng: this.state?.userLocation?.longitude,
        search_text: this.state?.search,
        category_id: this.state?.category,
      };

      const response = await this.props.getNearestRestaurant(filters);
      // console.log('nearest response', response);
      this.setState({
        refreshing: false,
        restaurants: response?.nearestRestaurant?.data,
      });
    } catch (error) {
      this.setState({
        refreshing: false,
      });
    }
  };

  animateToRegion = (latitude, longitude) => {
    setTimeout(() => {
      this.mapRef?.animateToRegion(
        {
          latitude: Number(latitude),
          longitude: Number(longitude),
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: 0.0002,
        },
        2000,
      );
    }, 500);
  };
  getUserLocation = async () => {
    try {
      const location = await getCurrentLocation();
      this.animateToRegion(
        parseFloat(location?.latitude),
        parseFloat(location?.longitude),
      );
      this.setState({
        userLocation: {
          latitude: parseFloat(location?.latitude),
          longitude: parseFloat(location?.longitude),
        },
      });
      this.getNearestRestaurant();

      // this.props
      //   .getNearestRestaurant({
      //     lat: parseFloat(location?.latitude),
      //     lng: parseFloat(location?.longitude),
      //   })
      //   .then(res => {
      //     console.log('getNearestRestaurant', res?.nearestRestaurant?.data[0]);
      //     this.setState({restaurants: res?.nearestRestaurant?.data});
      //     this.animateToRegion(
      //       parseFloat(
      //         res?.nearestRestaurant?.data[0]?.lat
      //           ? res?.nearestRestaurant?.data[0]?.lat
      //           : 0,
      //       ),
      //       parseFloat(
      //         res?.nearestRestaurant?.data[0]?.lng
      //           ? res?.nearestRestaurant?.data[0]?.lng
      //           : 0,
      //       ),
      //     );
      //   });
    } catch (error) {
      showToast(error);
    }
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
    this.setupMethods();
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      this.setupMethods();
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  renderRatings = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          // justifyContent: 'space-between',
          marginTop: 2 * vh,
          width: 100 * vw,
        }}>
        {this.state.details?.badges?.map((item, index) => {
          return (
            <RateCard item={item} index={index} style={{marginLeft: vw * 5}} />
          );
        })}
      </View>
    );
  };

  rendercuisines = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 1.5 * vh,
        }}>
        <OutfitRegularText style={styles.cus}>
          {this.state.details?.organ_profiles?.cuisines?.name}
        </OutfitRegularText>
      </View>
    );
  };

  //   return (
  //     <View style={styles.lowerContainer}>
  //       <View
  //         style={{
  //           justifyContent: 'space-between',
  //           width: 42 * vw,
  //           height: vh * 10,
  //         }}>
  //         <OutfitSemiBoldText>Last Scan</OutfitSemiBoldText>
  //         <View style={styles.row}>
  //           <Image source={icons.calender} style={styles.icon} />
  //           <OutfitRegularText>02.02.2022</OutfitRegularText>
  //         </View>
  //         <View style={styles.row}>
  //           <Image source={icons.clock} style={styles.icon} />
  //           <OutfitRegularText>09:00 pm</OutfitRegularText>
  //         </View>
  //       </View>
  //       <View
  //         style={{
  //           //   flexDirection: 'row',
  //           //   alignItems: 'center',
  //           justifyContent: 'space-between',
  //           width: 55 * vw,
  //           height: vh * 13,
  //         }}>
  //         {this.state.ratings.map((item, index) => {
  //           return (
  //             <View>
  //               <DetailList item={item} index={index} />
  //             </View>
  //           );
  //         })}
  //       </View>
  //     </View>
  //   );
  // };

  // rendercategoryitem = ({item, index}) => {
  //   return (
  //     <View style={{marginBottom: vh, marginRight: 4 * vw}}>
  //       <View style={styles.viewcon}>
  //         <Image source={item.icon} style={styles.burgerIcon} />
  //         <OutfitSemiBoldText style={styles.catname}>
  //           {item.name}
  //         </OutfitSemiBoldText>
  //       </View>
  //     </View>
  //   );
  // };

  handleMarkerPress = location => {
    if (
      this.state?.userLocation?.latitude === 0 &&
      this.state?.userLocation?.longitude === 0
    ) {
      showToast('Location request timed out');
    } else {
      this.getRestaurantDetails(location?.id);
    }
  };

  renderMarkers = () => {
    return this.state.restaurants?.map(location => {
      console.log('nearest loc', location?.happy_hour_deals);
      return (
        <Marker
          draggable={false}
          coordinate={{
            latitude: Number(location?.lat),
            longitude: Number(location?.lng),
          }}
          onPress={
            () => this.handleMarkerPress(location)
            // () => this.getRestaurantDetails(location?.id)
          }>
          <TouchableHOC style={styles.markerTouch}>
            {location?.happy_hour_deals ? (
              <AnimatedLottieView
                source={lottieImage.fireImage}
                // style={styles.searchImageStyle}
                autoPlay={true}
                loop={true}
              />
            ) : (
              <Image source={icons.marker} style={styles.markerIconStyle} />
            )}
            <OutfitLightText style={styles.resName}>
              {location?.name}
            </OutfitLightText>
          </TouchableHOC>
        </Marker>
      );
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={backgrounds.bgimage}
          style={styles.imgbg}
          resizeMode="cover"
          imageStyle={styles.imgbg}>
          <MapView
            style={{flex: 1}}
            ref={r => (this.mapRef = r)}
            // mapType={Platform.OS == "android" ? "none" : "standard"}
            customMapStyle={mapStyle}
            initialRegion={{
              latitude: 37.8025259,
              longitude: -122.4351431,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}>
            {this.state?.userLocation && (
              <Marker coordinate={this.state?.userLocation}>
                <Image
                  source={icons.mapButton}
                  style={styles.markerIconStyle}
                />
              </Marker>
            )}
            {this.renderMarkers()}
          </MapView>

          {/* <View style={{ alignItems: 'center', }}> */}

          <View style={styles.box}>
            <View style={styles.searchContainer}>
              {/* <MainInput
                placeholder="Search Here..."
                // style={styles.field}
                ref={r => (this.email = r)}
                // onSubmitEditing={() => this.pw.onFocus()}
                leftIcon={icons.search}
                style={{width: vw * 70}}
                onChangeText={text => this.onChangeSearch(text)}
              /> */}
              <SearchInput
                placeholder="Search...."
                value={this.state.search}
                onChangeText={this.onChangeSearch}
                onSubmitEditing={this.search}
                clearBtn={this.state?.search?.length > 0}
                onClear={this.handleClear}
                style={{width: vw*70}}
                // onFocus={this.handleOnFocus}
                // onBlur={this.handleOnBlur}
              />
              <TouchableHOC
                style={styles.filterBg}
                onPress={() => this.setState({categoryModal: true})}>
                <Image source={icons.filter} style={styles.filter} />
              </TouchableHOC>
            </View>
          </View>

          {/* <View style={styles.mapButtonContainer}>
            <TouchableHOC onPress={() => this.setState({resturentModal: true})}>
              <Image source={icons.mapButton} style={styles.buttonIcon} />
            </TouchableHOC>
          </View> */}

          {/* </View> */}
          <BottomSheetWrapper
            noBackDrop
            visible={this.state.resturentModal}
            setVisible={() => this.setState({resturentModal: false})}>
            <ScrollView style={styles.imgbgs}>
              <View style={{alignItems: 'center', marginTop: 3 * vh}}>
                <Image source={sampleimage.places} style={styles.cardimg} />
              </View>
              <View style={{paddingHorizontal: 6 * vw}}>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 2 * vh,
                    justifyContent: 'space-between',
                  }}>
                  <OutfitSemiBoldText style={styles.recomend}>
                    About Restaurant
                  </OutfitSemiBoldText>
                  <View style={styles.menuContainer}>
                    <TouchableHOC
                      onPress={() => {
                        this.setState({resturentModal: false});
                        this.props.navigation.navigate('RestaurantDirection', {
                          latitude: this.state.details?.lat,
                          longitude: this.state.details?.lng,
                        });
                      }}
                      onSelect={() => {
                        this.setState({resturentModal: false});
                        this.props.navigation.navigate('RestaurantDirection', {
                          latitude: this.state.details?.lat,
                          longitude: this.state.details?.lng,
                        });
                      }}>
                      <OutfitRegularText style={styles.buttonText}>
                        View on Map
                      </OutfitRegularText>
                    </TouchableHOC>
                  </View>
                </View>

                <OutfitLightText style={styles.rewtext}>
                  {this.state.details?.organ_profiles?.about}
                </OutfitLightText>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <View style={styles.catbox}>
                    <Image
                      source={{
                        uri:
                          imageUrl +
                          this.state.details?.organ_profiles?.categories?.image,
                      }}
                      style={styles.catIcon}
                    />
                    <OutfitRegularText style={styles.catText}>
                      {'  '}
                      {this.state.details?.organ_profiles?.categories?.name}
                    </OutfitRegularText>
                  </View>
                </View>
                {/* {this.rendercuisines()} */}
              </View>
              {this.renderRatings()}

              <Dash
                style={{
                  width: 100 * vw,
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginVertical: vh * 2,
                  // marginBottom: vh * 2,
                }}
                dashColor="#E9E9E9"
                dashLength={0}
                dashGap={1 * vh}
                dashStyle={{width: 2 * vw}}></Dash>

              <View style={styles.outerContainer}>
                <View style={styles.priceContainer}>
                  <OutfitSemiBoldText style={styles.priceHeadingText}>
                    By Card:
                  </OutfitSemiBoldText>
                  <OutfitRegularText style={styles.priceHeadingText}>
                    ${this.state?.details?.lootbox_amount}
                  </OutfitRegularText>
                </View>
                <View style={styles.priceContainer}>
                  <OutfitSemiBoldText style={styles.priceHeadingText}>
                    By ProvoCash:
                  </OutfitSemiBoldText>
                  <OutfitRegularText style={styles.priceHeadingText}>
                    ${this.state?.details?.provo_cash_price}
                  </OutfitRegularText>
                </View>
              </View>
              {/* <View
                style={{
                  paddingHorizontal: 5 * vw,
                  marginTop: 5 * vh,
                  justifyContent: 'space-between',
                }}>
                <OutfitSemiBoldText style={styles.recomend}>
                  Happy Hours Deals
                </OutfitSemiBoldText>
                <HomeCarouselConmponent />
              </View> */}
              <View style={{alignItems: 'center'}}>
                <Button
                  title="Loot Box"
                  onPress={() => {
                    if (this.props?.token) {
                      this.setState({resturentModal: false});
                      this.props.navigation.navigate('LootBoxPaymentMethod', {
                        id: this.state.details?.id,
                        provoCash: this.state?.details?.provo_cash_price,
                        lootBoxAmount: this.state?.details?.lootbox_amount,
                      });
                    } else {
                      showToast('Please Login First.');
                    }
                  }}
                  btnContainer={{marginTop: 3 * vh}}
                />
              </View>
            </ScrollView>
          </BottomSheetWrapper>
          {/* <BottomSheetWrapper
            noBackDrop
            visible={this.state.campaignModal}
            setVisible={() => this.setState({campaignModal: false})}>
            <View style={styles.categorybox}>
              <View style={{flexDirection: 'row', paddingLeft: 5 * vw}}>
                <OutfitSemiBoldText style={styles.recomend}>
                  Categories
                </OutfitSemiBoldText>
              </View>

              <FlatList
                data={this.state.categories}
                showsHorizontalScrollIndicator={false}
                style={{marginTop: vh, paddingLeft: 4 * vw}}
                renderItem={this.rendercategoryitem}
                horizontal={true}
              />
              <Dash
                style={{
                  width: 100 * vw,
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: vh * 2,
                  marginBottom: vh * 2,
                }}
                dashColor="#E9E9E9"
                dashLength={0}
                dashGap={1 * vh}
                dashStyle={{width: 2 * vw}}></Dash>
              <View
                style={{
                  flexDirection: 'row',
                  paddingLeft: 5 * vw,
                  marginTop: vh * 1,
                }}>
                <OutfitSemiBoldText style={styles.recomend}>
                  Loot Boxes
                </OutfitSemiBoldText>
              </View>
              <View style={styles.campaignCon}>
                {this.state.campains.map((val, index) => {
                  return (
                    <TouchableHOC
                      style={styles.campaign}
                      onPress={() => {
                        this.setState({campaignModal: false});
                        this.props.navigation.navigate(
                          'ResturentCampaignDetails',
                        );
                      }}>
                      <OutfitMediumText>{val.name}</OutfitMediumText>
                    </TouchableHOC>
                  );
                })}
              </View>
            </View>
          </BottomSheetWrapper> */}
          <CategoryModal
            visible={this.state.categoryModal}
            setVisible={() => this.setState({categoryModal: false})}
            setCategory={value => this.handleCategory(value)}
          />
        </ImageBackground>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  // count: state.count,
  token: state.SessionReducer.token,
});
const mapDispatchToProps = dispatch => {
  return {
    // explicitly forwarding arguments
    getNearestRestaurant: data => dispatch(getNearestRestaurants(data)),
    restaurantDetails: data => dispatch(restaurantDetails(data)),
    // signup: data => dispatch(userSignup(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen);
