import React from 'react';
import {
  ImageBackground,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
  Text,
} from 'react-native';
import {backgrounds, icons, provoCash} from '../../assets/images';
import styles from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import MainInput from '../../components/Input/MainInput';
import {vh, vw} from '../../Utils/Units';
import Button from '../../components/Buttons/SimpleButton';
import RubikRegular from '../../components/Text/RubikRegular';
import Dash from 'react-native-dash';
import TouchableHOC from '../../components/Buttons/TouchableHOC';
import ImageButton from '../../components/Buttons/ImageButton';
import ThemeColors from '../../Utils/ThemeColors';
import OutfitSemiBoldText from '../../components/Text/OutfitSemiBoldText';
import OutfitMediumText from '../../components/Text/OutfitMediumText';
import {connect} from 'react-redux';
import {
  getProvoPackages,
  getProvoWallet,
} from '../../Redux/Actions/otherActions';
import {imageUrl} from '../../Api/configs';
import {showToast} from '../../Api/HelperFunction';
import CustomModal from '../../components/CustomModal';
import {provoCashTransfer} from '../../Redux/Actions/otherActions';

class ProvoScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      confpw: '',
      formOption: 'Provo',
      coins: [],
      walletAmount: 0,
      selectedPackage: null,
      modal: false,
      errorMessage: '',
      transferAmount: 0,
    };
  }

  getProvoWalletFunction = () => {
    this.props.getProvoWallet().then(res => {
      console.log('provo_wallet', res?.provo_wallet);
      this.setState({walletAmount: res?.provo_wallet});
    });
  };

  componentDidMount() {
    this.props.getProvoPackages().then(res => {
      let all_packgs = res?.provo_package?.data;
      let obj = {
        id: 11,
        icon: '/provo/public/storage/admin/provo_cash_icon/fLU9Gr64bN6QbJSfGPl5HufYHD8zKWI5EirmIpEy.png',
        type: 'transfer',
        title: 'Provo Coins Transfer',
      };
      all_packgs.push(obj);
      console.log('Packages Provo >>>>', res?.provo_package?.data);
      this.setState({coins: all_packgs});
    });

    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      this.props.getProvoWallet().then(res => {
        console.log('provo_wallet', res?.provo_wallet);
        this.setState({walletAmount: res?.provo_wallet});
      });
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  onClose = () => {
    this.setState({modal: false});
  };

  renderOptions = ({item, index}) => {
    return (
      <View style={styles.coinContainer}>
        <TouchableHOC
          style={
            item?.id == this.state.selectedPackage
              ? styles.selectedCoin
              : styles.coinTouch
          }
          onPress={() => {
            if (item?.type === 'transfer') this.setState({modal: true});
            else this.setState({selectedPackage: item?.id});
          }}>
          <Image
            source={{uri: imageUrl + item?.icon}}
            style={styles.coinIcon}
          />
        </TouchableHOC>
        {item?.type === 'transfer' ? (
          <OutfitMediumText style={styles.coinLabel}>
            {item?.title}
          </OutfitMediumText>
        ) : (
          <OutfitMediumText style={styles.coinLabel}>
            {item?.coin_qty} Provo Coins
          </OutfitMediumText>
        )}
        {item.price && (
          <OutfitMediumText style={styles.coinPrice}>
            ${item.price}
          </OutfitMediumText>
        )}
      </View>
    );
  };

  handleTransfer = async () => {
    console.log('Enter Amount ', this.state.transferAmount);
    const {email, transferAmount, walletAmount} = this.state;
    if (!transferAmount) {
      showToast('Please enter your transfer amount');
    } else if (transferAmount == 0 || transferAmount < 0) {
      showToast('Please enter your valid amount');
    } else if (transferAmount > walletAmount) {
      showToast('Transfer amount is greater your current wallet amount');
    } else if (!email) {
      showToast('Please enter your email address');
    } else if (
      !email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      )
    ) {
      showToast('Please insert valid email address');
    } else {
      let data = {
        token: this.props.token,
        email: email,
        coins: transferAmount,
      };
      console.log('my transfer data >>>', data);
      try {
        let res = await this.props.provoCashTransfer(data);
        console.log('Transfer Response >>>', res);
        if (res.success) {
          this.getProvoWalletFunction();
          showToast(res.message);
          this.setState({transferAmount: 0, email: '', modal: false});
        }
      } catch (error) {
        console.log('Error >>>', error);
      }
    }
  };

  renderModalComponent = () => {
    return (
      <KeyboardAwareScrollView>
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={this.onClose}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>X</Text>
          </TouchableOpacity>

          <Text style={styles.heading}>Add Provo Coin Transfer Details </Text>
          <View style={styles.inputContainer}>
            <MainInput
              placeholder="Enter Transfer Amount"
              ref={r => (this.transferAmount = r)}
              onSubmitEditing={() => this.email.onFocus()}
              onChangeText={value =>
                this.setState({
                  transferAmount: value,
                })
              }
              style={styles.input}
              maxLength={6}
              keyboardType="number-pad"
            />
            <View style={{margin: 10}} />
            <MainInput
              placeholder="Enter Email Address"
              ref={r => (this.email = r)}
              keyboardType="email-address"
              onChangeText={value =>
                this.setState({
                  email: value,
                })
              }
              style={styles.input}
            />
          </View>
          {this.state.errorMessage ? (
            <Text style={styles.errorMessage}>{this.state.errorMessage}</Text>
          ) : null}

          <Button
            title="TRANSFER"
            onPress={this.handleTransfer}
            btnContainer={styles.signupBtn}
          />
        </View>
      </KeyboardAwareScrollView>
    );
  };

  renderLogin = () => {
    return (
      <View
        style={{
          alignItems: 'center',
          marginTop: 5 * vh,
          paddingHorizontal: vw * 2,
        }}></View>
    );
  };

  handlePurchase = () => {
    if (!this.state.selectedPackage) {
      showToast('Please Select Any Package');
    } else {
      // alert(this.props?.route?.params?.lootbox_id);
      // return;
      this.props.navigation.navigate('ProvoPaymentMethod', {
        packageId: this.state.selectedPackage,
        from: 'provo',
        navigateTo: this.props?.route?.params?.navigateTo,
        lootbox_id: this.props?.route?.params?.lootbox_id,
      });
    }
  };

  renderProvoCash = () => {
    return (
      <View
        style={{
          alignItems: 'center',
          marginTop: 5 * vh,
          paddingHorizontal: vw * 2,
          marginBottom: vh * 6,
        }}>
        <View style={styles.amount}>
          <Image source={provoCash.coins} style={styles.headCoins} />
          <OutfitSemiBoldText style={styles.value}>
            {this.state.walletAmount}
          </OutfitSemiBoldText>
        </View>
        <OutfitSemiBoldText style={styles.label}>
          Your Current ProvoCash Balance
        </OutfitSemiBoldText>
        <Image source={provoCash.vector1} style={styles.vector} />
        <FlatList
          data={this.state.coins}
          renderItem={this.renderOptions}
          numColumns={2}
          contentContainerStyle={{alignItems: 'center', marginTop: vh * 4}}
        />
        <Button
          title="PURCHASE"
          onPress={this.handlePurchase}
          btnContainer={styles.signupBtn}
        />
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
          <KeyboardAwareScrollView
            contentContainerStyle={{alignItems: 'center'}}
            showsVerticalScrollIndicator={false}>
            {/* <View style={styles.options}>
              <TouchableHOC
                style={
                  this.state.formOption === 'Lootbox'
                    ? styles.darkButton
                    : styles.lightButton
                }
                onPress={() => this.setState({formOption: 'Lootbox'})}>
                <OutfitMediumText
                  style={{
                    color:
                      this.state.formOption === 'Lootbox'
                        ? ThemeColors.white
                        : ThemeColors.fontBlack,
                  }}>
                  LOOTBOX
                </OutfitMediumText>
              </TouchableHOC>
              <TouchableHOC
                style={
                  this.state.formOption === 'Provo'
                    ? styles.darkButton
                    : styles.lightButton
                }
                onPress={() => this.setState({formOption: 'Provo'})}>
                <OutfitMediumText
                  style={{
                    color:
                      this.state.formOption === 'Provo'
                        ? ThemeColors.white
                        : ThemeColors.fontBlack,
                  }}>
                  PROVOCASH
                </OutfitMediumText>
              </TouchableHOC>
            </View> */}
            {/* {this.state.formOption === 'Lootbox'
              ? this.renderLogin()
              : this.renderProvoCash()} */}
            {this.renderProvoCash()}
          </KeyboardAwareScrollView>
          <CustomModal visible={this.state.modal} onClose={this.onClose}>
            {this.renderModalComponent()}
          </CustomModal>
        </ImageBackground>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  // count: state.count,
  token: state.SessionReducer.token,
});
const mapDispatchToProps = dispatch => {
  return {
    // explicitly forwarding arguments
    getProvoPackages: () => dispatch(getProvoPackages()),
    getProvoWallet: () => dispatch(getProvoWallet()),
    provoCashTransfer: data => dispatch(provoCashTransfer(data)),
    // subPackges: () => dispatch(subPackges()),
    // signup: data => dispatch(userSignup(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProvoScreen);
