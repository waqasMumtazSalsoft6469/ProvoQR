import React from 'react';
import {ImageBackground, View, Image} from 'react-native';
import {backgrounds, icons} from '../../assets/images';
import styles from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import MainInput from '../../components/Input/MainInput';
import {vh, vw} from '../../Utils/Units';
import Button from '../../components/Buttons/SimpleButton';
import AlertModal from '../../components/Popups/alertModal';
import {subscribePackage} from '../../Redux/Actions/authActions';
import {Masks} from 'react-native-mask-input';
import {connect} from 'react-redux';
import {showToast} from '../../Api/HelperFunction';
import {
  getAllNotifications,
  getProfileData,
  lootBoxPurchaseByCard,
  provoCashPayment,
} from '../../Redux/Actions/otherActions';
import {DrawerActions, StackActions} from '@react-navigation/native';
import BackToHome from '../../components/Buttons/BackHome';

class PaymentScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      cardNumber: '',
      expiry: '',
      cvv: '',
      visibleSuccess: false,
      conVis: false,
    };
  }

  componentDidMount() {
    if (
      this.props.route?.params?.from == 'lootbox' ||
      this.props.route?.params?.from == 'provo'
    ) {
      this.props.navigation.setOptions({title: 'Payment'});
    } else {
      this.props.navigation.setOptions({
        title: 'Subscription Payment',
      });
    }
    // this.checkBilling();
  }

  checkBilling = () => {
    const {billingDetails} = this.props;
    const {option} = this.props.route.params;
    if (option == 2) {
      this.setState({
        name: billingDetails?.card_holder_name,
        cardNumber: billingDetails?.card_num,
        expiry: billingDetails?.expiry_date,
        cvv: billingDetails?.cvv_num,
      });
    }
  };

  handlePrizeDetailBtn = () => {
    this.setState({conVis: false});
    this.props.navigation?.navigate('LootboxTierScreen', {
      id: this.props?.route?.params?.id,
    });
  };

  handleSuccessPress = () => {
    const {id, from, lootbox_id, lootBoxDetails} = this.props?.route?.params;
    console.log('navigateTo', this.props?.route?.params?.navigateTo);
    console.log('handleSuccessPress from', from);

    if (from === 'Subscription') {
      // this.props.navigation.navigate('Login');
      this.props.getAllNotifications();
      this.props.getProfileData();
      this.props?.navigation?.dispatch(DrawerActions.closeDrawer());
      this.props?.navigation?.dispatch(StackActions.replace('MainNavigator'));
      // this.props.navigation.navigate('MainNavigator');
    } else if (from == 'lootbox') {
      // alert(`Resturant ID >>>, ${id}`);
      // return;
      // let obj = {
      //   restaurantId: id,
      //   success: 0,
      //   lootbox_id,
      // };
      // console.log('New Obj Payment >>>>', obj);
      this.props.navigation.navigate('LootBoxScreen', {
        restaurantId: id,
        success: 0,
        lootbox_id,
        lootBoxDetails: lootBoxDetails,
      });
    } else if (from === 'provo') {
      if (this.props?.route?.params?.navigateTo) {
        this.props.navigation.navigate(this.props?.route?.params?.navigateTo, {
          lootbox_id: lootbox_id,
          lootBoxDetails: lootBoxDetails,
        });
      } else {
        this.props?.navigation?.dispatch(StackActions.replace('MainNavigator'));
        // this.props.navigation.navigate('HomeScreen');
      }
    } else {
      this.props.navigation.navigate('MySubscription');
    }
  };

  confirmPayment = () => {
    const {name, cardNumber, expiry, cvv} = this.state;
    const {id, token, from, lootbox_id} = this.props.route.params;
    console.log('LootBox ID >>>>', lootbox_id);
    let card_number = cardNumber.replace(/\s/g, '');
    // alert(`Card Number >> ${card_number}`);
    // return;
    let data = {
      card_holder_name: name,
      card_num: card_number,
      cvv_num: cvv,
      expiry_date: expiry,
      package_id: id,
      lootbox_id,
    };
    console.log('Parameter Object New >>>>', data);

    if (from === 'provo') {
      this.props.provoCashPayment(data).then(res => {
        console.log('res', res);
        showToast(res?.message?.message);
        if (res?.success) {
          this.setState({visibleSuccess: true});
        }
      });
    } else if (from === 'lootbox') {
      // alert(lootbox_id);
      // return;
      this.props
        .lootBoxPurchaseByCard({
          card_holder_name: name,
          card_num: cardNumber,
          cvv_num: cvv,
          expiry_date: expiry,
          restaurant_id: id,
          lootbox_id,
        })
        .then(res => {
          console.log('LootBox Payment Response By Card >>>>>', res);
          if (res?.success) {
            // showToast(res?.message?.message);
            this.setState({visibleSuccess: true});
          } else {
            showToast(res?.message);
          }
        });
    } else {
      this.props.subscribePackage(data, token).then(res => {
        showToast(res?.message?.message);
        if (res?.success) {
          this.setState({visibleSuccess: true});
        }
      });
    }
  };

  handlePayment = () => {
    const {name, cardNumber, expiry, cvv} = this.state;
    if (!name) {
      showToast('Please Enter Card Holder Name');
    } else if (!cardNumber) {
      showToast('Please Enter Card Number');
    } else if (!expiry) {
      showToast('Please Enter Card Expiry Date');
    } else if (!cvv) {
      showToast('Please Enter CVV');
    } else {
      this.setState({conVis: true});
    }
  };

  render() {
    const {billingDetails} = this.props;
    const {option, lootBoxDetails} = this?.props?.route?.params;
    // console.log(billingDetails?.cvv_num, 'asda');
    console.log(
      'Selected LootBox Detail Payment Screen New **>>>',
      lootBoxDetails,
    );
    return (
      <View style={styles.container}>
        <ImageBackground
          source={backgrounds.grayBackground}
          style={styles.imgbg}
          resizeMode="cover"
          imageStyle={styles.imgbg}>
          <BackToHome />
          <KeyboardAwareScrollView>
            <View style={{alignItems: 'center', marginTop: 10 * vh}}>
              <MainInput
                placeholder="Enter Card Holder Name"
                // style={styles.field}
                ref={r => (this.name = r)}
                onSubmitEditing={() => this.number.onFocus()}
                onChangeText={newemail =>
                  this.setState({
                    name: newemail,
                  })
                }
                defaultValue={
                  option == 2
                    ? billingDetails?.card_holder_name
                    : this.state.name
                }
                label="Card Holder Name"
              />

              <MainInput
                placeholder="Enter Card Number"
                // style={styles.field}
                ref={r => (this.number = r)}
                onSubmitEditing={() => this.cvv.onFocus()}
                onChangeText={(masked, unmasked) =>
                  this.setState({
                    cardNumber: masked,
                  })
                }
                mask={Masks.CREDIT_CARD}
                keyboardType="number-pad"
                value={
                  option == 2
                    ? billingDetails?.card_num
                        ?.toString()
                        ?.match(/.{1,4}/g)
                        ?.join(' ')
                    : this.state.cardNumber
                }
                label="Card Number"
              />
              <MainInput
                placeholder="Enter CVV"
                // style={styles.field}
                ref={r => (this.cvv = r)}
                onSubmitEditing={() => this.expiry.onFocus()}
                onChangeText={masked =>
                  this.setState({
                    cvv: masked,
                  })
                }
                maxLength={3}
                keyboardType="number-pad"
                defaultValue={
                  option == 2
                    ? billingDetails?.cvv_num?.toString()
                    : this.state.cvv
                }
                label="CVV Number"
              />
              <MainInput
                placeholder="MM/YYYY"
                // style={styles.field}
                ref={r => (this.expiry = r)}
                onChangeText={(masked, unmasked) =>
                  this.setState({
                    expiry: masked,
                  })
                }
                mask={[/\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                // Update here after API fixes
                value={this.state.expiry}
                keyboardType="number-pad"
                label="Expiration Date"
              />

              <Button
                title="PAY"
                onPress={this.handlePayment}
                btnContainer={{marginTop: 2 * vh, width: vw * 40}}
              />
            </View>
          </KeyboardAwareScrollView>
          <AlertModal
            visible={this.state.conVis}
            setVisible={() => this.setState({conVis: false})}
            icon={icons.popupAlert}
            title={''}
            description={'Are you sure you want to make this payment'}
            buttonTitle="Yes"
            onButtonPress={this.confirmPayment}
            no={() => this.setState({conVis: false})}
            showPrizeDetailBtn={this.props?.route?.params?.from === 'lootbox'}
            handlePrizeDetailBtn={this.handlePrizeDetailBtn}
          />
          <AlertModal
            visible={this.state.visibleSuccess}
            setVisible={() => this.setState({visibleSuccess: false})}
            icon={
              icons.popupTick
              // this.props.route?.params?.from == 'lootbox'
              //   ? icons.popupAlert
              //   : icons.popupTick
            }
            title={
              'Congratulations!'
              // this.props.route?.params?.from == 'lootbox'
              //   ? ''
              //   : 'Congratulations!'
            }
            description={
              'Payment has been made successfully'
              // this.props.route?.params?.from == 'lootbox'
              //   ? 'Are you sure you want to spend $5'
              //   : 'Payment has been made successfully'
            }
            buttonTitle="OK"
            onButtonPress={this.handleSuccessPress}
          />
        </ImageBackground>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  // count: state.count,
  billingDetails: state.GeneralReducer.billingDetails,
});

const mapDispatchToProps = dispatch => {
  return {
    // explicitly forwarding arguments
    subscribePackage: (data, token) => dispatch(subscribePackage(data, token)),
    provoCashPayment: data => dispatch(provoCashPayment(data)),
    lootBoxPurchaseByCard: data => dispatch(lootBoxPurchaseByCard(data)),
    getAllNotifications: () => dispatch(getAllNotifications()),
    getProfileData: () => dispatch(getProfileData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PaymentScreen);
