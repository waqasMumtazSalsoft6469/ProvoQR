import React from 'react';
import {ImageBackground, View, Image} from 'react-native';
import {backgrounds, provoCash, icons} from '../../assets/images';
import styles from './styles';
import Button from '../../components/Buttons/SimpleButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import TouchableHOC from '../../components/Buttons/TouchableHOC';
import {vh, vw} from '../../Utils/Units';
import OutfitRegularText from '../../components/Text/OutfitRegularText';
import OutfitSemiBoldText from '../../components/Text/OutfitSemiBoldText';
import ThemeColors from '../../Utils/ThemeColors';
import AlertModal from '../../components/Popups/alertModal';
import {connect} from 'react-redux';
import {
  lootBoxPurchaseByCoin,
  saveRestaurant,
} from '../../Redux/Actions/otherActions';
import {showToast} from '../../Api/HelperFunction';
import {EventRegister} from 'react-native-event-listeners';
import {events} from '../../Utils/Constants';

class LootBoxPaymentMethod extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleSuccess: false,
      showBuyProvoCashBtn: false,
      gender: [
        {
          id: 1,
          label: 'By New Card',
        },
        {
          id: 2,
          label: 'By Saved Billing Details',
        },
      ],
      selectedOption: 1,
    };
  }

  handleBuyProvoCashBtn = () => {
    const lootbox_id = this.props?.route?.params?.lootbox_id;
    this.props?.saveRestaurant({
      id: this?.props?.route?.params?.id,
      provoCash: this.props?.route?.params?.provoCash,
      lootbox_id,
    });
    this.props.navigation.navigate('ProvoCash', {
      screen: 'ProvoScreen',
      params: {
        navigateTo: 'LootBoxPaymentMethod',
      },
    });
  };

  handleCardBtnPress = () => {
    const lootbox_id = this.props?.route?.params?.lootbox_id;
    const id = this.props?.route?.params?.id ?? this.props?.restaurant_id?.id;
    console.log('Resturant **>> ID', id);
    // return;
    this.props.navigation.navigate('ProvoPaymentMethod', {
      packageId: id,
      from: 'lootbox',
      lootbox_id,
    });
  };

  handleProvocashPress = () => {
    const lootbox_id = this.props?.route?.params?.lootbox_id;
    const id = this.props?.route?.params?.id ?? this.props?.restaurant_id?.id;
    const data = {
      restaurant_id: id,
    };
    this.props.lootBoxPurchaseByCoin(data).then(res => {
      console.log('res from lootBoxPurchaseByCoin:', res);
      if (res) {
        showToast(res?.message);
        this.setState({visibleSuccess: false});
        this.props.navigation.navigate('LootBoxScreen', {
          restaurantId: id,
          success: 0,
        });
      }
    });
  };

  componentDidMount() {
    EventRegister.addEventListener(events.buyProvoCash, () => {
      this.setState({showBuyProvoCashBtn: true});
    });
  }

  componentWillUnmount() {
    EventRegister.removeAllListeners(events.buyProvoCash);
  }

  render() {
    console.log('id', this.p);
    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView>
          <ImageBackground
            source={backgrounds.grayBackground}
            style={styles.imgbg}
            resizeMode="cover"
            imageStyle={{width: 100 * vw, height: 100 * vh}}>
            <View style={{alignItems: 'center', marginTop: 5 * vh}}>
              <OutfitSemiBoldText style={styles.heading}>
                Payment Method Selection
              </OutfitSemiBoldText>
              <Image source={provoCash.vector2} style={styles.image} />

              <Button
                title="CARD"
                btnContainer={styles.upperBtn}
                onPress={this.handleCardBtnPress}
                labelStyle={{color: ThemeColors.white}}
              />
              <Button
                title="PROVOCASH"
                btnContainer={styles.lowerBtn}
                onPress={() => this.setState({visibleSuccess: true})}
                labelStyle={{color: ThemeColors.secondaryColor}}
              />
              {this.state?.showBuyProvoCashBtn && (
                <Button
                  title="BUY PROVOCASH"
                  btnContainer={styles.lowerBtn}
                  onPress={this.handleBuyProvoCashBtn}
                  labelStyle={{color: ThemeColors.secondaryColor}}
                />
              )}
            </View>
          </ImageBackground>
        </KeyboardAwareScrollView>
        <AlertModal
          visible={this.state.visibleSuccess}
          setVisible={() => this.setState({visibleSuccess: false})}
          icon={icons.popupAlert}
          description={`Please confirm purchase of lootbox for ${
            this.props?.route?.params?.provoCash ??
            this?.props?.restaurant_id?.provoCash
          } ProvoCash`}
          buttonTitle={'CONFIRM'}
          onButtonPress={this.handleProvocashPress}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  console.log('GeneralReducer', state?.GeneralReducer?.restaurant_id);
  return {
    // count: state.count,
    restaurant_id: state.GeneralReducer.restaurant_id,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // explicitly forwarding arguments
    lootBoxPurchaseByCoin: data => dispatch(lootBoxPurchaseByCoin(data)),
    saveRestaurant: data => dispatch(saveRestaurant(data)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LootBoxPaymentMethod);
