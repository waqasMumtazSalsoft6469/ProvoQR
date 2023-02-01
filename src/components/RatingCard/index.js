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

  getTintcolor = name => {
    if (name === 'Gold') {
      return '#F4CE0C';
    } else if (name === 'Silver') {
      return '#ADADAD';
    } else {
      return '#E9980F';
    }
  };

  render() {
    console.log('item', this.props.item);
    return (
      <View
        style={[
          {flexDirection: 'row', alignItems: 'center'},
          this.props.style,
        ]}>
        <Image
          source={icons.box}
          style={[
            styles.cardimage,
            {tintColor: this.getTintcolor(this.props.item?.badge)},
          ]}
        />
        <OutfitRegularText
          style={[
            styles.name,
            {color: this.getTintcolor(this.props.item?.badge)},
          ]}>
          {this.props.item?.badge}
        </OutfitRegularText>
      </View>
    );
  }
}

export default ProductItem;
