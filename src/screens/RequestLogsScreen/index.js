import React from 'react';
import {ImageBackground, View, Image, FlatList} from 'react-native';
import {backgrounds, icons, sampleimage} from '../../assets/images';
import OutfitSemiBoldText from '../../components/Text/OutfitSemiBoldText';
import RewardCard from '../../components/RewardCard';
import styles from './styles';
import {vh} from '../../Utils/Units';
import {getRestaurantRequest} from '../../Redux/Actions/otherActions';
import {connect} from 'react-redux';

class RestaurantLogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectreward: true,
      logs: [],
    };
  }

  componentDidMount() {
    this.props.getRestaurantLogs().then(res => {
      console.log(res);
      // this.setState({logs: res?.restaurantRequestLogs});
    });
  }

  renderitem = ({item, index}) => {
    return (
      <RewardCard
        item={item}
        viewmap={() =>
          this.props.navigation.navigate('MapStack', {
            screen: 'ShowonMapScreen',
          })
        }
      />
    );
  };

  emptyList = () => {
    return (
      <View style={styles.emptyList}>
        <OutfitSemiBoldText style={styles.emptyText}>
          No Logs Available
        </OutfitSemiBoldText>
      </View>
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
              renderItem={this.renderitem}
              ListEmptyComponent={this.emptyList}
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
    getRestaurantLogs: () => dispatch(getRestaurantRequest()),
    // signup: data => dispatch(userSignup(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantLogs);
