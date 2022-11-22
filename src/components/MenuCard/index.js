import React from 'react';
import {Image, View, ImageBackground, TouchableOpacity} from 'react-native';
import styles from './styles';
import TouchableHOC from '../../components/Buttons/TouchableHOC';
import {vw, vh} from '../../Utils/Units';
import {icons, sampleimage} from '../../assets/images';
import GilroyBold from '../../components/Text/GilroyBold';
import RateCard from '../RatingCard';
import RubikRegular from '../../components/Text/RubikRegular';
import RubikLight from '../../components/Text/RubikLight';
import OutfitMediumText from '../Text/OutfitMediumText';
import OutfitSemiBoldText from '../Text/OutfitSemiBoldText';
import OutfitRegularText from '../Text/OutfitRegularText';

class MenuCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <TouchableHOC
        style={styles.card}
        onPress={this.props?.onPressCard && this.props?.onPressCard}>
        <View style={{flexDirection: 'row'}}>
          <TouchableHOC>
            <Image source={this.props.item.image} style={styles.cardimage} />
          </TouchableHOC>

          <View style={{marginLeft: 2.5 * vw, marginTop: vh * 1}}>
            <View style={styles.row}>
              <OutfitSemiBoldText style={styles.name}>
                {this.props.item.name}
              </OutfitSemiBoldText>
              <OutfitSemiBoldText style={styles.priceText}>
                $5.99
              </OutfitSemiBoldText>
            </View>

            <OutfitRegularText style={styles.cus}>
              {this.props.item.category}
            </OutfitRegularText>
          </View>
        </View>
      </TouchableHOC>
    );
  }
}

export default MenuCard;
