import React from 'react';
import {ImageBackground, View, FlatList} from 'react-native';
import {backgrounds} from '../../assets/images';
import styles from './styles';
import HomeCard from '../../components/ResCard';
import {vh, vw} from '../../Utils/Units';
import Dash from 'react-native-dash';
import {getRewardHistory} from '../../Redux/Actions/otherActions';
import {connect} from 'react-redux';
import {
  checkLocationPermissions,
  getCurrentLocation,
} from '../../Utils/mapHelperFunction';

class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      totalPages: 1,
      refreshing: false,
      response: [],
      userLocation: {latitude: '', longitude: ''},
    };
  }

  onEndReached = () => {
    if (this.state.page < this.state.totalPages) {
      this.setState(
        {
          page: this.state.page + 1,
        },
        this.getData,
      );
    }
  };

  onRefresh = () => {
    this.setState(
      {
        page: 1,
        totalPages: 1,
      },
      this.getData,
    );
  };

  getData = async () => {
    this.setState({
      refreshing: true,
    });

    try {
      const filters = {
        page: this.state.page,
        per_page: 10,
      };

      const response = await this.props.getRewardHistory(filters);
      //   console.log('response', response);
      this.setState({
        response: response?.history?.data,
      });

      let data = {
        refreshing: false,
        response: response?.history?.data,
        totalPages: response?.history?.last_page,
      };

      if (filters.page > 1) {
        data = {
          ...data,
          response: [...this.state.response, ...response?.history?.data],
        };
      }

      this.setState({
        ...data,
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
    this.getData();
  }

  handleRestaurantPress = item => {
    this.props.navigation.navigate('HistoryDetails', {id: item?.id});
  };

  handleMapBtnPress = item => {
    this.props.navigation.navigate('RestaurantDirection', {
      latitude: item?.lat,
      longitude: item?.lng,
    });
  };

  renderItem = ({item, index}) => {
    return (
      <View style={{marginVertical: 2 * vh}}>
        <HomeCard
          item={item?.organisations}
          history={item}
          onClick={() => this.handleRestaurantPress(item?.organisations)}
          viewmap={() => this.handleMapBtnPress(item?.organisations)}
          location={this.state.userLocation}
        />
        {index + 1 < this.state.response && (
          <Dash
            style={{
              width: 60 * vw,
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: vh * 2,
              // marginBottom: vh * 2,
            }}
            dashColor="#E9E9E9"
            dashLength={0}
            dashGap={0.5 * vh}
            dashStyle={{width: 2 * vw, height: vh * 0.2}}></Dash>
        )}
      </View>
    );
  };

  render() {
    // console.log('response', this.state.response);
    return (
      <View style={styles.container}>
        <ImageBackground
          source={backgrounds.grayBackground}
          style={{width: 100 * vw, flex: 1}}
          resizeMode="cover"
          imageStyle={{width: 100 * vw}}>
          <View style={{alignItems: 'center'}}>
            <FlatList
              data={this.state.response}
              showsVerticalScrollIndicator={false}
              style={{marginTop: vh, marginBottom: 4 * vh}}
              renderItem={this.renderItem}
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh}
              onEndReached={this.onEndReached}
            />
          </View>
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
    getRewardHistory: data => dispatch(getRewardHistory(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(History);
