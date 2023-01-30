import React from 'react';
import {Image, View, ImageBackground, TouchableOpacity} from 'react-native';
import styles from './styles';
import TouchableHOC from '../../components/Buttons/TouchableHOC';
import {vw, vh} from '../../Utils/Units';
import {icons, sampleimage} from '../../assets/images';
import GilroyBold from '../../components/Text/GilroyBold';
import RubikRegular from '../../components/Text/RubikRegular';
import RubikLight from '../../components/Text/RubikLight';
import OutfitRegularText from '../Text/OutfitRegularText';

class DetailList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  getTintcolor = index => {
    if (index == 0) {
      return '#A56A43';
    } else if (index == 1) {
      return '#FFB829';
    } else {
      return '#F24545';
    }
  };

  getIcons = index => {
    if (index == 0) {
      return icons.moneyBag;
    } else if (index == 1) {
      return icons.box;
    } else {
      return icons.rewardCup;
    }
  };

  getStyle = index => {
    if (index == 1) {
      return styles.cardimage;
    } else {
      return styles.cardimage1;
    }
  };

  render() {
    return (
      <View style={[{flexDirection: 'row', alignItems: 'center'}, this.props?.style]}>
        <Image
          source={this.getIcons(this.props.index)}
          style={this.getStyle(this.props.index)}
        />
        <OutfitRegularText
          style={[styles.name, {color: this.getTintcolor(this.props.index)}]}>
          {this.props.item?.rate}
        </OutfitRegularText>
      </View>
    );
  }
}

export default DetailList;
