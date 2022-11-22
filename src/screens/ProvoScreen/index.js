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

class ProvoScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      confpw: '',
      formOption: 'Provo',
      coins: [
        {
          label: '50 Provo Coins',
          price: '5.00',
          icon: provoCash.singleCoin,
        },
        {
          label: '150 Provo Coins',
          price: '10.00',
          icon: provoCash.coins,
        },
        {
          label: '350 Provo Coins',
          price: '20.00',
          icon: provoCash.redBag,
        },
        {
          label: '500 Provo Coins',
          price: '50.00',
          icon: provoCash.greenBag,
        },
        {
          label: '800 Provo Coins',
          price: '100.00',
          icon: provoCash.brownBag,
        },
        {
          label: '1000 Provo Coins',
          price: '500.00',
          icon: provoCash.smallBox,
        },
      ],
    };
  }

  renderOptions = ({item}) => {
    return (
      <View style={styles.coinContainer}>
        <TouchableHOC style={styles.coinTouch}>
          <Image source={item.icon} style={styles.coinIcon} />
        </TouchableHOC>
        <OutfitMediumText style={styles.coinLabel}>
          {item.label}
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
  renderSignup = () => {
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
          <OutfitSemiBoldText style={styles.value}>60</OutfitSemiBoldText>
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
          onPress={() => this.props.navigation.navigate('ProvoPaymentMethod')}
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
            <View style={styles.options}>
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
            </View>
            {this.state.formOption === 'Lootbox'
              ? this.renderLogin()
              : this.renderSignup()}
          </KeyboardAwareScrollView>
        </ImageBackground>
      </View>
    );
  }
}
export default ProvoScreen;
