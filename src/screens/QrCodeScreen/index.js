import React from 'react';
import {ImageBackground, View, Image} from 'react-native';
import {backgrounds, icons, sampleimage} from '../../assets/images';
import {vh, vw} from '../../Utils/Units';
import OutfitSemiBoldText from '../../components/Text/OutfitSemiBoldText';
import OutfitRegularText from '../../components/Text/OutfitRegularText';
import OutfitLightText from '../../components/Text/OutfitLightText';
import Button from '../../components/Buttons/SimpleButton';
import CountDown from 'react-native-countdown-component';
import styles from './styles';
import ThemeColors from '../../Utils/ThemeColors';
import BottomSheetWrapper from '../../components/BottomSheetWrapper';
import TouchableHOC from '../../components/Buttons/TouchableHOC';
import {fonts} from '../../assets/fonts';
import {ScrollView} from 'react-native-gesture-handler';
import CountDownTimer from '../../components/CountdownTimer';

class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {visibleModal: false, checkBox: false};
  }

  componentDidMount() {
    // setTimeout(() => {
    //   this.props.navigation.navigate('QRcodeSuccess', {
    //     success: 0,
    //   });
    // }, 3000);
  }
  renderBottomSheet = () => {
    return (
      <View style={{alignItems: 'center', paddingHorizontal: vw * 5}}>
        <CountDownTimer time={10} />
        <OutfitSemiBoldText style={styles.ready}>
          Are you ready?
        </OutfitSemiBoldText>
        <OutfitRegularText style={{textAlign: 'center'}}>
          You have one hour to use this reward. A timer will count down after
          you press continue. Please, present the next screen to the cashier or
          server at time of payment.
        </OutfitRegularText>
        <View style={styles.checkboxView}>
          <TouchableHOC
            style={styles.checkBox}
            onPress={() => this.setState({checkBox: !this.state.checkBox})}>
            {this.state.checkBox == true && (
              <Image source={icons.tick} style={styles.tick} />
            )}
          </TouchableHOC>
          <OutfitRegularText style={{fontSize: vh * 1.5}}>
            I understand. Do not show me anymore confirmation
          </OutfitRegularText>
        </View>

        <View style={styles.orangeBox}>
          <OutfitLightText style={[styles.orangeText, {fontSize: vh * 1.6}]}>
            If activated, this reward will not apply to orders placed online.
          </OutfitLightText>
        </View>
        <Button
          title="CONTINUE"
          onPress={() => {
            this.props.navigation.navigate('QRcodeSuccess'),
              this.setState({visibleModal: false});
          }}
          btnContainer={{backgroundColor: ThemeColors.primary}}
          labelStyle={{color: ThemeColors.white}}
        />
        <TouchableHOC
          style={{marginTop: vh * 2}}
          onPress={() => this.setState({visibleModal: false})}>
          <OutfitRegularText>Never Mind</OutfitRegularText>
        </TouchableHOC>
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
          <ScrollView
            contentContainerStyle={{
              alignItems: 'center',
              marginTop: 2 * vh,
              paddingHorizontal: vw * 5,
            }}>
            <Image source={sampleimage.places} style={styles.headerImage} />
            <OutfitLightText
              style={{color: ThemeColors.grayText, marginVertical: vh * 1}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry....
            </OutfitLightText>
            <Image source={sampleimage.qrcode} style={styles.qrCodeIcon} />
            <View style={{flexDirection: 'row'}}>
              <OutfitSemiBoldText style={styles.symbol}>$</OutfitSemiBoldText>
              <OutfitSemiBoldText style={styles.price}>5</OutfitSemiBoldText>
            </View>
            <OutfitRegularText style={styles.orangeText}>
              Not Scanning?
            </OutfitRegularText>
            <Button
              title="Mark as used (50:35 left)"
              onPress={() => this.setState({visibleModal: true})}
              btnContainer={{
                borderColor: ThemeColors.iconColor,
                width: vw * 50,
              }}
              labelStyle={{color: ThemeColors.iconColor}}
            />
          </ScrollView>
        </ImageBackground>
        <BottomSheetWrapper
          noBackDrop
          visible={this.state.visibleModal}
          ctx={() => this.setState({visibleModal: false})}>
          {this.renderBottomSheet()}
        </BottomSheetWrapper>
      </View>
    );
  }
}
export default RegisterScreen;
