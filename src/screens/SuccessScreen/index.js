import React, {Component} from 'react';
import {
  View,
  Text,
  Animated,
  Easing,
  ImageBackground,
  Image,
  TouchableOpacity,
  Modal,
  LayoutAnimation,
} from 'react-native';

import styles from './styles';
import {connect} from 'react-redux';
import {vh, vw} from '../../Utils/Units';
import celebAnim from './celebAnim.json';
import LottieView from 'lottie-react-native';
import {backgrounds, icons} from '../../assets/images';
import BlackswordRegular from '../../components/Text/BlackswordRegular';
import RubikRegular from '../../components/Text/RubikRegular';

class PointsEarnedScreen extends Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.progress = new Animated.Value(0);
    this.textAnim = new Animated.Value(1);

    this.state = {
      point: 0,
      visible: false,
      totalPoint: 0,
      count: 0,
      showButton: false,
    };
  }

  show = () => {
    // this.setState((p) => {

    //   return {
    //     //...p,
    //     visible: true,
    //   };
    // });
    this.setState(
      {
        visible: true,
      },
      () => console.log('h', this.state.visible),
    );
  };

  componentDidMount() {
    this._startAnim();
  }

  _startPointsAnim = () => {
    this.textAnim.setValue(0);

    Animated.spring(this.textAnim, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
      friction: 2,
      useNativeDriver: true,
    }).start(this.showPoints);
  };

  _startAnim = () => {
    this.progress.setValue(0);

    Animated.timing(this.progress, {
      toValue: 0.5,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(this._startAnim);
  };

  hide = () => {
    this.setState(p => {
      return {
        ...p,
        visible: false,
      };
    });
  };
  render() {
    const transformStyle = {
      transform: [
        {
          scale: this.textAnim,
        },
      ],
    };

    return (
      <View style={styles.container}>
        <ImageBackground
          source={backgrounds.bgimage}
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
          <Image source={icons.tick} style={styles.tickicon} />

          <BlackswordRegular style={styles.congrats}>
            Congratulation
          </BlackswordRegular>
          <RubikRegular style={styles.success}>
            You Have Successfully Subscribed To PROVO
          </RubikRegular>
        </ImageBackground>
      </View>
    );
  }
}

export default PointsEarnedScreen;
