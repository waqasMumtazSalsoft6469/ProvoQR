import React from 'react';
import {
  ImageBackground,
  View,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  BackHandler,
  Text,
} from 'react-native';
import {backgrounds, icons, sampleimage} from '../../assets/images';

import TwoAlertModal from '../../components/Popups/TwoAlert';
import Button from '../../components/Buttons/SimpleButton';
import styles from './styles';
import {vh, vw} from '../../Utils/Units';
import OutfitSemiBoldText from '../../components/Text/OutfitSemiBoldText';
import OutfitLightText from '../../components/Text/OutfitLightText';
import OutfitRegularText from '../../components/Text/OutfitRegularText';
import Dash from 'react-native-dash';
import HomeCarouselConmponent from '../../components/HomeCarouselComponent';
import {connect} from 'react-redux';
import {getRewardDetail, redeemReward} from '../../Redux/Actions/otherActions';
import {showToast} from '../../Api/HelperFunction';
import {StackActions} from '@react-navigation/native';
import {imageUrl} from '../../Api/configs';
import AlertModal from '../../components/Popups/alertModal';
import ThemeColors from '../../Utils/ThemeColors';
import moment from 'moment';
import OutfitMediumText from '../../components/Text/OutfitMediumText';
import {
  showHeaderLeft,
  showHeaderRight,
} from '../../Navigation/NavigationOptions';
import Carousel, {Pagination} from 'react-native-snap-carousel';

