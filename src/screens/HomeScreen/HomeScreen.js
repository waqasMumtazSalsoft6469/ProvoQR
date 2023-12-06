import React, {useState, useEffect, useCallback} from 'react';
import {ImageBackground, View, FlatList, Platform, Linking} from 'react-native';
import {backgrounds} from '../../assets/images';
import styles from './styles';
import HomeCard from '../../components/ResCard';
import TouchableHOC from '../../components/Buttons/TouchableHOC';
import {vh, vw} from '../../Utils/Units';
import OutfitSemiBoldText from '../../components/Text/OutfitSemiBoldText';
import {useSelector, useDispatch} from 'react-redux'; // Import useSelector and useDispatch
import ThemeColors from '../../Utils/ThemeColors';
import Dash from 'react-native-dash';
import HomeCarouselConmponent from '../../components/HomeCarouselComponent';
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
import {showToast} from '../../Api/HelperFunction';
import LocationComponent from '../../components/LocationComponent';
import {
  headerRightOptions,
  showHeaderRight,
} from '../../Navigation/NavigationOptions';

import {getHomeData} from '../../Redux/Actions/otherActions';
import {useFocusEffect} from '@react-navigation/native';
import _ from 'lodash';

const HomeScreen = ({navigation}) => {
  const location = useSelector(state => state.GeneralReducer?.location);
  const dispatch = useDispatch(); // Initialize useDispatch to dispatch actions

  const [banners, setBanners] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [categories, setCategories] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const [searchString, setSearchString] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // ... rest of the component remains the same

  const handleDoneAddress = (address, latitude, longitude) => {
    setUserLocation({latitude, longitude});
    // getData();
  };

  const handleLocationPress = () => {
    navigation.navigate('Location', {
      handleDoneAddress: handleDoneAddress,
    });
  };

  const handleClear = () => {
    setSearchString('');
    getData();
  };

  const search = () => {
    getData();
  };

  const debouncedSearch = useCallback(
    _.debounce(text => {
      // Implement your search logic here
      // For example, you can filter and update the searchResults state
      // based on the searchText.
      // setSearchString(text);
    }, 500),
    [],
  );

  const onChangeText = text => {
    setSearchString(text);
    // debouncedSearch(text);
  };

  const handleOnBlur = () => {
    setIsSearchFocused(false);
  };

  const handleOnFocus = () => {
    setIsSearchFocused(true);
  };

  const renderCategoryEmptyComponent = () => {
    if (refreshing) {
      return null;
    }
    return <EmptyComponent text="No categories to show" />;
  };

  const renderEmpty = () => {
    if (refreshing) {
      return null;
    }
    return <EmptyComponent text="No restaurants to show" />;
  };

  const handleOnRefresh = () => {
    getData();
  };

  // Use dispatch to call the getHomeData action
  const getData = async () => {
    setRefreshing(true);
    try {
      let params = {
        search_text: searchString,
        lat: userLocation?.latitude ?? location?.coordinate?.latitude,
        lng: userLocation?.longitude ?? location?.coordinate?.longitude,
      };

      console.log('Home res params New 55', params);

      const res = await dispatch(getHomeData(params));

      setBanners(res?.banner);
      setRecommended(res?.recommended);
      setAllRestaurant(res?.allRestaurant);
      setCategories(res?.category);
      setRefreshing(false);
    } catch (error) {
      setRefreshing(false);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      let isActive = true;

      getData();

      // if (isActive) getData();

      // return () => {
      //   isActive = false;
      // };
    }, [location]),
  );

  useEffect(() => {
    reactNativeEasyPushNotifications.onMessageReceived(notif => {
      console.log('onMessageReceived:', notif);
    });

    reactNativeEasyPushNotifications.getLastNotificationData(notif => {
      console.log('getLastNotificationData:', notif);
    });

    const unsubscribeFocus = navigation.addListener('focus', () => {
      navigation.setOptions({
        headerRight: () => showHeaderRight({navigation}, handleLocationPress),
      });
      getData();
    });

    const unsubscribeBlur = navigation.addListener('blur', () => {
      setSearchString('');
      getData();
    });

    if (Platform.OS === 'android') {
      KeyboardAdjust.setAdjustPan();
    }

    getData();

    return () => {
      unsubscribeFocus();
      unsubscribeBlur();
    };
  }, []);

  const handleViewAllCategoryPress = () => {
    navigation.navigate('CategoryListScreen');
  };

  const handleViewAllRecommendedRestaurantPress = () => {
    navigation.navigate('RecommendedRestaurantList');
  };

  const handleViewAllRestaurantPress = () => {
    navigation.navigate('RestaurantListScreen');
  };

  const handleCategoryPress = item => {
    navigation.navigate('RestaurantListScreen', {
      id: item?.id,
      name: item?.name,
    });
  };

  const renderCategoryItem = ({item}) => {
    return (
      <HomeCategoryCard item={item} onPress={() => handleCategoryPress(item)} />
    );
  };

  const handleMapBtnPress = item => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${item?.lat},${item?.lng}&dir_action=navigate`;
    const supported = Linking.canOpenURL(url);
    if (supported) {
      Linking.openURL(url);
    } else {
      showToast(`Don't know how to open this URL: ${url}`);
    }
  };

  const handleRestaurantPress = item => {
    navigation.navigate('ResturentDetail', {
      id: item?.id,
      name: item?.name,
    });
  };

  const renderAllRestaurantItem = ({item}) => {
    return (
      <View key={item?.id} style={styles.homeCardContainer}>
        <HomeCard
          item={item}
          onClick={() => handleRestaurantPress(item)}
          viewmap={() => handleMapBtnPress(item)}
          location={location?.coordinate}
          style={{marginVertical: vh * 1}}
        />
      </View>
    );
  };

  const renderCategories = () => {
    if (
      refreshing ||
      searchString?.length > 0 ||
      isSearchFocused ||
      categories?.length < 1
    ) {
      return null;
    }
    return (
      <View>
        <View style={styles.viewAllBtnContainer}>
          <OutfitSemiBoldText style={styles.subHeadingText}>
            Categories
          </OutfitSemiBoldText>
          <TouchableHOC onPress={handleViewAllCategoryPress}>
            <OutfitRegularText style={styles.btnText}>
              View All
            </OutfitRegularText>
          </TouchableHOC>
        </View>

        <FlatList
          data={categories}
          keyExtractor={item => String(item?.id)}
          showsHorizontalScrollIndicator={false}
          style={styles.categoryStyle}
          renderItem={renderCategoryItem}
          horizontal={true}
          ListEmptyComponent={renderCategoryEmptyComponent}
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

  const renderRecommendedEmptyRestaurant = () => {
    if (refreshing) {
      return null;
    }
    return (
      <EmptyComponent
        text="No restaurants to show"
        style={styles.emptyContainer}
      />
    );
  };

  const renderRecommendedRestaurant = () => {
    if (
      refreshing ||
      searchString?.length > 0 ||
      isSearchFocused ||
      recommended?.length < 1
    ) {
      return null;
    }
    return (
      <View>
        <View style={styles.viewAllBtnContainer}>
          <OutfitSemiBoldText style={styles.subHeadingText}>
            Happy Hour Restaurants
          </OutfitSemiBoldText>
          <TouchableHOC onPress={handleViewAllRecommendedRestaurantPress}>
            <OutfitRegularText style={styles.btnText}>
              View All
            </OutfitRegularText>
          </TouchableHOC>
        </View>
        <FlatList
          data={recommended}
          keyExtractor={item => String(item?.id)}
          showsHorizontalScrollIndicator={false}
          style={styles.recommendedStyle}
          contentContainerStyle={styles.recommendedContentContainerStyle}
          renderItem={renderAllRestaurantItem}
          horizontal={true}
          pagingEnabled
          ListEmptyComponent={renderRecommendedEmptyRestaurant}
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

  const renderBanner = () => {
    if (refreshing || searchString?.length > 0) {
      return null;
    }
    return (
      <View style={styles.bannerContainer}>
        <OutfitSemiBoldText style={styles.subHeadingText}>
          Happy Hours Deals
        </OutfitSemiBoldText>
        <HomeCarouselConmponent banners={banners?.slice(0, 4)} />
      </View>
    );
  };

  const RenderHeader = ({onChangeText}) => {
    return (
      <View style={styles.headerContainer}>
        <SearchInput
          placeholder="Search...."
          value={searchString}
          onChangeText={v => onChangeText(v)}
          onSubmitEditing={search}
          clearBtn={searchString?.length > 0}
          onClear={handleClear}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
        />
        {/* {renderBanner()} */}
        {renderRecommendedRestaurant()}
        {renderCategories()}

        <View style={[styles.viewAllBtnContainer, styles.bottomViewAllBtn]}>
          <OutfitSemiBoldText style={styles.subHeadingText}>
            All Places
          </OutfitSemiBoldText>
          <TouchableHOC onPress={handleViewAllRestaurantPress}>
            <OutfitRegularText style={styles.btnText}>
              View All
            </OutfitRegularText>
          </TouchableHOC>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgrounds.grayBackground}
        style={styles.imageContainer}
        imageStyle={styles.imageStyle}>
        {/* {renderHeader()} */}

        <FlatList
          data={allRestaurant?.data}
          keyExtractor={item => String(item?.id)}
          showsVerticalScrollIndicator={false}
          style={styles.bottomFlatListStyle}
          contentContainerStyle={styles.contentContainerStyle}
          // ListHeaderComponent={renderHeader}
          ListHeaderComponent={
            <View style={styles.headerContainer}>
              <SearchInput
                placeholder="Search...."
                value={searchString}
                onChangeText={v => onChangeText(v)}
                onSubmitEditing={search}
                clearBtn={searchString?.length > 0}
                onClear={handleClear}
                onFocus={handleOnFocus}
                onBlur={handleOnBlur}
              />
              {/* {renderBanner()} */}
              {renderRecommendedRestaurant()}
              {renderCategories()}

              <View
                style={[styles.viewAllBtnContainer, styles.bottomViewAllBtn]}>
                <OutfitSemiBoldText style={styles.subHeadingText}>
                  All Places
                </OutfitSemiBoldText>
                <TouchableHOC onPress={handleViewAllRestaurantPress}>
                  <OutfitRegularText style={styles.btnText}>
                    View All
                  </OutfitRegularText>
                </TouchableHOC>
              </View>
            </View>
          }
          renderItem={renderAllRestaurantItem}
          refreshing={refreshing}
          onRefresh={handleOnRefresh}
          ListEmptyComponent={renderEmpty}
          keyboardDismissMode="none"
        />
        <LocationComponent coordinates={userLocation} />
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
