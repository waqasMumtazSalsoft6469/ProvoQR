import React from 'react';
import {ImageBackground, View, Image, Animated, Easing} from 'react-native';
import {backgrounds, icons, sampleimage} from '../../assets/images';
import {vh, vw} from '../../Utils/Units';
import celebAnim from './celebAnim.json';
import RubikLight from '../../components/Text/RubikLight';
import Blacksword from '../../components/Text/BlackswordRegular';
import LottieView from 'lottie-react-native';
import styles from './styles';
import OutfitRegularText from '../../components/Text/OutfitRegularText';

import ThemeColors from '../../Utils/ThemeColors';

class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.progress = new Animated.Value(0);
    this.textAnim = new Animated.Value(1);
    this.state = {};
  }

  componentDidMount() {
    this._startAnim();
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

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={backgrounds.redBg}
          style={styles.imgbg}
          resizeMode="cover"
          imageStyle={styles.imgbg}>
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
              marginTop: 4 * vh,
              height: vh * 100,
              justifyContent: 'center',
            }}>
            <Image source={sampleimage.openBox} style={styles.openBox} />
            <OutfitRegularText style={styles.congText}>
              Hurray!
            </OutfitRegularText>

            <OutfitRegularText style={styles.whiteText}>
              You have redeemed your Soda
            </OutfitRegularText>
            <Button
              title="OK"
              onPress={() => this.props.navigation.goBack()}
              btnContainer={{borderColor: ThemeColors.white}}
              labelStyle={{color: ThemeColors.white}}
            />
          </View>
        </ImageBackground>
      </View>
    );
  }
}
export default RegisterScreen;
