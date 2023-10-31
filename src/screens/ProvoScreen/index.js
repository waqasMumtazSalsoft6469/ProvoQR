import React from 'react';
import {
  ImageBackground,
  View,
  Image,
  TouchableOpacity,
  FlatList,
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
    };
  }

  componentDidMount() {
    this.props.getProvoPackages().then(res => {
      this.setState({coins: res?.provo_package?.data});
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

  renderOptions = ({item, index}) => {
    return (
      <View style={styles.coinContainer}>
        <TouchableHOC
          style={
            item?.id == this.state.selectedPackage
              ? styles.selectedCoin
              : styles.coinTouch
          }
          onPress={() => this.setState({selectedPackage: item?.id})}>
          <Image
            source={{uri: imageUrl + item?.icon}}
            style={styles.coinIcon}
          />
        </TouchableHOC>
        <OutfitMediumText style={styles.coinLabel}>
          {item?.coin_qty} Provo Coins
        </OutfitMediumText>
        <OutfitMediumText style={styles.coinPrice}>
          ${item.price}
        </OutfitMediumText>
      </View>
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

    // subPackges: () => dispatch(subPackges()),
    // signup: data => dispatch(userSignup(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProvoScreen);
