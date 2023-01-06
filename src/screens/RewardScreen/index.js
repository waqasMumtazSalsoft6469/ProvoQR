import React from 'react';
import {
  ImageBackground,
  View,
  Image,
  FlatList,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import {backgrounds, icons, sampleimage} from '../../assets/images';
import TouchableHOC from '../../components/Buttons/TouchableHOC';
import RubikRegular from '../../components/Text/RubikRegular';
import ThemeColors from '../../Utils/ThemeColors';
import reward1 from '../../assets/images/sampleImages/reward1.png';
import reward2 from '../../assets/images/sampleImages/reward2.png';
import reward3 from '../../assets/images/sampleImages/reward3.png';

import RewardCard from '../../components/RewardCard';
import PhotoGrid from 'react-native-thumbnail-grid';
import styles from './styles';
import {vh, vw} from '../../Utils/Units';
import OutfitRegularText from '../../components/Text/OutfitRegularText';
import {ScrollView} from 'react-native-gesture-handler';
import MasonryList from 'react-native-masonry-list';
import {connect} from 'react-redux';
import {
  getRewardList
} from '../../Redux/Actions/otherActions';

class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectreward: true,
      reward: [],
      urls: [
        reward1,
        reward2,
        // reward3,
        // reward1,
        // reward2,
        // reward3,
        // reward1,
        // reward2,
        // reward3,
        // reward1,
        // reward2,
        // reward3,
      ],
    };
  }
  componentDidMount() {
    this.props.getRewardList().then(res => {
      console.log("res", res);
      this.setState({
        reward: res?.rewardList,
      });
    });
  }
  renderbuttons = () => {
    return (
      <View style={styles.kgs}>
        <TouchableHOC
          style={
            this.state.selectreward == true
              ? styles.pounds
              : styles.notselectview
          }
          onPress={() =>
            this.setState({
              selectreward: true,
            })
          }>
          <RubikRegular
            style={
              this.state.selectreward == true ? styles.poundtext : styles.select
            }>
            Rewards
          </RubikRegular>
        </TouchableHOC>
        <TouchableHOC
          onPress={() =>
            this.setState({
              selectreward: false,
            })
          }
          style={
            this.state.selectreward == false
              ? styles.pounds
              : styles.notselectview
          }>
          <RubikRegular
            style={
              this.state.selectreward == false
                ? styles.poundtext
                : styles.select
            }>
            Redeemed
          </RubikRegular>
        </TouchableHOC>
      </View>
    );
  };

  renderredeemitem = ({item, index}) => {
    return (
      <View style={{opacity: 0.4}}>
        <RewardCard item={item} />
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
          <MasonryList
            data={this.state.reward}
            numColumns={2}
            contentContainerStyle={styles.contentContainerStyle}
            // onPressImage={item =>
            //   this.props.navigation.navigate('RewardDetail', {
            //     category: item.category,
            //   })
            // }
            renderItem={({item}) => {
              console.log("item", item);
              <TouchableHighlight
                // underlayColor={'#000e'}
                onPress={() =>
                  this.props.navigation.navigate('RewardDetail', {
                    category: 'Redeem',
                  })
                }
                style={[
                  styles.imageContainer,
                  item.height && {
                    height: item.height,
                  },
                ]}>
                <Image source={item.image} style={[styles.image]} />
              </TouchableHighlight>;
            }}
          />
          {/* <PhotoGrid
              source={this.state.urls}
              ratio={0.5}
              height={vh * 80}
              onPressImage={source =>
                this.props.navigation.navigate('RewardDetail', {
                  category: 'Redeem',
                })
              }></PhotoGrid> */}
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
    getRewardList: () => dispatch(getRewardList()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);
