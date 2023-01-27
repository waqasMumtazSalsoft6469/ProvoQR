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
import HomeCard from '../../components/ResCard';
import TouchableHOC from '../../components/Buttons/TouchableHOC';
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
      refreshing: false,
      response: [],
      userLocation: {latitude: '', longitude: ''},
      home: [
        {
          image: sampleimage.home1,
          name: 'Finest Dining Restaurant',
          distance: '113 meter',
          totalscan: '23',
          enum: 1,
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
        {
          image: sampleimage.home2,
          name: 'Finest Dining Restaurants',
          distance: '113 meter',
          totalscan: '23',
          enum: 2,
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
        {
          image: sampleimage.home2,
          name: 'Finest Dining Restaurant',
          distance: '113 meter',
          totalscan: '23',
          enum: 3,
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
        {
          image: sampleimage.home2,
          name: 'Finest Dining Restaurant',
          distance: '113 meter',
          totalscan: '23',
          enum: 1,
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
      ],
    };
  }

  // getData = () => {
  //   if (!this.props.loading) {
  //     this.props.getRewardHistory().then(res => {
  //       this.setState({
  //         response: res?.history,
  //       });
  //     });
  //   }
  // };

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

      // let data = {
      //   refreshing: false,
      //   notifications: response?.notifications?.docs,
      //   totalPages: response?.notifications?.totalPages,
      // };

      // if (filters.page > 1) {
      //   data = {
      //     ...data,
      //     notifications: [
      //       ...this.state.notifications,
      //       ...response?.notifications?.docs,
      //     ],
      //   };
      // }

      // this.setState({
      //   ...data,
      // });
    } catch (error) {
      this.setState({
        refreshing: false,
      });
      //   showToast(error);
    } finally {
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

  handleMapBtnPress = item => {
    this.props.navigation.navigate('RestaurantDirection', {
      latitude: item?.lat,
      longitude: item?.lng,
    });
  };

  renderitem = ({item, index}) => {
    return (
      <View style={{marginVertical: 2 * vh}}>
        <HomeCard
          item={item?.organisations}
          history={item}
          onClick={() => this.props.navigation.navigate('HistoryDetails')}
          viewmap={() => this.handleMapBtnPress(item?.organisations)}
          location={this.state.userLocation}
        />
        {index + 1 < this.state.home.response && (
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
              renderItem={this.renderitem}
            />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  // count: state.count,
  loading: state.GeneralReducer.softLoading,
});

const mapDispatchToProps = dispatch => {
  return {
    // explicitly forwarding arguments
    getRewardHistory: (data) => dispatch(getRewardHistory(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(History);
