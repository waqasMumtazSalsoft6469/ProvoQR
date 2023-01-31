import React from 'react';
import {ImageBackground, View, FlatList, Platform} from 'react-native';
import {backgrounds} from '../../assets/images';
import styles from './styles';
import HomeCard from '../../components/ResCard';
import TouchableHOC from '../../components/Buttons/TouchableHOC';
import {vh, vw} from '../../Utils/Units';
import OutfitSemiBoldText from '../../components/Text/OutfitSemiBoldText';
import {connect} from 'react-redux';
import ThemeColors from '../../Utils/ThemeColors';
import Dash from 'react-native-dash';
import HomeCarouselConmponent from '../../components/HomeCarouselComponent';
import {getHomeData} from '../../Redux/Actions/otherActions';
import OutfitRegularText from '../../components/Text/OutfitRegularText';
import SearchInput from '../../components/Input/SearchInput';
import {
  checkLocationPermissions,
  getCurrentLocation,
} from '../../Utils/mapHelperFunction';
import HomeCategoryCard from '../../components/HomeCategoryCard';
import KeyboardAdjust from 'react-native-android-keyboard-adjust';
import EmptyComponent from '../../components/EmptyComponent';
import reactNativeEasyPushNotifications from 'react-native-easy-push-notifications';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      banners: [],
      recommended: [],
      allRestaurant: [],
      categories: [],
      userLocation: {latitude: '', longitude: ''},
      searchString: '',
      refreshing: false,
    };
  }

  search = () => {
    if (this.timeout != null) {
      clearTimeout(this.timeout);
      this.timeout = null;
    }
    this.getData();
  };

  onChangeText = text => {
    this.setState({
      searchString: text,
    });

    if (text?.trim()?.length > 2) {
      if (this.timeout != null) {
        clearTimeout(this.timeout);
        this.timeout = null;
      }
      this.timeout = setTimeout(this.search, 500);
    }
  };

  renderCategoryEmptyComponent = () => {
    if (this.state.refreshing) {
      return null;
    }
    return <EmptyComponent text="No categories to show" />;
  };
  renderEmpty = () => {
    if (this.state.refreshing) {
      return null;
    }
    return <EmptyComponent text="No restaurants to show" />;
  };

  handleOnRefresh = () => {
    this.getData();
  };

  getData = async () => {
    this.setState({
      refreshing: true,
    });
    try {
      let params = {
        search_text: this.state.searchString,
      };

      const res = await this.props.getHomData(params);
      this.setState({
        banners: res?.banner,
        recommended: res?.recommended,
        allRestaurant: res?.allRestaurant,
        categories: res?.category,
        refreshing: false,
      });
    } catch (error) {
      this.setState({
        refreshing: false,
      });
    }
  };

  getUserLocation = async () => {
    try {
      const location = await getCurrentLocation();
      // console.log('CURRENT LOCATION', location);
      this.setState({
        userLocation: {
          latitude: parseFloat(location?.latitude),
          longitude: parseFloat(location?.longitude),
        },
      });
    } catch (error) {
      console.log('user location error ', error);
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
    reactNativeEasyPushNotifications.onMessageReceived(notif => {
      console.log('onMessageReceived:', notif);
      // This method is triggered whenever the app is in foreground and we receive the notification
    });

    reactNativeEasyPushNotifications.getLastNotificationData(notif => {
      console.log('getLastNotificationData:', notif);
      // This method is triggered whenever the user taps on the notification
    });
    if (Platform.OS === 'android') {
      KeyboardAdjust.setAdjustPan();
    }
    this.setupMethods();
    this.getData();
  }

  handleViewAllCategoryPress = () => {
    this.props.navigation.navigate('CategoryListScreen');
  };

  handleViewAllRecommendedRestaurantPress = () => {
    this.props.navigation.navigate('RecommendedRestaurantList');
  };

  handleViewAllRestaurantPress = () => {
    this.props.navigation.navigate('RestaurantListScreen');
  };

  handleCategoryPress = item => {
    this.props.navigation.navigate('RestaurantListScreen', {
      id: item?.id,
      name: item?.name,
    });
  };
  renderCategoryItem = ({item}) => {
    return (
      <HomeCategoryCard
        item={item}
        onPress={() => this.handleCategoryPress(item)}
      />
    );
  };
  handleMapBtnPress = item => {
    this.props.navigation.navigate('RestaurantDirection', {
      latitude: item?.lat,
      longitude: item?.lng,
    });
  };
  handleRestaurantPress = item => {
    this.props.navigation.navigate('ResturentDetail', {
      id: item?.id,
      name: item?.name,
    });
  };
  renderAllRestaurantItem = ({item}) => {
    return (
      <View style={styles.homeCardContainer}>
        <HomeCard
          item={item}
          onClick={() => this.handleRestaurantPress(item)}
          viewmap={() => this.handleMapBtnPress(item)}
          location={this.state.userLocation}
        />
      </View>
    );
  };
  renderCategories = () => {
    if (this.state.refreshing || this.state.searchString?.length > 0) {
      return null;
    }
    return (
      <View>
        <View style={styles.viewAllBtnContainer}>
          <OutfitSemiBoldText style={styles.subHeadingText}>
            Categories
          </OutfitSemiBoldText>
          <TouchableHOC onPress={this.handleViewAllCategoryPress}>
            <OutfitRegularText style={styles.btnText}>
              View All
            </OutfitRegularText>
          </TouchableHOC>
        </View>

        <FlatList
          data={this.state.categories}
          keyExtractor={item => String(item?.id)}
          showsHorizontalScrollIndicator={false}
          style={styles.categoryStyle}
          renderItem={this.renderCategoryItem}
          horizontal={true}
          ListEmptyComponent={this.renderCategoryEmptyComponent}
          contentContainerStyle={styles.recommendedContentContainerStyle}
        />
        <Dash
          style={styles.dashBorderStyle}
          dashColor={ThemeColors.dashBorderColor}
          dashLength={0}
          dashGap={1 * vh}
          dashStyle={{width: 2 * vw}}
        />
      </View>
    );
  };
  renderRecommendedEmptyRestaurant = () => {
    if (this.state.refreshing) {
      return null;
    }
    return (
      <EmptyComponent
        text="No restaurants to show"
        style={styles.emptyContainer}
      />
    );
  };
  renderRecommendedRestaurant = () => {
    if (this.state.refreshing || this.state.searchString?.length > 0) {
      return null;
    }
    return (
      <View>
        <View style={styles.viewAllBtnContainer}>
          <OutfitSemiBoldText style={styles.subHeadingText}>
            Recommended For You
          </OutfitSemiBoldText>
          <TouchableHOC onPress={this.handleViewAllRecommendedRestaurantPress}>
            <OutfitRegularText style={styles.btnText}>
              View All
            </OutfitRegularText>
          </TouchableHOC>
        </View>
        <FlatList
          data={this.state.recommended}
          keyExtractor={item => String(item?.id)}
          showsHorizontalScrollIndicator={false}
          style={styles.recommendedStyle}
          contentContainerStyle={styles.recommendedContentContainerStyle}
          renderItem={this.renderAllRestaurantItem}
          horizontal={true}
          pagingEnabled
          ListEmptyComponent={this.renderRecommendedEmptyRestaurant}
        />
        <Dash
          style={styles.dashBorderStyle}
          dashColor={ThemeColors.dashBorderColor}
          dashLength={0}
          dashGap={1 * vh}
          dashStyle={{width: 2 * vw}}
        />
      </View>
    );
  };
  renderBanner = () => {
    if (this.state.refreshing || this.state.searchString?.length > 0) {
      return null;
    }
    return (
      <View style={styles.bannerContainer}>
        <OutfitSemiBoldText style={styles.subHeadingText}>
          Happy Hours Deals
        </OutfitSemiBoldText>
        <HomeCarouselConmponent banners={this.state.banners?.slice(0, 4)} />
      </View>
    );
  };
  renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <SearchInput
          placeholder="Search...."
          value={this.state.searchString}
          onChangeText={this.onChangeText}
        />
        {this.renderBanner()}
        {this.renderRecommendedRestaurant()}
        {this.renderCategories()}

        <View style={[styles.viewAllBtnContainer, styles.bottomViewAllBtn]}>
          <OutfitSemiBoldText style={styles.subHeadingText}>
            All Places
          </OutfitSemiBoldText>
          <TouchableHOC onPress={this.handleViewAllRestaurantPress}>
            <OutfitRegularText style={styles.btnText}>
              View All
            </OutfitRegularText>
          </TouchableHOC>
        </View>
      </View>
    );
  };
  render() {
    // console.log('navigation', this.props.navigation);
    return (
      <View style={styles.container}>
        <ImageBackground
          source={backgrounds.grayBackground}
          style={styles.imageContainer}
          imageStyle={styles.imageStyle}>
          <FlatList
            data={this.state?.allRestaurant?.data}
            keyExtractor={item => String(item?.id)}
            showsVerticalScrollIndicator={false}
            style={styles.bottomFlatListStyle}
            contentContainerStyle={styles.contentContainerStyle}
            ListHeaderComponent={this.renderHeader}
            renderItem={this.renderAllRestaurantItem}
            refreshing={this.state.refreshing}
            onRefresh={this.handleOnRefresh}
            ListEmptyComponent={this.renderEmpty}
          />
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
    getHomData: params => dispatch(getHomeData(params)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
