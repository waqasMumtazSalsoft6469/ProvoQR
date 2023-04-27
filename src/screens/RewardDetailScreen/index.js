import React from 'react';
import {
  ImageBackground,
  View,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
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

class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: {},
      visibleModal: false,
      successModal: false,
      redeemResponse: {},
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

  handleSuccessPress = () => {
    this.setState({
      successModal: false,
    });
    // showToast(res?.message);
    dispatch(StackActions.popToTop());
    this.props.navigation.navigate('HomeScreen');
  };

  handlePopupPress = () => {
    const id = this.props.route.params.reward_id;
    const data = {
      reward_id: id,
    };
    this.props.redeemReward(data).then(res => {
      if (res?.success) {
        console.log('res', res);
        this.setState({
          visibleModal: false,
          redeemResponse: res,
          successModal: true,
        });
        // showToast(res?.message);
        // dispatch(StackActions.popToTop());
        // this.props.navigation.navigate('HomeScreen');
      }
    });
  };

  componentDidMount() {
    const id = this.props.route.params.reward_id;
    const name = this.props?.route.params.restaurantName;

    this.props?.navigation?.setOptions({
      title: name,
    });

    const data = {
      reward_id: id,
    };

    this.props.getRewardDetail(data).then(res => {
      console.log('res', res?.rewardDetail);
      this.setState({
        details: res?.rewardDetail,
      });
    });
  }

  render() {
    // console.log("duration", moment().diff(moment(this?.state?.detailsreward_expiry_date,"MM/DD/YY HH:mm:ss")));
    console.log('duration', this?.state?.detailsreward_expiry_date);
    return (
      <View style={styles.container}>
        <ImageBackground
          source={backgrounds.grayBackground}
          style={styles.imgbg}
          resizeMode="cover"
          imageStyle={{width: 100 * vw, height: 90 * vh}}>
          <ScrollView
          // contentContainerStyle={{height: vh * 135}}
          >
            <View
              style={{
                alignItems: 'center',
                marginTop: 3 * vh,
                borderRadius: vh * 2,
              }}>
              <Image
                source={{uri: imageUrl + this.state.details?.reward_image}}
                style={styles.cardimg}
              />
            </View>
            <View style={{paddingHorizontal: 6 * vw}}>
              <View style={{flexDirection: 'row', marginTop: 2 * vh}}>
                <OutfitSemiBoldText style={styles.recomend}>
                  About The Reward
                </OutfitSemiBoldText>
              </View>

              <OutfitLightText style={styles.rewtext}>
                {this.state.details?.reward_description}
              </OutfitLightText>
              <OutfitLightText style={styles.redeem}>
                (Make sure you are in the restaurant at time of redemption.)
              </OutfitLightText>
              <Image source={icons.rewardCup} style={styles.rewardIcon} />
              <OutfitRegularText
                style={{marginBottom: vh * 2, alignSelf: 'center'}}>
                You are a gold member of this restaurant now!
              </OutfitRegularText>
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
            <View style={{alignItems: 'center'}}>
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
                    this.props.route?.params?.status === 'Available'
                      ? 'REDEEM REWARD'
                      : 'Expired'
                  }
                  onPress={() => this.setState({visibleModal: true})}
                  btnContainer={{marginTop: vh, width: vw * 50}}
                />
              )}
            </View>
          </ScrollView>
        </ImageBackground>
        <TwoAlertModal
          visible={this.state.visibleModal}
          setVisible={() => this.setState({visibleModal: false})}
          icon={icons.popupQuestion}
          title=""
          description={'Are you sure you want to redeem this reward?'}
          leftButtonTitle="YES"
          onLeftButtonPress={this.handlePopupPress}
          rightButtonTitle="NO"
          onRightButtonPress={() => this.setState({visibleModal: false})}
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
