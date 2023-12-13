import React from 'react';
import {
  ImageBackground,
  View,
  Image,
  ScrollView,
  Linking,
  FlatList,
} from 'react-native';
import {backgrounds, icons, sampleimage} from '../../assets/images';
import TouchableHOC from '../../components/Buttons/TouchableHOC';
import styles from './styles';
import {vh, vw} from '../../Utils/Units';
import OutfitRegularText from '../../components/Text/OutfitRegularText';
import OutfitLightText from '../../components/Text/OutfitLightText';
import Button from '../../components/Buttons/SimpleButton';
import DetailList from '../../components/DetailList';
import {getHistoryDetail} from '../../Redux/Actions/otherActions';
import {connect} from 'react-redux';
import {imageUrl} from '../../Api/configs';
import {showToast} from '../../Api/HelperFunction';
import OutfitSemiBoldText from '../../components/Text/OutfitSemiBoldText';
import OutfitMediumText from '../../components/Text/OutfitMediumText';
import moment from 'moment';

class HistoryDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: {},
      // cusines: [
      //   {
      //     name: 'Cuisine 01',
      //   },
      //   {
      //     name: 'Cuisine 02',
      //   },
      //   {
      //     name: 'Cuisine 03',
      //   },
      // ],
    };
  }

  getTintcolor = name => {
    if (name === 'Gold') {
      return '#F4CE0C';
    } else if (name === 'Silver') {
      return '#ADADAD';
    } else {
      return '#E9980F';
    }
  };

  getData = async () => {
    const id = this.props?.route?.params?.id;
    try {
      let data = {
        restaurant_id: id,
      };

      const response = await this.props.getHistoryDetail(data);

      console.log('response', response?.lootbox_amount);

      this.setState({
        response: response?.history,
      });
    } catch (error) {
      console.log('error', error);
    }
  };

  componentDidMount() {
    const name = this.props?.route?.params?.name;
    this.props?.navigation?.setOptions({
      title: name,
    });
    this.getData();
  }

  handleLootBoxPress = () => {
    this.props.navigation.navigate('LootBoxPaymentMethod', {
      id: this.state.response?.organisations?.id,
      provoCash: this.state.response?.provo_cash_price,
      lootBoxAmount: this.state.response?.lootbox_amount,
    });
  };

  handleMapPress = () => {
    // this.props.navigation.navigate('RestaurantDirection', {
    //   latitude: this.state.response?.organisations?.lat,
    //   longitude: this.state.response?.organisations?.lng,
    // });
    // const url = `https://www.google.com/maps/dir/?api=1&destination=${this.state.response?.organisations?.lat},${this.state.response?.organisations?.lng}&dir_action=navigate`;
    const url = `https://www.google.com/maps?q=${this.state.response?.organisations?.lat},${this.state.response?.organisations?.lng}`;

    const supported = Linking.canOpenURL(url);
    if (supported) {
      Linking.openURL(url);
    } else {
      showToast(`Don't know how to open this URL: ${url}`);
    }
  };

  renderHistoryItem = ({item}) => {
    console.log(
      'history item',
      moment(item?.redemption_time).utc().format('YYYY-MM-DD hh:mm:ss'),
    );
    return (
      <View style={{width: vw * 90, marginBottom: vh * 3}}>
        <Image
          source={
            item?.my_win_lootbox?.menu?.image
              ? {uri: imageUrl + item?.my_win_lootbox?.menu?.image}
              : sampleimage.placeholder
            // sampleimage.placeholder
          }
          style={styles.cardimg}
        />
        <View style={{paddingHorizontal: 6 * vw}}>
          <View style={styles.rewardHeadContainer}>
            <Image
              source={icons.box}
              style={[
                styles.tierImage,
                {
                  tintColor: this.getTintcolor(item?.my_win_lootbox?.tier_name),
                },
              ]}
            />
            <OutfitLightText style={styles.rewtext}>
              {item?.my_win_lootbox?.tier_name}
            </OutfitLightText>
          </View>
          <OutfitSemiBoldText style={styles.midHeadingStyle}>
            Reward Info
          </OutfitSemiBoldText>
          <OutfitMediumText style={styles.midTextStyle}>
            {item?.my_win_lootbox?.menu?.name}
          </OutfitMediumText>
          <OutfitMediumText style={styles.rewardDesHeadingText}>
            Description
          </OutfitMediumText>
          <OutfitMediumText style={styles.midTextStyle}>
            {item?.my_win_lootbox?.menu?.detail}
          </OutfitMediumText>
          <OutfitMediumText style={styles.rewardDesHeadingText}>
            Reward Status
          </OutfitMediumText>
          <OutfitMediumText style={styles.midTextStyle}>
            {item?.status}
          </OutfitMediumText>
          <OutfitMediumText style={styles.rewardDesHeadingText}>
            Reward {item?.status === 'Redeemed' ? 'Redemption' : 'Expiration'}{' '}
            Date & Time
          </OutfitMediumText>
          <OutfitMediumText style={styles.midTextStyle}>
            {moment(
              item?.status === 'Redeemed'
                ? item?.redemption_time
                : item?.reward_expire_date,
              'DD-MM-YYYY HH:mm:ss',
            ).format('MM/DD/YYYY HH:mm A')}
          </OutfitMediumText>
        </View>
        {/* {item?.status === 'Redeemed' ? (
          <>
            <OutfitMediumText style={styles.rewardDesHeadingText}>
              Reward Status
            </OutfitMediumText>
            <OutfitMediumText style={styles.midTextStyle}>
              {item?.status}
            </OutfitMediumText>
            <OutfitMediumText style={styles.rewardDesHeadingText}>
              Reward Redemption Date & Time
            </OutfitMediumText>
            <OutfitMediumText style={styles.midTextStyle}>
              {moment(
                item?.redemption_time,
                "YYYY-MM-DD'T'HH:mm:ss.SSSSSS'Z'",
              ).format('DD-MM-YYYY HH:mm:ss')}
            </OutfitMediumText>
          </>
        ) : item?.status === 'Available' ? (
          <>
            <OutfitMediumText style={styles.rewardDesHeadingText}>
              Reward Status
            </OutfitMediumText>
            <OutfitMediumText style={styles.midTextStyle}>
              {item?.status}
            </OutfitMediumText>
            <OutfitMediumText style={styles.rewardDesHeadingText}>
              Reward Expiration Date & Time
            </OutfitMediumText>
            <OutfitMediumText style={styles.midTextStyle}>
              {moment(
                item?.reward_expire_date,
                "YYYY-MM-DD'T'HH:mm:ss.SSSSSS'Z'",
              ).format('DD-MM-YYYY HH:mm:ss')}
            </OutfitMediumText>
          </>
        ) : (
          <>
            <OutfitMediumText style={styles.rewardDesHeadingText}>
              Reward Expiration Date & Time
            </OutfitMediumText>
            <OutfitMediumText style={styles.midTextStyle}>
              {moment(
                item?.reward_expire_date,
                "YYYY-MM-DD'T'HH:mm:ss.SSSSSS'Z'",
              ).format('DD-MM-YYYY HH:mm:ss')}
            </OutfitMediumText>
          </>
        )} */}
      </View>
    );
  };

  renderRewardHistory = () => {
    return (
      <View style={{alignItems: 'center', marginTop: vh * 3}}>
        <OutfitSemiBoldText style={styles.rewardHeadingText}>
          Prize
        </OutfitSemiBoldText>
        <FlatList
          data={this.state.response?.organisations?.reward_histories}
          renderItem={this.renderHistoryItem}
        />
      </View>
    );
  };

  // rendercuisines = () => {
  //   return (
  //     <View
  //       style={{
  //         flexDirection: 'row',
  //         alignItems: 'center',
  //         marginTop: 1.5 * vh,
  //       }}>
  //       {this.state.cusines.map((item, index) => {
  //         return (
  //           <OutfitRegularText style={styles.cus}>
  //             {item?.name},
  //           </OutfitRegularText>
  //         );
  //       })}
  //     </View>
  //   );
  // };

  renderBadge = val => {
    if (val === 'Gold') return icons.gold;
    else if (val === 'Silver') return icons.silver;
    else return icons.bronze;
  };

  renderRatings = () => {
    let ratings = [
      {
        rate: `Total Spending: $${
          this.state.response?.totalspending
            ? this.state.response?.totalspending
            : 0
        }`,
      },
      {
        rate: `No of Lootbox : ${
          this.state.response?.no_of_lootbox
            ? this.state.response?.no_of_lootbox
            : 0
        }`,
      },
      {
        rate: `No of Prize : ${
          this.state.response?.no_of_rewards
            ? this.state.response?.no_of_rewards
            : 0
        }`,
      },
    ];
    return (
      <View style={styles.lowerContainer}>
        {/* <View
          style={{
            justifyContent: 'space-between',
            width: 42 * vw,
            height: vh * 10,
          }}>
          <OutfitSemiBoldText>Last Scan</OutfitSemiBoldText>
          <View style={styles.row}>
            <Image source={icons.calender} style={styles.icon} />
            <OutfitRegularText>02.02.2022</OutfitRegularText>
          </View>
          <View style={styles.row}>
            <Image source={icons.clock} style={styles.icon} />
            <OutfitRegularText>09:00 pm</OutfitRegularText>
          </View>
        </View> */}

        {ratings.map((item, index) => {
          return (
            <DetailList
              item={item}
              index={index}
              style={{marginVertical: vh * 1}}
            />
          );
        })}
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
          imageStyle={{width: 100 * vw, height: 100 * vh}}>
          <ScrollView
            contentContainerStyle={{paddingBottom: vh * 5}}
            showsVerticalScrollIndicator={false}>
            <View
              style={{
                marginHorizontal: vw * 5,
                alignItems: 'center',
                marginTop: 3 * vh,
                borderRadius: vh * 3,
              }}>
              <Image
                source={
                  this.state.response?.organisations?.image
                    ? {
                        uri:
                          imageUrl + this.state.response?.organisations?.image,
                      }
                    : sampleimage.placeholder
                }
                style={styles.cardimg}
              />
              {/* <Image
                source={this.renderBadge(this.state.response.badge)}
                style={styles.badge}
              /> */}
            </View>
            <View style={{paddingHorizontal: 6 * vw}}>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 2 * vh,
                  justifyContent: 'space-between',
                }}>
                <OutfitRegularText style={styles.recomend}>
                  About Restaurant
                </OutfitRegularText>
                <View style={styles.menuContainer}>
                  <TouchableHOC onPress={this.handleMapPress}>
                    <OutfitRegularText style={styles.buttonText}>
                      View on Maps
                    </OutfitRegularText>
                  </TouchableHOC>
                </View>
              </View>

              <OutfitLightText style={styles.rewtext}>
                {this.state.response?.organisations?.organ_profiles?.about}
              </OutfitLightText>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View style={styles.catbox}>
                  <Image
                    source={{
                      uri:
                        imageUrl +
                        this.state.response?.organisations?.organ_profiles
                          ?.categories?.image,
                    }}
                    style={styles.catIcon}
                  />
                  <OutfitRegularText style={styles.catText}>
                    {'  '}
                    {
                      this.state.response?.organisations?.organ_profiles
                        ?.categories?.name
                    }
                  </OutfitRegularText>
                </View>
                {/* <Counter /> */}
              </View>
              {/* {this.rendercuisines()} */}
              {/* {this.renderRatings()} */}
            </View>
            {this.renderRewardHistory()}
            {/* <Dash
              style={{
                width: 100 * vw,
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: vh * 3,
                marginBottom: vh * -2,
              }}
              dashColor="#E9E9E9"
              dashLength={0}
              dashGap={1 * vh}
              dashStyle={{width: 2 * vw}}></Dash> */}
            {/* <View
              style={{
                paddingHorizontal: 5 * vw,
                marginTop: 5 * vh,
                justifyContent: 'space-between',
              }}>
              <OutfitSemiBoldText style={styles.recomend}>
                Happy Hours Deals
              </OutfitSemiBoldText>
              <HomeCarouselConmponent />
            </View> */}
            {/* {!this.state?.response?.organisations?.is_lootbox_purchase && (
              <View style={{alignItems: 'center'}}>
                <Button
                  title="LOOT BOX"
                  onPress={this.handleLootBoxPress}
                  btnContainer={{marginTop: 5 * vh}}
                />
              </View>
            )} */}
          </ScrollView>
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
    getHistoryDetail: data => dispatch(getHistoryDetail(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HistoryDetail);
