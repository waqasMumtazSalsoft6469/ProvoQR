import React from 'react';
import {ImageBackground, View, Image, TextInput, FlatList} from 'react-native';
import {backgrounds, icons} from '../../assets/images';
import {vh, vw} from '../../Utils/Units';
import RubikRegular from '../../components/Text/RubikRegular';
import GilroyBold from '../../components/Text/GilroyBold';
import RubikMedium from '../../components/Text/RubikMedium';
import styles from './styles';
import TouchableHoc from '../../components/Buttons/TouchableHOC';
import ThemeColors from '../../Utils/ThemeColors';
import OutfitSemiBoldText from '../Text/OutfitSemiBoldText';
import OutfitRegularText from '../Text/OutfitRegularText';
import OutfitMediumText from '../Text/OutfitMediumText';

class PlanCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ['#FAA025', '#20C3CF', '#F24545'],
    };
  }

  render() {
    return (
      <View style={styles.containerclick}>
        <OutfitSemiBoldText style={styles.title}>
          {this.props.item?.title}
        </OutfitSemiBoldText>
        <OutfitRegularText style={styles.current}>
          ({this.props.item?.month})
        </OutfitRegularText>
        <View style={{alignItems: 'center'}}>
          <OutfitMediumText style={styles.month}>
            {this.props.item?.validity} PLAN
          </OutfitMediumText>
          <View style={{flexDirection: 'row'}}>
            <OutfitSemiBoldText style={styles.symbol}>$</OutfitSemiBoldText>
            <OutfitSemiBoldText style={styles.amount}>5</OutfitSemiBoldText>
          </View>
        </View>
      </View>
    );
  }
}
export default PlanCard;
