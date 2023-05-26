import React from 'react';
import {ImageBackground, View, Image, FlatList, Linking} from 'react-native';
import {backgrounds, icons, sampleimage} from '../../assets/images';
import OutfitSemiBoldText from '../../components/Text/OutfitSemiBoldText';
import RewardCard from '../../components/RewardCard';
import styles from './styles';
import {vh, vw} from '../../Utils/Units';
import {getRestaurantRequest} from '../../Redux/Actions/otherActions';
import {connect} from 'react-redux';
import EmptyComponent from '../../components/EmptyComponent';

class RestaurantLogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectreward: true,
      logs: [],
      refreshing: false,
      page: 1,
      totalPages: 1,
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

      const response = await this.props.getRestaurantLogs(filters);
      //   console.log('response', response);
      this.setState({
        logs: response?.restaurantRequestLogs?.data,
      });

      let data = {
        refreshing: false,
        logs: response?.restaurantRequestLogs?.data,
        totalPages: response?.restaurantRequestLogs?.last_page,
      };

      if (filters.page > 1) {
        data = {
          ...data,
          logs: [...this.state.logs, ...response?.restaurantRequestLogs?.data],
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

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      this.getData();
    });
  }

  handleMapBtnPress = item => {
    console.log('req log item', item?.lat);
    // return
    const url = `https://www.google.com/maps/dir/?api=1&destination=${item?.lat},${item?.lng}&dir_action=navigate`;
    const supported = Linking.canOpenURL(url);
    if (supported) {
      Linking.openURL(url);
    } else {
      showToast(`Don't know how to open this URL: ${url}`);
    }
  };

  renderItem = ({item, index}) => {
    return (
      <RewardCard
        item={item}
        viewmap={
          () => this.handleMapBtnPress(item)

          // this.props.navigation.navigate('RestaurantDirection', {
          //   latitude: item?.lat,
          //   longitude: item?.lng,
          // })
        }
      />
    );
  };

  renderEmpty = () => {
    if (this.state.refreshing) {
      return null;
    }
    return (
      <EmptyComponent
        text="No restaurant logs to show"
        style={styles.emptyList}
      />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={backgrounds.grayBackground}
          style={styles.imgbg}
          resizeMode="cover"
          // imageStyle={styles.imgbg}
          imageStyle={{width: 100 * vw, height: 100 * vh}}
          >
          <View style={{alignItems: 'center', marginTop: vh}}>
            <OutfitSemiBoldText style={{fontSize: vh * 2.5}}>
              Restaurant Request Logs
            </OutfitSemiBoldText>
            <FlatList
              data={this.state.logs}
              style={{marginVertical: 2 * vh}}
              renderItem={this.renderItem}
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh}
              onEndReached={this.onEndReached}
              ListEmptyComponent={this.renderEmpty}
              showsVerticalScrollIndicator={false}
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
    getRestaurantLogs: data => dispatch(getRestaurantRequest(data)),
    // signup: data => dispatch(userSignup(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantLogs);
