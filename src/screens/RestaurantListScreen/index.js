import React from 'react';
import {FlatList, ImageBackground, View} from 'react-native';
import {backgrounds} from '../../assets/images';
import ScreenWrapper from '../../components/ScreenWrapper';
import styles from './styles';
import HomeCard from '../../components/MenuCard';
import {getAllRestaurant} from '../../Redux/Actions/otherActions';
const RestaurantListScreen = () => {
  const [response, setResponse] = useState([]);

  const getData = async () => {};
  useEffect(() => {
    getData();
  }, []);

  const renderItem = () => {
    return (
      <HomeCard
      // item={item}
      // onClick={() =>
      //   this.props.navigation.navigate('ResturentDetail', {id: item?.id})
      // }
      // viewmap={() =>
      //   this.props.navigation.navigate('RestaurantDirection', {
      //     latitude: item?.lat,
      //     longitude: item?.lng,
      //   })
      // }
      // location={this.state.userLocation}
      />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList data={[1, 2, 3, 4, 5]} renderItem={renderItem} />
    </View>
  );
};

export default RestaurantListScreen;
