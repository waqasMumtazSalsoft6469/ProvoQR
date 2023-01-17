import React from 'react';
import {Image, View} from 'react-native';
import styles from './styles';
import TouchableHOC from '../../components/Buttons/TouchableHOC';
import {icons} from '../../assets/images';
import OutfitSemiBoldText from '../../components/Text/OutfitSemiBoldText';
import OutfitRegularText from '../Text/OutfitRegularText';
import OutfitMediumText from '../Text/OutfitMediumText';
import {formatDate} from '../../Api/HelperFunction';

class ProductItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <TouchableHOC style={styles.card}>
        <View style={styles.innerContainer}>
          <View style={styles.cardImage}>
            <Image
              source={icons.purplenotif}
              style={styles.notificationIconStyle}
            />
          </View>

          <View style={styles.textContainer}>
            <OutfitSemiBoldText style={styles.name}>
              {this.props.item?.data?.title}
            </OutfitSemiBoldText>
            <OutfitRegularText style={styles.cus}>
              {this.props.item?.data?.body}
            </OutfitRegularText>
          </View>
        </View>
        <OutfitMediumText style={styles.date}>
          {formatDate(this.props?.item?.created_at)}
        </OutfitMediumText>
      </TouchableHOC>
    );
  }
}

export default ProductItem;
