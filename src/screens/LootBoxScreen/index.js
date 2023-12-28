import React from 'react';
import {
  ImageBackground,
  View,
  Image,
  Animated,
  Easing,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
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
import {CommonActions, StackActions} from '@react-navigation/native';
import moment from 'moment';
import OutfitSemiBoldText from '../../components/Text/OutfitSemiBoldText';
import OutfitMediumText from '../../components/Text/OutfitMediumText';
import CountDownTimer from '../../components/CountdownTimer';
import {claimLootbox} from '../../Redux/Actions/otherActions';
import {showToast} from '../../Api/HelperFunction';
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
      lootBoxDetails: {},
      claim: '',
      selectedItem: '',
      lootBoxName: '',
      tiersName: [],
      tiersMenu: [],
    };
  }

  handleRewardBtnPress = () => {
    // this.props.navigation.dispatch(StackActions.popToTop());
    // // this.props.navigation.popToTop()

    // this.props.navigation.navigate('GiftStack', {
    //   screen: 'RewardDetail',
    //   params: {
    //     reward_id: this.state?.rewardDetail?.rewards?.id,
    //     status: 'Available',
    //   },
    // });
    this.props.navigation.navigate('RewardDetail', {
      reward_id: this.state?.rewardDetail?.rewards?.id,
      status: 'Available',
    });
  };

  handleTryAgainPress = () => {
    this.props.navigation.navigate('HomeScreen');
  };

  handleDrawLootbox = () => {
    const {restaurantId} = this?.props?.route?.params;
    const data = {
      restaurant_id: restaurantId,
    };
    console.log('data for Draw >>>', data);
    this.props.lootBoxDraw(data).then(res => {
      console.log('Response LootBoxDraw New 11 NEW *****>>>>', res);
      if (res?.message === 'Win') {
        console.log('LootBox Draw Res Data *******>>>>>>', res);
        this.setState({rewardDetail: res});
        this.setState({success: 1, claim: ''});
      } else {
        this.setState({success: 2, claim: ''});
      }
    });
  };

  handleItemSelect = item => {
    this.setState({selectedItem: item});
  };

  handleClaimItem = async () => {
    // Call your API to claim the selected item here
    if (Object.keys(this.state.selectedItem).length != 0) {
      const {lootbox_id, lootBoxDetails} = this?.props?.route?.params;
      let obj = {
        lootbox_id: lootbox_id,
        menu_id: this.state?.selectedItem?.id,
      };
      console.log('Claim Object >>>', obj);
      // return;
      try {
        let res = await this.props.claimLootbox(obj);
        console.log('Claim ITem Response >>>', res);
        if (res?.message) {
          showToast(res?.message);
          setTimeout(() => {
            this.handleDrawLootbox();
          }, 100);
        }
      } catch (error) {
        console.log('Claim Error .>>', error);
      }
    } else {
      // alert('Please select any item');
      showToast('Please select any item');
    }
  };

  handleSkip = () => {
    this.setState({claim: ''});
  };

  removeDuplicateObjects = arr => {
    return arr.filter((obj, index, array) => {
      // Find the index of the first occurrence of the current object's id
      const firstIndex = array.findIndex(item => item.id === obj.id);

      // Include the current object only if its index is the first occurrence of the id
      return index === firstIndex;
    });
  };

  handleLootBoxDraw = () => {
    const tiersName = [];
    const tiersMenu = [];
    const {restaurantId, lootbox_id, lootBoxDetails} =
      this?.props?.route?.params;
    console.log('lootBoxDetails Selected ***>>>>', lootBoxDetails);
    const lootBoxTiers = lootBoxDetails?.tiers.filter(
      obj => !Array.isArray(obj),
    );
    console.log('lootBoxTiers >>>', lootBoxTiers);
    for (const iterator1 of lootBoxTiers) {
      tiersName.push(iterator1.name);
      for (const iterator2 of iterator1.menu) {
        tiersMenu.push(iterator2);
      }
    }
    console.log('tiersName >>', tiersName);
    console.log('tiersMenu >>', tiersMenu);

    const removeDuplicateObjects = this.removeDuplicateObjects(tiersMenu);
    console.log('After Removed Duplicates >>>>>', removeDuplicateObjects);

    this.setState({
      claim: 'claim',
      tiersName,
      tiersMenu: removeDuplicateObjects,
      lootBoxName: lootBoxDetails?.name,
    });
    // this?.props?.navigation?.navigate('ClaimScreen', {
    //   lootBoxDetails: lootBoxDetails,
    //   restaurant_id: restaurantId,
    //   _success: this.state.success,
    // });
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
        <View style={{alignItems: 'center', marginTop: vh * 30}}>
          <Image source={sampleimage.closeBox} style={styles.boxImage} />
          <Button
            title="TAP TO OPEN"
            onPress={this.handleLootBoxDraw}
            // style={{marginBottom: }}
            btnContainer={{borderColor: ThemeColors.white, width: vw * 40}}
            labelStyle={{color: ThemeColors.white}}
          />
        </View>
      );
    } else if (this.state.success == 1) {
      return (
        <View style={{alignItems: 'center', marginTop: vh * 2}}>
          <Image source={sampleimage.openBox} style={styles.openBox} />
          <CountDownTimer
            time={moment(
              this.state.rewardDetail?.rewards?.reward_expire_date,
              "YYYY-MM-DD'T'HH:mm:ss.SSSSSS'Z'",
            ).diff(moment(), 'seconds')}
            timerContainerStyle={{marginVertical: 0}}
            timerBgStyle={styles.boxStyle}
            textStyle={styles.timeStyle}
            dotStyle={styles.dotStyle}
          />
          <OutfitSemiBoldText style={styles.congText}>
            Hurray!
          </OutfitSemiBoldText>
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
            {this.state?.rewardDetail?.rewards?.my_win_lootbox?.menu?.name}
          </OutfitMediumText>
          <OutfitSemiBoldText style={styles.headingText}>
            Restaurant Details
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
          <TouchableHOC onPress={this.handleTryAgainPress}>
            <OutfitLightText
              style={[styles.underlineTextButton, styles.homeBtnText]}>
              Go To Home
            </OutfitLightText>
          </TouchableHOC>
        </View>
      );
    } else {
      return (
        <View style={{alignItems: 'center', marginTop: vh * 30}}>
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
        </View>
      );
    }
  };

  render() {
    if (this.state.success == 1) {
      this._startAnim();
    }
    // console.log('draw detail', this.state.rewardDetail);
    return (
      <>
        {this.state.claim !== 'claim' && (
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
                  // justifyContent: 'center',
                  // height: '100%',
                }}>
                <ScrollView
                  contentContainerStyle={{
                    alignItems: 'center',
                    paddingBottom: vh * 8,
                  }}
                  showsVerticalScrollIndicator={false}>
                  {/* <Blacksword style={styles.title}>{this.rendertitle()}</Blacksword> */}
                  {this.getText()}
                </ScrollView>
              </View>
            </ImageBackground>
          </View>
        )}
        {this.state.claim === 'claim' && (
          <ScrollView contentContainerStyle={styles.container}>
            <View
              style={{
                flex: 0.5,
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: 7,
              }}>
              <OutfitSemiBoldText style={styles.heading}>
                Congratulations! You won a{' '}
                {this.state.tiersName?.map((item, indx) => (
                  <OutfitSemiBoldText style={styles.heading} key={indx}>
                    {indx === 0 ? item : `, ${item}`}
                  </OutfitSemiBoldText>
                ))}{' '}
                Prize!!!!
              </OutfitSemiBoldText>
              <OutfitRegularText style={styles.sub_heading}>
                Please select an item
              </OutfitRegularText>
            </View>

            <View style={styles.itemsContainer}>
              {console.log('Menu Item >>>', this.state.tiersMenu)}
              {this.state.tiersMenu?.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.item,
                    this.state.selectedItem?.id === item?.id
                      ? styles.selectedItem
                      : null,
                  ]}
                  onPress={() => this.handleItemSelect(item)}>
                  <Text
                    style={{textAlign: 'center', color: '#000'}}
                    numberOfLines={3}
                    ellipsizeMode="tail">
                    {item?.name}
                  </Text>
                  {/* <OutfitRegularText
                    style={{
                      textAlign: 'center',
                      backgroundColor: 'red',
                    }}>
                    {`${item?.name} Hello Test The Circle Width`}
                  </OutfitRegularText> */}
                </TouchableOpacity>
              ))}
            </View>
            <View
              style={{
                // flex: 1,
                marginTop: 30,
                // backgroundColor: 'red',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Button
                title="Claim"
                btnContainer={{marginTop: 5 * vh}}
                onPress={this.handleClaimItem}
              />
              <View style={{margin: 10}} />
              <Button
                title="SKIP"
                btnContainer={{marginTop: 5 * vh}}
                onPress={this.handleSkip}
              />
            </View>
          </ScrollView>
        )}
      </>
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
    claimLootbox: data => dispatch(claimLootbox(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LootBoxScreen);
