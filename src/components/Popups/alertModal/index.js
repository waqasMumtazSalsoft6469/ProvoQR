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
import BottomSheetWrapper from '../../BottomSheetWrapper';
import OutfitSemiBoldText from '../../Text/OutfitSemiBoldText';
import OutfitRegularText from '../../Text/OutfitRegularText';

export default class AlertModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onButtonPress = () => {
    if (this.props.onButtonPress || this.props.setVisible) {
      this.props.onButtonPress();
      this.props.setVisible();
    }
  };

  render() {
    return (
      <BottomSheetWrapper
        noBackDrop
        visible={this.props.visible}
        setVisible={this.props.setVisible}>
        <View style={styles.container}>
          <Image source={this.props.icon} style={styles.icon} />
          <OutfitSemiBoldText style={styles.title}>
            {this.props.title}
          </OutfitSemiBoldText>
          <OutfitRegularText style={styles.description}>
            {this.props.description}
            {this.props.code && (
              <OutfitRegularText style={{color: ThemeColors.primary}}>
                {this.props.code}
              </OutfitRegularText>
            )}
          </OutfitRegularText>
          <View style={styles.buttonContainer}>
            <Button
              title={this.props.buttonTitle}
              onPress={() => this.onButtonPress()}
              btnContainer={styles.buttonStyle}
            />
            {this.props.no && (
              <Button
                title={'No'}
                onPress={this.props.no}
                btnContainer={styles.buttonStyle}
              />
            )}
          </View>
        </View>
      </BottomSheetWrapper>
    );
  }
}
