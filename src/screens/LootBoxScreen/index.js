import React from 'react';
import {ImageBackground, View, Image, Animated, Easing} from 'react-native';
import {backgrounds, icons, sampleimage} from '../../assets/images';
import {vh, vw} from '../../Utils/Units';
import celebAnim from './celebAnim.json';

import LottieView from 'lottie-react-native';
import styles from './styles';
import Button from '../../components/Buttons/SimpleButton';
import ThemeColors from '../../Utils/ThemeColors';
import TouchableHOC from '../../components/Buttons/TouchableHOC';
import OutfitLightText from '../../components/Text/OutfitLightText';
import OutfitRegularText from '../../components/Text/OutfitRegularText';
import {connect, dispatch} from 'react-redux';
import {lootBoxDraw} from '../../Redux/Actions/otherActions';
import {StackActions} from '@react-navigation/native';
import moment from 'moment';
import OutfitSemiBoldText from '../../components/Text/OutfitSemiBoldText';
import OutfitMediumText from '../../components/Text/OutfitMediumText';
import CountDownTimer from '../../components/CountdownTimer';
class LootBoxScreen extends React.Component {
  constructor(props) {
    super(props);
    this.progress = new Animated.Value(0);
    this.textAnim = new Animated.Value(1);
    this.state = {
      success: this.props.route.params.success
        ? this.props.route.params.success
        : 0,
      rewardDetail: {},
    };
  }

  handleRewardBtnPress = () => {
    // this.props.navigation.dispatch(StackActions.popToTop());
    // // this.props.navigation.popToTop()
    this.props.navigation.navigate('GiftStack', {
      screen: 'RewardDetail',
      params: {
        reward_id: this.state?.rewardDetail?.rewards?.id,
        status: 'Available',
      },
    });
  };

  handleTryAgainPress = () => {
    this.props.navigation.navigate('HomeScreen');
  };

  handleLootBoxDraw = () => {
    const id = this.props.route.params.restaurantId;
    const data = {
      restaurant_id: id,
    };
    this.props.lootBoxDraw(data).then(res => {
      if (res?.message === 'Win') {
        console.log('draw res', res);
        this.setState({rewardDetail: res});
        this.setState({success: 1});
      } else {
        this.setState({success: 2});
      }
    });
  };

  componentWillUnmount() {
    if (this.state.success == 1) {
      this._startAnim();
    }
  }
  _startAnim = () => {
    this.progress.setValue(0);

    Animated.timing(this.progress, {
      toValue: 0.5,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(this._startAnim);
  };

  renderimage = () => {
    if (this.state.success == 0) {
      return sampleimage.qrsuccess;
    } else if (this.state.success == 1) {
      return sampleimage.qrexpire;
    } else {
      return sampleimage.qrerror;
    }
  };
  rendertitle = () => {
    if (this.state.success == 0) {
      return 'Congratulation';
    } else if (this.state.success == 1) {
      return 'Expire Code';
    } else {
      return 'Try Again';
    }
  };

  getText = () => {
    if (this.state.success == 0) {
      return (
        <>
          <Image source={sampleimage.closeBox} style={styles.boxImage} />
          <Button
            title="TAP TO OPEN"
            onPress={this.handleLootBoxDraw}
            btnContainer={{borderColor: ThemeColors.white, width: vw * 40}}
            labelStyle={{color: ThemeColors.white}}
          />
        </>
      );
    } else if (this.state.success == 1) {
      return (
        <>
          <Image source={sampleimage.openBox} style={styles.openBox} />
          <CountDownTimer
            time={moment(
              this.state.rewardDetail?.rewards?.reward_expire_date,
              "YYYY-MM-DD'T'HH:mm:ss.SSSSSS'Z'",
            ).diff(moment(), 'seconds')}
            timerBgStyle={styles.boxStyle}
            textStyle={styles.timeStyle}
            dotStyle={styles.dotStyle}
          />
          <OutfitSemiBoldText style={styles.congText}>Hurray!</OutfitSemiBoldText>
          <OutfitRegularText style={styles.whiteText}>
            You have won a family meal
          </OutfitRegularText>
          {/* <Image source={icons.voucher} style={styles.voucherIcon} /> */}
          {/* <OutfitLightText
            style={{
              color: ThemeColors.white,
              textAlign: 'center',
              width: vw * 70,
            }}>
            Hey ! Thanks for scanning the code. Your reward can be redeemed from
            the rewards library !
          </OutfitLightText> */}
          <OutfitSemiBoldText style={styles.headingText}>
            Reward Info
          </OutfitSemiBoldText>
          <OutfitMediumText style={styles.rewardText}>
            {this.state?.rewardDetail?.restaurant?.name}
          </OutfitMediumText>
          <OutfitMediumText style={styles.rewardText}>
            {this.state?.rewardDetail?.restaurant?.address}
          </OutfitMediumText>
          <Button
            title="OK"
            onPress={this.handleRewardBtnPress}
            btnContainer={{
              marginTop: vh * 2,
              borderColor: ThemeColors.white,
              width: vw * 40,
            }}
            labelStyle={{color: ThemeColors.white}}
          />
          {/* <TouchableHOC onPress={this.handleRewardBtnPress}>
            <OutfitLightText style={styles.underlineTextButton}>
              Go To Reward Library
            </OutfitLightText>
          </TouchableHOC> */}
        </>
      );
    } else {
      return (
        <>
          <Image source={icons.tryAgain} style={styles.tryagain} />
          <OutfitRegularText style={styles.congText}>
            Try Again!{' '}
          </OutfitRegularText>
          <OutfitRegularText style={styles.whiteText}>
            Better luck next time{' '}
          </OutfitRegularText>
          <OutfitLightText
            style={{
              color: ThemeColors.white,
              textAlign: 'center',
              width: vw * 70,
              fontSize: vh * 1.8,
              marginTop: vh * 1,
            }}>
            "Defeat only happens to those who chose not to try again"
          </OutfitLightText>
          <TouchableHOC onPress={this.handleTryAgainPress}>
            <OutfitLightText style={styles.underlineTextButton}>
              Nick Vujicic
            </OutfitLightText>
          </TouchableHOC>
        </>
      );
    }
  };

  render() {
    if (this.state.success == 1) {
      this._startAnim();
    }
    console.log('draw detail', this.state.rewardDetail);
    return (
      <View style={styles.container}>
        <ImageBackground
          source={backgrounds.redBg}
          style={styles.imgbg}
          resizeMode="cover"
          imageStyle={styles.imgbg}>
          <TouchableHOC
            onPress={() => this.props.navigation.goBack()}
            style={{
              zIndex: 999,
              position: 'absolute',
              top: vh * 6,
              left: vw * 8,
            }}>
            <Image source={icons.backarrow} style={styles.back} />
          </TouchableHOC>
          <LottieView
            resizeMode="cover"
            ref={animation => {
              this.animation = animation;
            }}
            source={celebAnim}
            progress={this.progress}
            style={{
              height: 100 * vh,
              width: 100 * vw,
              backgroundColor: 'transparent',
              position: 'absolute',
              top: 0,
              left: 0,
            }}
          />
          <View
            style={{
              alignItems: 'center',
              marginTop: 8 * vh,
              justifyContent: 'center',
              height: '100%',
            }}>
            {/* <Blacksword style={styles.title}>{this.rendertitle()}</Blacksword> */}
            {this.getText()}
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
    lootBoxDraw: data => dispatch(lootBoxDraw(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LootBoxScreen);
