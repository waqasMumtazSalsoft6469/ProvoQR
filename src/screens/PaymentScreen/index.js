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
    console.log(this.props.route.params, 'PARAMS');
    console.log(this.props.route?.params?.from);
    if (this.props.route?.params?.from == 'lootBox') {
      this.props.navigation.setOptions({title: 'Payment'});
    } else {
      this.props.navigation.setOptions({
        title: 'Subscription Payment',
      });
    }
  }

  confirmPayment = () => {
    const {name, cardNumber, expiry, cvv} = this.state;
    const {id, token} = this.props.route.params;
    let data = {
      card_holder_name: name,
      card_num: cardNumber,
      cvv_num: cvv,
      expiry_date: expiry,
      package_id: id,
    };
    this.props.subscribePackage(data, token).then(res => {
      showToast(res?.message?.message);
      if (res?.success) {
        this.setState({visibleSuccess: true});
      }
    });
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
    return (
      <View style={styles.container}>
        <ImageBackground
          source={backgrounds.grayBackground}
          style={styles.imgbg}
          resizeMode="cover"
          imageStyle={styles.imgbg}>
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
                value={this.state.cardNumber}
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
                // value={this.props.route?.params?.option == 2 ? '321' : ''}
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
          />
          <AlertModal
            visible={this.state.visibleSuccess}
            setVisible={() => this.setState({visibleSuccess: false})}
            icon={
              this.props.route?.params?.from == 'lootbox'
                ? icons.popupAlert
                : icons.popupTick
            }
            title={
              this.props.route?.params?.from == 'lootbox'
                ? ''
                : 'Congratulations!'
            }
            description={
              this.props.route?.params?.from == 'lootbox'
                ? 'Are you sure you want to spend $5'
                : 'Payment has been made successfully'
            }
            buttonTitle="OK"
            onButtonPress={
              () =>
                this.props.route?.params?.from == 'lootbox'
                  ? this.props.navigation.navigate('LootBoxScreen', {
                      success: 0,
                    })
                  : this.props.navigation.navigate('Login')
              // this.handlePayment()
            }
          />
        </ImageBackground>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // explicitly forwarding arguments
    subscribePackage: (data, token) => dispatch(subscribePackage(data, token)),
  };
};

export default connect(null, mapDispatchToProps)(PaymentScreen);
