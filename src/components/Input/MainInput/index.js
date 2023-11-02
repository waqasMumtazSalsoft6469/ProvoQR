import React from 'react';
import {TextInput, View, Text, Image, I18nManager} from 'react-native';
import {fonts} from '../../../assets/fonts';
import ThemeColors from '../../../Utils/ThemeColors';
import {vw, vh} from '../../../Utils/Units';
import RubikRegular from '../../Text/RubikRegular';
import MaskInput from 'react-native-mask-input';
import styles from './styles';
import {icons} from '../../../assets/images';
import IconButton from '../../Buttons/IconButton';
import OutfitMediumText from '../../Text/OutfitMediumText';

class MainInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hideText: false,
      value: '',
    };
  }
  componentDidMount() {
    // this.input.setNativeProps({
    //   style: {
    //     fontFamily: Fonts,
    //   },
    // });
  }
  toggleEye = () => {
    this.setState({hideText: !this.state.hideText});
    this.input.setNativeProps({
      style: {
        fontFamily: fonts.Outfit.light,
      },
    });
  };
  renderEye = () => {
    let icon = icons.showPasswordGrey;
    if (this.state.hideText) {
      icon = icons.showPasswordGrey;
    } else {
      icon = icons.hidePasswordGrey;
    }

    return (
      <IconButton
        hitSlop={{
          top: 5,
          bottom: 5,
        }}
        style={[this.props.iconstyle, styles.Icon]}
        onPress={this.toggleEye}
        icon={icon}
      />
    );
  };

  onFocus = () => {
    this.input.focus();
  };
  onChangeText = ({nativeEvent}) => {
    console.log('Enterd Value >>>', nativeEvent.text);
    this.setState({value: nativeEvent.text}, () =>
      this.props.getvalue(this.state.value),
    );
  };

  onChangeText = t => {
    this.setState(
      p => {
        return {...p, text: t};
      },
      () => {
        if (this.props.onChangeText) {
          this.props.onChangeText(t);
        }
      },
    );
  };
  renderRightIcon = () => {
    return (
      <IconButton
        style={{marginLeft: 3 * vw}}
        onPress={this.props.onRightIconPress}
        icon={this.props.rightIcon}
      />
    );
  };
  renderLeftIcon = () => {
    return (
      <IconButton
        style={{marginLeft: 3 * vw}}
        onPress={this.props.onLeftIconPress && this.props.onLeftIconPress}
        icon={this.props.leftIcon}
      />
    );
  };
  render() {
    var hideText = false;
    if (this.props.secureTextEntry === true) {
      if (this.state.hideText === false) {
        hideText = true;
      } else {
        hideText = false;
      }
    }

    return (
      <View>
        {this.props.label && (
          <View style={[styles.labelview, this.props.ls]}>
            <OutfitMediumText style={[styles.label, this.props.labelstyle]}>
              {this.props.label == ' ' ? '' : this.props.label}
            </OutfitMediumText>
          </View>
        )}

        <View style={[styles.fieldContainer, this.props.style]}>
          {this.props.leftIcon && this.renderLeftIcon()}
          {this.props.mask ? (
            <MaskInput
              placeholder={this.props.hide ? '' : 'Text Field'}
              placeholderTextColor={ThemeColors.placeholderGrey}
              {...this.props}
              onChangeText={(masked, unmasked) => {
                this.onChangeText(masked, unmasked);
              }}
              selectionColor={ThemeColors.primary}
              style={[styles.field, this.props.fieldStyle]}
              secureTextEntry={hideText}
              ref={r => (this.input = r)}
              mask={this.props.mask}
              value={this.props.value}
            />
          ) : (
            <TextInput
              placeholder={this.props.hide ? '' : 'Text Field'}
              placeholderTextColor={ThemeColors.placeholderGrey}
              {...this.props}
              onChangeText={t => {
                this.onChangeText(t);
              }}
              selectionColor={ThemeColors.primary}
              style={[styles.field, this.props.fieldStyle]}
              secureTextEntry={hideText}
              ref={r => (this.input = r)}
              multiline={this.props.multiline}
              maxLength={this.props.maxLength}
            />
          )}
          {this.props.secureTextEntry === true && this.renderEye()}
          {this.props.rightIcon && this.renderRightIcon()}
        </View>
      </View>
    );
  }
}
export default MainInput;
