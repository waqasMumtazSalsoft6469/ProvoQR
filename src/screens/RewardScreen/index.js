import React, {useMemo} from 'react';
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
import {getRewardList} from '../../Redux/Actions/otherActions';
import {imageUrl} from '../../Api/configs';
import EmptyComponent from '../../components/EmptyComponent';

class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectreward: true,
      reward: [],
      page: 1,
      totalPages: 1,
      refreshing: false,
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

      const response = await this.props.getRewardList(filters);
      //   console.log('response', response);
      this.setState({
        reward: response?.rewardList?.data,
      });

      let data = {
        refreshing: false,
        reward: response?.rewardList?.data,
        totalPages: response?.rewardList?.last_page,
      };

      if (filters.page > 1) {
        data = {
          ...data,
          reward: [...this.state.reward, ...response?.rewardList?.data],
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

  renderItem = ({item}) => {
    return (
      <TouchableHighlight
        onPress={() =>
          this.props.navigation.navigate('RewardDetail', {
            category: 'Redeem',
            reward_id: item?.id,
            status: item?.status,
          })
        }
        style={styles.imageContainer}>
        <Image
          source={{uri: imageUrl + item?.reward_image}}
          style={[styles.image]}
        />
      </TouchableHighlight>
    );
  };

  renderEmptyComponent = () => {
    return <EmptyComponent text="No Rewards to show." />;
  };

  renderFooter = () => {
    return <View></View>;
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={backgrounds.grayBackground}
          style={styles.imgbg}
          resizeMode="cover"
          imageStyle={styles.imageStyle}>
          <FlatList
            data={this.state.reward}
            keyExtractor={(_, index) => index}
            numColumns={2}
            contentContainerStyle={styles.contentContainerStyle}
            renderItem={this.renderItem}
            refreshing={this.state.refreshing}
            onRefresh={this.onRefresh}
            ListEmptyComponent={
              !this.state.refreshing && this.renderEmptyComponent
            }
            ListFooterComponent={this.state.refreshing && this.renderFooter}
            onEndReached={this.onEndReached}
          />
          {/* <MasonryList
            data={this.state.reward}
            keyExtractor={(_, index) => index}
            numColumns={2}
            contentContainerStyle={styles.contentContainerStyle}
            onPressImage={item =>
              this.props.navigation.navigate('RewardDetail', {
                category: item.category,
              })
            }
            // renderItem={this.renderItem}
            // renderItem={({item}) => {
            //   console.log("itemmmmm", item);
            // }}
            renderItem={({item}) => {
              console.log('item', item?.source);
              return (
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
                  <Image source={sampleimage?.reward1} style={[styles.image]} />
                </TouchableHighlight>
              );
            }}
          /> */}
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
  loading: state.GeneralReducer.softLoading,
});

const mapDispatchToProps = dispatch => {
  return {
    // explicitly forwarding arguments
    getRewardList: () => dispatch(getRewardList()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);
