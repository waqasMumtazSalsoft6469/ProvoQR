import React, {Component} from 'react';
import {
  View,
  Modal,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import {
  icons,
  assets,
  footer,
  backgrounds,
  sampleimage,
} from '../../../assets/images';
import Button from '../../Buttons/SimpleButton';
import GilroyBold from '../../Text/GilroyBold';
import {BlurView} from '@react-native-community/blur';
import TouchableHOC from '../../Buttons/TouchableHOC';
import RubikLight from '../../Text/RubikLight';
import {vw, vh} from '../../../Utils/Units';
import ThemeColors from '../../../Utils/ThemeColors';

export default class Alert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: this.props.value ? true : false,
      text: '',
      visible: false,
      imagesShown: false,
    };
  }

  show = () => {
    console.log('show');
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
  hide = () => {
    this.setState(p => {
      return {
        ...p,
        visible: false,
      };
    });
  };

  hide1 = () => {
    this.props.onPress();
    this.setState(p => {
      return {
        ...p,
        visible: false,
      };
    });
  };
  onCross = () => {
    this.hide();
    if (this.props.onCross) {
      this.props.onCross();
    }
  };

  render() {
    return (
      <Modal
        key={'cbdfdfczcxzt'}
        visible={this.state.visible}
        transparent={true}
        animationType="fade">
        <BlurView
          style={styles.blurView}
          blurType="light"
          blurAmount={5}
          reducedTransparencyFallbackColor="white"
        />
        <TouchableOpacity
          style={styles.modalTouchable}
          onPress={() => {
            this.hide();
          }}></TouchableOpacity>
        <View style={styles.upperContainer}>
          <View style={styles.imageBg}>
            <TouchableHOC style={styles.crossContainer} onPress={this.onCross}>
              <Image
                source={icons.cross}
                style={styles.cross}
                resizeMode="contain"
              />
            </TouchableHOC>

            <View style={{alignItems: 'center'}}>
              <GilroyBold style={styles.text}>
                Upload Your Profile Image
              </GilroyBold>
              <Image source={icons.line} style={{marginTop: vh}} />

              <Image source={icons.upload} style={styles.image} />

              <RubikLight style={styles.label}>
                Browse or Upload Image
              </RubikLight>

              <View style={{marginTop: 3 * vh}}>
                <Button title="Upload" onPress={this.hide1} />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}
