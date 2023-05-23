import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import styles from './styles';
import HomeCard from '../../components/ResCard';
import {getRecommendedRestaurant} from '../../Redux/Actions/otherActions';
import {useDispatch, useSelector} from 'react-redux';
import {
  checkLocationPermissions,
  getCurrentLocation,
} from '../../Utils/mapHelperFunction';
import OutfitSemiBoldText from '../../components/Text/OutfitSemiBoldText';
import EmptyComponent from '../../components/EmptyComponent';

const RecommendedRestaurantList = props => {
  const id = props?.route?.params?.id;

  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.GeneralReducer.softLoading);

  const [restaurant, setRestaurant] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
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
    props.navigation.navigate('RestaurantDirection', {
      latitude: item?.lat,
      longitude: item?.lng,
    });
  };

  const handleRestaurantPress = item => {
    props.navigation.navigate('ResturentDetail', {
      id: item?.id,
      name: item?.name,
    });
  };

  const handleOnEndReached = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      getData();
    }
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
          per_page: 10,
        };
        const response = await dispatch(getRecommendedRestaurant(data));
        if (response?.recommended_restaurantList?.current_page === 1) {
          setRestaurant(response?.recommended_restaurantList?.data);
          setTotalPages(response?.recommended_restaurantList?.total);
        } else {
          setRestaurant(prev =>
            prev.concat(response?.recommended_restaurantList?.data),
          );
        }
      } catch (error) {
      } finally {
        setRefreshing(false);
      }
    }
  };

  const getUserLocation = async () => {
    try {
      const location = await getCurrentLocation();
      // console.log('CURRENT LOCATION', location);
      setUserLocation({
        location: {
          latitude: parseFloat(location?.latitude),
          longitude: parseFloat(location?.longitude),
        },
      });
    } catch (error) {
      console.log('location** error ', error);
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
    if (currentPage === 1) {
      getData();
    }
  }, [currentPage]);

  useEffect(() => {
    setupMethods();
    getData();
  }, []);

  const renderEmpty = () => {
    if (refreshing) {
      return null;
    }
    return <EmptyComponent text="No restaurants to show" />;
  };

  const renderHeader = restaurant.length ? (
    <View style={styles.headerContainer}>
      <OutfitSemiBoldText style={styles.headingTextStyle}>
        Recommended For You
      </OutfitSemiBoldText>
    </View>
  ) : null;

  const renderItem = ({item}) => {
    return (
      <HomeCard
        item={item}
        onClick={() => handleRestaurantPress(item)}
        viewmap={() => handleMapBtnPress(item)}
        location={userLocation?.location}
        style={styles.resCardContainer}
      />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={restaurant}
        renderItem={renderItem}
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

export default RecommendedRestaurantList;
