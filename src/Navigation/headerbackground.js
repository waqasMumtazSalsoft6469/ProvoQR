import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {vh, vw} from '../Utils/Units';
import styles from './styles';
import {Header} from '@react-navigation/stack';
import {connect} from 'react-redux';
import {
  backgrounds,
  icons,
  sampleimage,
  samplePictures,
} from '../assets/images';
import ThemeColors from '../Utils/ThemeColors';
import TouchableHOC from '../components/Buttons/TouchableHOC';

class Extendedheader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      picture: '',
    };
  }

  extendedHeader = props => {
    let title = props.route?.name;

    return (
      <ImageBackground
        // source={backgrounds.header}
        style={{
          width: 100 * vw,
          height: 22 * vh,
          backgroundColor: 'white',
        }}
        resizeMode="cover"
        imageStyle={{
          width: 100 * vw,
          height: 22 * vh,
        }}>
        {title == 'Signup' ? (
          <View style={{alignItems: 'center'}}>
            <>
              {/* <View style={{alignItems: 'center'}}> */}
              <Image
                key="asd"
                style={{
                  height: 22 * vw,
                  width: 22 * vw,
                  position: 'absolute',
                  left: 40 * vw,

                  top: 16 * vh,
                  borderRadius: 11 * vw,
                }}
                source={sampleimage.avatar}></Image>
            </>
            {title == 'Signup' ? (
              <TouchableOpacity
                hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}
                style={{
                  width: 6 * vw,
                  height: 6 * vw,
                  backgroundColor: ThemeColors.primary,
                  position: 'absolute',
                  justifyContent: 'center',
                  top: 24 * vh,
                  borderRadius: 3 * vw,
                  right: 38 * vw,
                  alignItems: 'center',
                  // left: I18nManager.isRTL ? 38 * vw : 0
                }}>
                <Image
                  source={icons.camera}
                  resizeMode="contain"
                  style={{width: 3 * vw, height: 3 * vw}}
                />
              </TouchableOpacity>
            ) : null}
          </View>
        ) : null}
      </ImageBackground>
    );
  };

  render() {
    return (
      <View>
        {/* <Header {...this.props} /> */}
        {this.extendedHeader(this.props)}
        {/* {this._renderExtendedHeader(this.props.headerText)} */}
      </View>
    );
  }
}
const mapStates = state => {
  return {};
};
const mapDispatchtoProp = dispatch => {
  return {};
};

export default connect(mapStates, mapDispatchtoProp)(Extendedheader);
