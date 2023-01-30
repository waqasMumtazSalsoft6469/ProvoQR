import React from 'react';
import {ImageBackground, View, Image, FlatList} from 'react-native';
import {backgrounds, icons, sampleimage} from '../../assets/images';
import OutfitSemiBoldText from '../../components/Text/OutfitSemiBoldText';
import RewardCard from '../../components/RewardCard';
import styles from './styles';
import {vh} from '../../Utils/Units';
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
    this.getData();
  }

  renderItem = ({item, index}) => {
    return (
      <RewardCard
        item={item}
        viewmap={() =>
          this.props.navigation.navigate('RestaurantDirection', {
            latitude: item?.lat,
            longitude: item?.lng,
          })
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
          imageStyle={styles.imgbg}>
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
