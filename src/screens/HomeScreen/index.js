import React from 'react';
import {
  ImageBackground,
  View,
  Image,
  FlatList,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {backgrounds, icons, sampleimage} from '../../assets/images';
import styles from './styles';
import HeaderHome from '../../components/HeaderHome';
import JostRegular from '../../components/Text/JostRegular';
import HomeCard from '../../components/ResCard';
import TouchableHOC from '../../components/Buttons/TouchableHOC';
import {vh, vw} from '../../Utils/Units';
import OutfitSemiBoldText from '../../components/Text/OutfitSemiBoldText';
import OutfitMediumText from '../../components/Text/OutfitMediumText';
import {connect} from 'react-redux';
import ThemeColors from '../../Utils/ThemeColors';
import Dash from 'react-native-dash';
import HomeCarouselConmponent from '../../components/HomeCarouselComponent';
import {getHomeData} from '../../Redux/Actions/otherActions';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      banners: [],
      recommended: [],
      allRestaurant: [],
      categories: [],
      userLocation: {latitude: '', longitude: ''},
    };
  }

  getCurrentLocation = async () => {
    try {
      const location = await getCurrentLocation();
      this.setState({
        userLocation: {
          latitude: location?.latitude,
          longitude: parseFloat(location?.longitude),
        },
      });
    } catch (error) {
      showToast(error);
    }
  };

  componentDidMount() {
    this.props.getHomDate().then(res => {
      this.setState({
        banners: res?.banner,
        recommended: res?.recommended,
        allRestaurant: res?.allRestaurant,
        categories: res?.category,
      });
    });
  }

  renderitem = ({item, index}) => {
    return (
      <View style={{paddingHorizontal: 5 * vw}}>
        <HomeCard
          item={item}
          onClick={() =>
            this.props.navigation.navigate('ResturentDetail', {id: item?.id})
          }
          viewmap={() =>
            this.props.navigation.navigate('RestaurantDirection', {
              latitude: item?.lat,
              longitude: item?.lng,
            })
          }
          location={this.state.userLocation}
        />
      </View>
    );
  };

  rendercategoryitem = ({item, index}) => {
    return (
      <View
        style={{
          marginBottom: vh,
          // marginRight: 4 * vw,
          paddingHorizontal: vw * 2,
        }}>
        <View style={styles.viewcon}>
          {/* <Image source={item.icon} style={styles.burgerIcon} /> */}
          <OutfitSemiBoldText style={styles.catname}>
            {item.name}
          </OutfitSemiBoldText>
        </View>
      </View>
    );
  };

  // header = () => {
  //   return (
  //     <View style={{flexDirection: 'row'}}>
  //       <OutfitSemiBoldText style={styles.recomend}>
  //         Recommended For You
  //       </OutfitSemiBoldText>
  //     </View>
  //   );
  // };
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={backgrounds.grayBackground}
          style={{width: 100 * vw, flex: 1}}
          resizeMode="cover"
          imageStyle={{width: 100 * vw, height: 100 * vh}}>
          <HeaderHome>
            <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: 5 * vw,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View>
                <OutfitMediumText style={styles.headertext}>
                  Grab Your
                </OutfitMediumText>
                <OutfitSemiBoldText style={styles.headertextbold}>
                  Delicious Meal Now!
                </OutfitSemiBoldText>
              </View>

              <View style={{flexDirection: 'row'}}>
                <TouchableHOC
                  onPress={() => this.props.navigation.navigate('Location')}>
                  <Image
                    source={icons.whiteloc}
                    resizeMode="contain"
                    style={styles.profile}
                  />
                </TouchableHOC>
                <TouchableHOC
                  onPress={() =>
                    this.props.navigation.navigate('Notification')
                  }>
                  <ImageBackground
                    source={icons.notif}
                    resizeMode="contain"
                    style={{
                      width: 6 * vw,
                      height: 6 * vw,
                      alignItems: 'flex-end',
                    }}
                    imageStyle={{
                      width: 6 * vw,
                      height: 6 * vw,
                      tintColor: ThemeColors.iconColor,
                    }}>
                    <View style={styles.circle}>
                      <JostRegular style={styles.count}>5</JostRegular>
                    </View>
                  </ImageBackground>
                </TouchableHOC>
                <TouchableHOC
                  onPress={() => this.props.navigation.navigate('Profile')}>
                  <Image
                    source={sampleimage.profile}
                    resizeMode="contain"
                    style={styles.profile}
                  />
                </TouchableHOC>
              </View>
            </View>
          </HeaderHome>
          <ScrollView>
            {/* <TouchableHOC style={styles.seachbar}>
              <View
                style={{
                  flexDirection: 'row',
                  width: 75 * vw,
                }}>
                <TouchableOpacity
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 6.5 * vh,
                  }}>
                  <Image
                    source={icons.search}
                    style={styles.search}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
                <TextInput
                  placeholder="Search...."
                  returnKeyType={'search'}
                  placeholderTextColor="#999999"
                  style={styles.input}
                  ref={_ref => {
                    this.inputRef = _ref;
                  }}
                />
              </View>
            </TouchableHOC> */}
            <View
              style={{
                paddingHorizontal: 5 * vw,
                marginTop: 5 * vh,
                justifyContent: 'space-between',
              }}>
              <OutfitSemiBoldText style={styles.recomend}>
                Happy Hours Deals
              </OutfitSemiBoldText>
              <HomeCarouselConmponent
                banners={this.state.banners?.slice(0, 4)}
              />
            </View>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  paddingHorizontal: 5 * vw,
                  marginTop: 5 * vh,
                  justifyContent: 'space-between',
                }}>
                <OutfitSemiBoldText style={styles.recomend}>
                  Recommended For You
                </OutfitSemiBoldText>
                {/* <Image source={icons.filter} style={styles.filter} /> */}
              </View>
              <FlatList
                data={this.state.recommended}
                showsHorizontalScrollIndicator={false}
                style={{marginTop: vh}}
                renderItem={this.renderitem}
                horizontal={true}
              />
            </View>

            <Dash
              style={{
                width: 100 * vw,
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: vh * 3,
                marginBottom: vh * 3,
              }}
              dashColor="#E9E9E9"
              dashLength={0}
              dashGap={1 * vh}
              dashStyle={{width: 2 * vw}}></Dash>
            <View style={styles.categorybox}>
              <View style={{flexDirection: 'row', paddingLeft: 5 * vw}}>
                <OutfitSemiBoldText style={styles.recomend}>
                  Categories
                </OutfitSemiBoldText>
              </View>

              <FlatList
                data={this.state.categories}
                showsHorizontalScrollIndicator={false}
                style={{marginTop: vh}}
                renderItem={this.rendercategoryitem}
                horizontal={true}
              />
            </View>
            <Dash
              style={{
                width: 100 * vw,
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: vh * 3,
              }}
              dashColor="#E9E9E9"
              dashLength={0}
              dashGap={1 * vh}
              dashStyle={{width: 2 * vw}}></Dash>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  paddingLeft: 5 * vw,
                  marginTop: 2 * vh,
                }}>
                <OutfitSemiBoldText style={styles.recomend}>
                  All Places
                </OutfitSemiBoldText>
              </View>
              <FlatList
                data={this.state.allRestaurant}
                showsHorizontalScrollIndicator={false}
                style={{marginTop: vh, marginBottom: 15 * vh}}
                renderItem={this.renderitem}
                horizontal={true}
              />
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  // count: state.count,
});
const mapDispatchToProps = dispatch => {
  return {
    // explicitly forwarding arguments
    getHomDate: () => dispatch(getHomeData()),
    // signup: data => dispatch(userSignup(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
