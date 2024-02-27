import React, {useMemo} from 'react';
import {
  ImageBackground,
  View,
  Image,
  FlatList,
  TouchableHighlight,
  TouchableOpacity,
  Dimensions,
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
import happyHour from '../../assets/images/sampleImages/happyHour.png';
import MenuScreen from './ImagesGrid';

const windowWidth = Dimensions.get('window').width;

class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectreward: true,
      reward: [],
      page: 1,
      totalPages: 1,
      refreshing: false,
      rewardMenuList: [],
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

  makeArr = () => {
    const originalArray = [
      {
        id: 1,
        source:
          'https://luehangs.site/pic-chat-app-images/beautiful-blond-blonde-hair-478544.jpg',
      },
      {
        id: 2,
        source:
          'https://luehangs.site/pic-chat-app-images/beautiful-beautiful-women-beauty-40901.jpg',
      },
      {
        id: 3,
        source:
          'https://luehangs.site/pic-chat-app-images/beautiful-blond-fishnet-stockings-48134.jpg',
      },
      {
        id: 4,
        source:
          'https://luehangs.site/pic-chat-app-images/beautiful-blond-fishnet-stockings-48134.jpg',
      },
      {
        id: 5,
        source:
          'https://luehangs.site/pic-chat-app-images/beautiful-beautiful-woman-beauty-9763.jpg',
      },
      {
        id: 6,
        source:
          'https://luehangs.site/pic-chat-app-images/attractive-balance-beautiful-186263.jpg',
      },
      {
        id: 7,
        source:
          'https://luehangs.site/pic-chat-app-images/beautiful-blond-fishnet-stockings-48134.jpg',
      },
      {
        id: 8,
        source:
          'https://luehangs.site/pic-chat-app-images/beautiful-beautiful-woman-beauty-9763.jpg',
      },
      {
        id: 9,
        source:
          'https://luehangs.site/pic-chat-app-images/attractive-balance-beautiful-186263.jpg',
      },
      // Add more images here...
    ];

    // Initialize an array to hold the resulting "groupArray"
    const groupArray = [];
    // Set the maximum number of objects in each "data" sub-array
    const maxObjectsPerData = 6;

    // Iterate through the original array and split it into "data" sub-arrays
    for (let i = 0; i < originalArray.length; i += maxObjectsPerData) {
      const subArray = originalArray.slice(i, i + maxObjectsPerData);
      groupArray.push(subArray);
    }
    this.setState({rewardMenuList: groupArray});
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
      // console.log('reward response new 11 11', response?.rewardList?.data);
      // this.setState({
      //   reward: response?.rewardList?.data,
      // });

      const groupArray = [];
      // Set the maximum number of objects in each "data" sub-array
      const maxObjectsPerData = 6;

      // Iterate through the original array and split it into "data" sub-arrays
      for (
        let i = 0;
        i < response?.rewardList?.data?.length;
        i += maxObjectsPerData
      ) {
        const subArray = response?.rewardList?.data?.slice(
          i,
          i + maxObjectsPerData,
        );
        // groupArray.push({data: subArray});
        groupArray.push(subArray);
      }
      // console.log(
      //   'groupArray ***>>>>>>> Original Data',
      //   JSON.stringify(groupArray),
      // );
      // this.setState({rewardMenuList: groupArray});
      this.setState({reward: groupArray});

      let data = {
        refreshing: false,
        reward: groupArray,
        totalPages: response?.rewardList?.last_page,
      };

      if (filters.page > 1) {
        data = {
          ...data,
          reward: [...this.state.reward, ...groupArray],
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
    // this.makeArr();
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      this.getData();
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
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
            Prize
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

  renderItem = ({item, index}) => {
    return (
      <View>
        <TouchableHighlight
          onPress={() =>
            this.props.navigation.navigate('GiftStack', {
              screen: 'RewardDetail',
              params: {
                category: 'Redeem',
                reward_id: item?.id,
                status: item?.status,
                restaurantName: item?.organisations?.name,
              },
            })
          }
          style={styles.imageContainer}
          // style={
          //   index % 6 < 3
          //     ? styles.bigImageContainer
          //     : styles.smallImageContainer
          // }
        >
          <Image
            // source={happyHour}
            source={
              item?.my_win_lootbox?.menu?.image
                ? {uri: imageUrl + item?.my_win_lootbox?.menu?.image}
                : sampleimage.noImage
            }
            style={[styles.image]}
            //style={index % 6 < 3 ? styles.smallImage : styles.bigImage}
          />
        </TouchableHighlight>

        <Image
          source={
            item?.organisations?.image
              ? {uri: imageUrl + item?.organisations?.logo}
              : icons.restaurantDummyIcon
          }
          style={styles.resLogoStyle}
        />
      </View>
    );
  };

  renderEmptyComponent = () => {
    return <EmptyComponent text="No Rewards to show." />;
  };

  renderFooter = () => {
    return <View></View>;
  };

  render() {
    const dummyData = [
      {
        id: 1,
        name: 'Item 1',
        source: happyHour,
      },
      {
        id: 2,
        name: 'Item 2',
        source: happyHour,
      },
      {
        id: 3,
        name: 'Item 3',
        source: happyHour,
      },
      {
        id: 4,
        name: 'Item 4',
        source: happyHour,
      },
    ];

    return (
      <View style={styles.container}>
        <ImageBackground
          source={backgrounds.grayBackground}
          style={styles.imgbg}
          resizeMode="cover"
          imageStyle={styles.imageStyle}>
          <MenuScreen
            originalData={this.state.reward}
            onRefresh={this.onRefresh}
            refreshing={this.state.refreshing}
            renderEmptyComponent={this.renderEmptyComponent}
            renderFooter={this.renderFooter}
            onEndReached={this.onEndReached}
          />
          {/* <FlatList
            data={this.state.reward}
            // data={dummyData}
            keyExtractor={item => item?.id}
            numColumns={3}
            contentContainerStyle={styles.contentContainerStyle}
            renderItem={this.renderItem}
            refreshing={this.state.refreshing}
            onRefresh={this.onRefresh}
            ListEmptyComponent={
              !this.state.refreshing && this.renderEmptyComponent
            }
            ListFooterComponent={this.state.refreshing && this.renderFooter}
            onEndReached={this.onEndReached}
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
