import React, {useEffect, useState} from 'react';
import {FlatList, View, Linking} from 'react-native';
import styles from './styles';
import HomeCard from '../../components/ResCard';
import {getAllRestaurant} from '../../Redux/Actions/otherActions';
import {useDispatch, useSelector} from 'react-redux';
import {
  checkLocationPermissions,
  getCurrentLocation,
} from '../../Utils/mapHelperFunction';
import OutfitSemiBoldText from '../../components/Text/OutfitSemiBoldText';
import EmptyComponent from '../../components/EmptyComponent';
import {showToast} from '../../Api/HelperFunction';

const RestaurantListScreen = props => {
  const name = props?.route?.params?.name;
  const id = props?.route?.params?.id;

  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.GeneralReducer.softLoading);
  const location = useSelector(state => state.GeneralReducer?.location);

  const [restaurant, setRestaurant] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [userLocation, setUserLocation] = useState({
    location: {
      latitude: 0,
      longitude: 0,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  });

  const handleMapBtnPress = item => {
    // console.log('items >>>>', item);
    // return;
    const url = `https://www.google.com/maps/dir/?api=1&destination=${item?.lat},${item?.lng}&dir_action=navigate`;
    const supported = Linking.canOpenURL(url);
    if (supported) {
      Linking.openURL(url);
    } else {
      showToast(`Don't know how to open this URL: ${url}`);
    }
  };

  // const handleMapBtnPress = item => {
  //   props.navigation.navigate('RestaurantDirection', {
  //     latitude: item?.lat,
  //     longitude: item?.lng,
  //   });
  // };

  const renderHeadingText = () => {
    if (name) {
      return name;
    } else {
      return 'All Restaurants';
    }
  };

  const handleRestaurantPress = item => {
    props.navigation.navigate('ResturentDetail', {
      id: item?.id,
      name: item?.name,
    });
  };

  const handleOnEndReached = () => {
    getData();
  };

  const handleOnRefresh = () => {
    setCurrentPage(1);
  };

  const getData = async () => {
    if (!refreshing && currentPage) {
      setRefreshing(true);
      try {
        const data = {
          page: currentPage,
          per_page: 6,
        };
        if (id) {
          data.category_id = id;
        }
        const response = await dispatch(getAllRestaurant(data));
        if (response?.restaurantList?.current_page === 1) {
          setRestaurant(response?.restaurantList?.data);
        } else {
          setRestaurant(prev => prev.concat(response?.restaurantList?.data));
        }
        if (
          response?.restaurantList?.data?.length <
          response?.restaurantList?.total
        ) {
          setCurrentPage(response?.restaurantList?.current_page + 1);
        } else {
          setCurrentPage(null);
        }
      } catch (error) {
        setRefreshing(false);
      } finally {
        setRefreshing(false);
      }
    }
  };

  // const getUserLocation = async () => {
  //   try {
  //     const location = await getCurrentLocation();
  //     // console.log('CURRENT LOCATION', location);
  //     setUserLocation({
  //       location: {
  //         latitude: parseFloat(location?.latitude),
  //         longitude: parseFloat(location?.longitude),
  //       },
  //     });
  //   } catch (error) {
  //     console.log('location** error ', error);
  //   }
  // };
  // const setupMethods = async () => {
  //   try {
  //     await checkLocationPermissions();
  //     getUserLocation();
  //   } catch (error) {
  //     console.log('location** error ', error);
  //   }
  // };

  useEffect(() => {
    if (currentPage === 1) {
      getData();
    }
  }, [currentPage]);

  useEffect(() => {
    // setupMethods();
    getData();
  }, []);

  const renderHeader = (
    <View style={styles.headerContainer}>
      <OutfitSemiBoldText style={styles.headingTextStyle}>
        {renderHeadingText()}
      </OutfitSemiBoldText>
    </View>
  );

  const renderEmpty = () => {
    if (refreshing) {
      return null;
    }
    return <EmptyComponent text="No restaurants to show" />;
  };

  // console.log('Restaurants Data *****>>>>>>', JSON.stringify(restaurant));

  const renderItem = ({item}) => {
    return (
      <HomeCard
        style={styles.resCardContainer}
        item={item}
        onClick={() => handleRestaurantPress(item)}
        viewmap={() => handleMapBtnPress(item)}
        location={location?.coordinate}
      />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={restaurant}
        renderItem={renderItem}
        keyExtractor={item => `item_${item?.id}`}
        contentContainerStyle={styles.contentContainerStyle}
        ListHeaderComponent={renderHeader}
        showsVerticalScrollIndicator={false}
        refreshing={refreshing}
        onRefresh={handleOnRefresh}
        onEndReached={handleOnEndReached}
        ListEmptyComponent={renderEmpty}
      />
    </View>
  );
};

export default RestaurantListScreen;
