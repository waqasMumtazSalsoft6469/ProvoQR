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
import OutfitRegularText from '../Text/OutfitRegularText';
import OutfitMediumText from '../Text/OutfitMediumText';
import {imageUrl} from '../../Api/configs';
class RewardCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View style={styles.card}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {/* <TouchableHOC onPress={this.props.onClick}> */}
          <Image
            source={
              this.props?.item?.image
                ? {uri: imageUrl + this.props?.item?.image}
                : sampleimage.noImage
            }
            style={styles.cardimage}
            defaultSource={sampleimage.noImage}
          />
          {/* </TouchableHOC> */}

          <View style={{marginLeft: 2.5 * vw, width: 50 * vw}}>
            <OutfitMediumText style={styles.name}>
              {this.props.item.name}
            </OutfitMediumText>
            {this.props.item.description && (
              <RubikLight style={styles.cus} numberOfLines={1}>
                {this.props.item.description}
              </RubikLight>
            )}
            <RubikLight style={styles.cus} numberOfLines={1}>
              {this.props.item.address}
            </RubikLight>
            <TouchableHOC onPress={this.props.viewmap}>
              <RubikLight style={styles.viewmap}>View On Map</RubikLight>
            </TouchableHOC>
          </View>
        </View>
      </View>
    );
  }
}

export default RewardCard;
