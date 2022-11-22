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

class ProductItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  getTintcolor = index => {
    if (index == 0) {
      return '#F4CE0C';
    } else if (index == 1) {
      return '#ADADAD';
    } else {
      return '#E9980F';
    }
  };

  render() {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={icons.box}
          style={[
            styles.cardimage,
            {tintColor: this.getTintcolor(this.props.index)},
          ]}
        />
        <OutfitRegularText
          style={[styles.name, {color: this.getTintcolor(this.props.index)}]}>
          {this.props.item?.rate}
        </OutfitRegularText>
      </View>
    );
  }
}

export default ProductItem;