class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: {},
      visibleModal: false,
      successModal: false,
      redeemResponse: {},
      timeLeft: '',
      activeSlide: 0,
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
      // ratings: [
      //   {
      //     rate: '102',
      //   },
      //   {
      //     rate: '150',
      //   },
      //   {
      //     rate: '200',
      //   },
      // ],
    };
  }

  // Declare this.interval as a class property
  interval;

  startInterval = () => {
    this.interval = setInterval(() => {
      // console.log('exDate', this.state?.details?.reward_expire_date);
      const diff = moment(
        this.state?.details?.reward_expire_date,
        "YYYY-MM-DD'T'HH:mm:ss.SSSSSS'Z'",
      ).diff(moment());
      // console.log('diff', diff);
      const duration = moment.duration(diff);
      // console.log('duration', duration);
      const time =
        Math.floor(duration.asHours()) + moment.utc(diff).format(':mm:ss');
      // console.log('minute', moment.utc(diff).format(':mm'));
      // console.log('split', time.split(':'));
      this.setState({timeLeft: time});
    }, 1000);
  };

  getTintcolor = name => {
    if (name === 'Gold') {
      return '#F4CE0C';
    } else if (name === 'Silver') {
      return '#ADADAD';
    } else {
      return '#E9980F';
    }
  };

  handleSuccessPress = () => {
    this.setState({
      successModal: false,
    });
    // showToast(res?.message);
    this.props.navigation.dispatch(StackActions.popToTop());
    this.props.navigation.navigate('HomeScreen');
  };

  handlePopupPress = () => {
    const id = this.props?.route?.params?.reward_id;
    const data = {
      reward_id: id,
    };
    console.log('For Redeem Data **>>>>', data);
    this.props.redeemReward(data).then(res => {
      console.log('Response of Redeem Reward <<<<>>>>>', res);
      if (res?.success) {
        clearInterval(this.interval); // when Redeem success the clear interval method
        this.setState({visibleModal: false});

        // this.props.navigation?.navigate('RedeemRewardScreen', {
        this.props.navigation.navigate('GiftStack', {
          screen: 'RedeemRewardScreen',
          params: {
            code: res?.code,
            restaurant: this.state.details,
          },
        });

        // this.setState({
        //   visibleModal: false,
        //   redeemResponse: res,
        //   successModal: true,
        // });
      }
    });
  };

  // handleBackPress = () => {
  //   // this.props.navigation.dispatch(StackActions.popToTop());

  //   // if (!this.props.navigation.isFocused()) {
  //   //   // The screen is not focused, so don't do anything
  //   //   return false;
  //   // }

  //   this.props.navigation.navigate('RewardScreen');
  //   // return true;
  // };

  componentDidMount() {
    const id = this.props.route.params.reward_id;
    const name = this.props?.route.params.restaurantName;

    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      this.props?.navigation?.setOptions({
        title: name,
        // headerLeft: () => showHeaderLeft(this.props, this.handleBackPress),
      });
      // BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    });

    // this._unsubBlur = this.props.navigation.addListener('blur', () => {
    //   BackHandler.removeEventListener(
    //     'hardwareBackPress',
    //     this.handleBackPress,
    //   );
    // });

    const data = {
      reward_id: id,
    };

    // console.log('Reward ID **>>>', data);

    this.props.getRewardDetail(data).then(res => {
      // alert('alert');
      console.log(
        'getRewardDetail res new **>> new',
        JSON.stringify(res?.rewardDetail),
      );
      this.setState({
        details: res?.rewardDetail,
      });
    });

    this.startInterval();

    // const interval = setInterval(() => {
    //   // console.log('exDate', this.state?.details?.reward_expire_date);
    //   const diff = moment(
    //     this.state?.details?.reward_expire_date,
    //     "YYYY-MM-DD'T'HH:mm:ss.SSSSSS'Z'",
    //   ).diff(moment());
    //   // console.log('diff', diff);
    //   const duration = moment.duration(diff);
    //   // console.log('duration', duration);
    //   const time =
    //     Math.floor(duration.asHours()) + moment.utc(diff).format(':mm:ss');
    //   // console.log('minute', moment.utc(diff).format(':mm'));
    //   // console.log('split', time.split(':'));
    //   this.setState({timeLeft: time});
    // }, 1000);
    // return () => clearInterval(interval);
  }

  componentWillUnmount() {
    // alert('Component Un Mount ');
    clearInterval(this.interval);
  }

  render() {
    // console.log(
    //   'time',
    //   moment(
    //     '2023-05-13 08:15:42.000000',
    //     "YYYY-MM-DD'T'HH:mm:ss.SSSSSS'Z'",
    //   ).diff(moment(), 'minutes'),
    // );
    console.log('Reward Detail Data **>>', this.state?.details?.my_win_lootbox);

    return (
      <View style={styles.container}>
        <ImageBackground
          source={backgrounds.grayBackground}
          style={styles.imgbg}
          resizeMode="cover"
          imageStyle={{width: 100 * vw, height: 90 * vh}}>
          <ScrollView
            contentContainerStyle={{flexGrow: 1, paddingBottom: vh * 10}}>
            {/* <Carousel
              data={this.state.details?.my_win_lootbox?.menu}
              renderItem={({item}) => {
                return (
                  <>
                    <View
                      style={{
                        alignItems: 'center',
                        marginTop: 3 * vh,
                        // borderRadius: vh * 2,
                        borderTopLeftRadius: vh * 2,
                        borderTopRightRadius: vh * 2,
                      }}>
                      <Image
                        source={
                          item?.image
                            ? {
                                uri: imageUrl + item?.image,
                              }
                            : sampleimage.placeholder
                        }
                        style={styles.cardimg}
                      />
                    </View>
                    <View
                      style={{
                        marginLeft: 20,
                      }}>
                      <OutfitSemiBoldText style={styles.midHeadingStyle}>
                        Menu Info
                      </OutfitSemiBoldText>
                      <OutfitMediumText style={styles.midTextStyle}>
                        {item?.name}
                      </OutfitMediumText>
                      <OutfitMediumText style={styles.rewardDesHeadingText}>
                        Description
                      </OutfitMediumText>
                      <OutfitMediumText style={styles.midTextStyle}>
                        {item?.detail}
                      </OutfitMediumText>
                    </View>
                  </>
                );
              }}
              sliderWidth={vw * 100}
              itemWidth={vw * 100}
              pagingEnabled={true}
              // windowSize={1}
              onSnapToItem={index => this.setState({activeSlide: index})}
              initialScrollIndex={this.state.activeSlide}
            />
            <Pagination
              dotsLength={this.state.details?.my_win_lootbox?.menu.length}
              activeDotIndex={this.state.activeSlide}
              containerStyle={{top: 1 * vh}}
              dotStyle={styles.dot}
              inactiveDotStyle={styles.inactiveDot}
              dotContainerStyle={{
                marginRight: vw * 0,
                marginHorizontal: vh * 0.5,
              }}
              inactiveDotOpacity={1}
              activeOpacity={1}
              inactiveDotScale={1}
            /> */}

            <View
              style={{
                alignItems: 'center',
                marginTop: 5 * vh,
                borderRadius: vh * 2,
              }}>
              <Image
                source={
                  this.state.details?.my_win_lootbox?.menu[0]?.image
                    ? {
                        uri:
                          imageUrl +
                          this.state.details?.my_win_lootbox?.menu[0]?.image,
                      }
                    : sampleimage.placeholder
                }
                style={styles.cardimg}
              />
            </View>

            <View
              style={{
                paddingHorizontal: 6 * vw,
                marginVertical: 6 * vh,
              }}>
              <OutfitSemiBoldText style={styles.midHeadingStyle}>
                Reward Info
              </OutfitSemiBoldText>
              <View style={styles.rewardHeadContainer}>
                <Image
                  source={icons.box}
                  style={[
                    styles.tierImage,
                    {
                      tintColor: this.getTintcolor(
                        this.state.details?.my_win_lootbox?.tier_name,
                      ),
                    },
                  ]}
                />
                <OutfitLightText style={styles.rewtext}>
                  {this.state.details?.my_win_lootbox?.tier_name}
                </OutfitLightText>
              </View>
              <OutfitMediumText style={styles.midTextStyle}>
                {this.state.details?.my_win_lootbox?.menu[0]?.name}
              </OutfitMediumText>
              <OutfitMediumText style={styles.rewardDesHeadingText}>
                Description
              </OutfitMediumText>
              <OutfitMediumText style={styles.midTextStyle}>
                {this.state.details?.my_win_lootbox?.menu[0]?.detail}
              </OutfitMediumText>
              <OutfitMediumText style={styles.rewardDesHeadingText}>
                Reward Expiration Date & Time
              </OutfitMediumText>
              <OutfitMediumText style={styles.midTextStyle}>
                {moment(this.state.details?.reward_expire_date).format(
                  'MM/DD/YYYY HH:mm A',
                )}
              </OutfitMediumText>
            </View>
            {/* <Dash
              style={{
                width: 100 * vw,
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: vh * 2,
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
            <View style={{alignItems: 'center', marginTop: vh * 2}}>
              {this.props.route?.params?.status === 'Redeemed' ? (
                <Button
                  title="REDEEMED"
                  //   onPress={() => this.TwoAlert.show()}
                  labelStyle={styles.label}
                  btnContainer={styles.butCon}
                  disabled
                />
              ) : (
                <Button
                  title={
                    (this.props.route?.params?.status === 'Available'
                      ? 'REDEEM REWARD'
                      : 'Expired') +
                    ' ' +
                    (this.props.route?.params?.status === 'Available' &&
                      `(${this.state.timeLeft} LEFT)`)
                  }
                  onPress={() => this.setState({visibleModal: true})}
                  btnContainer={{marginTop: vh, width: vw * 80}}
                />
              )}
            </View>
          </ScrollView>
        </ImageBackground>
        <TwoAlertModal
          visible={this.state.visibleModal}
          setVisible={() => this.setState({visibleModal: false})}
          title="Are you ready?"
          time={moment(
            this.state.details?.reward_expire_date,
            "YYYY-MM-DD'T'HH:mm:ss.SSSSSS'Z'",
          ).diff(moment(), 'seconds')}
          description={'Are you sure you want to redeem this reward?'}
          leftButtonTitle="YES"
          onLeftButtonPress={this.handlePopupPress}
          rightButtonTitle="NO"
          onRightButtonPress={() => this.setState({visibleModal: false})}
          popupContainer={{paddingVertical: 0}}
        />
        <AlertModal
          visible={this.state.successModal}
          setVisible={() => this.setState({successModal: false})}
          icon={icons.popupTick}
          title="Congratulations!"
          description={
            this.state.redeemResponse?.message + ' ' + 'Your code is '
          }
          code={this.state.redeemResponse?.code}
          buttonTitle="OK"
          onButtonPress={this.handleSuccessPress}
        />
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
    getRewardDetail: data => dispatch(getRewardDetail(data)),
    redeemReward: data => dispatch(redeemReward(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);
