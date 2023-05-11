import React, {Component} from 'react';
import {View, Image} from 'react-native';
import styles from './styles';
import Button from '../../Buttons/SimpleButton';
import BottomSheetWrapper from '../../BottomSheetWrapper';
import OutfitSemiBoldText from '../../Text/OutfitSemiBoldText';
import OutfitRegularText from '../../Text/OutfitRegularText';
import ThemeColors from '../../../Utils/ThemeColors';
import CountDownTimer from '../../CountdownTimer';
import moment from 'moment';

export default class TwoAlertModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BottomSheetWrapper
        noBackDrop
        visible={this.props.visible}
        setVisible={this.props.setVisible}>
        <View style={[styles.container, this.props?.popupContainer]}>
          {this.props.icon && (
            <Image source={this.props.icon} style={styles.icon} />
          )}
          {this.props?.time && <CountDownTimer
            time={this.props?.time}
            // timerContainerStyle={{marginVertical: 0}}
            timerBgStyle={styles.boxStyle}
            textStyle={styles.timeStyle}
            // dotStyle={styles.dotStyle}
          />}
          {this.props.title && (
            <OutfitSemiBoldText style={styles.title}>
              {this.props.title}
            </OutfitSemiBoldText>
          )}
          <OutfitRegularText style={styles.description}>
            {this.props.description}
          </OutfitRegularText>
          <View style={styles.buttonContainer}>
            <Button
              title={this.props.leftButtonTitle}
              onPress={
                this.props.onLeftButtonPress && this.props.onLeftButtonPress
              }
              btnContainer={styles.buttonStyle}
            />
            <Button
              title={this.props.rightButtonTitle}
              onPress={
                this.props.onRightButtonPress && this.props.onRightButtonPress
              }
              btnContainer={styles.rightButtonStyle}
              labelStyle={{color: ThemeColors.iconColor}}
            />
          </View>
        </View>
      </BottomSheetWrapper>
    );
  }
}
