import React from 'react';
import {ImageBackground, View, Image, TextInput} from 'react-native';
import {backgrounds, icons, tabicons} from '../../assets/images';
import RubikRegular from '../../Text/RubikRegular';
import {vh, vw} from '../../../Utils/Units';
import TouchableHOC from '../TouchableHOC';
import OutfitSemiBoldText from '../../Text/OutfitSemiBoldText';
import OutfitMediumText from '../../Text/OutfitMediumText';
import OutfitLightText from '../../Text/OutfitLightText';
import OutfitRegularText from '../../Text/OutfitRegularText';
import styles from './styles';

class ImageButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <TouchableHOC
        style={[styles.selectedbox, this.props.stylecon]}
        onPress={this.props?.onClick}>
        <Image
          source={this.props.image}
          style={{width: 6 * vw, height: 6 * vw, resizeMode: 'contain'}}
        />
        <OutfitSemiBoldText style={[styles.title, this.props.labelstyle]}>
          {this.props.title}
        </OutfitSemiBoldText>
      </TouchableHOC>
    );
  }
}
export default ImageButton;
