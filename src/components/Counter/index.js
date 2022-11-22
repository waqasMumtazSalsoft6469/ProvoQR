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
import OutfitSemiBoldText from '../Text/OutfitSemiBoldText';
import OutfitRegularText from '../Text/OutfitRegularText';
import OutfitMediumText from '../Text/OutfitMediumText';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }

  increment = () => {
    this.setState({count: this.state.count + 1});
  };

  decrement = () => {
    if (this.state.count > 0) {
      this.setState({count: this.state.count - 1});
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableHOC onPress={() => this.decrement()}>
          <OutfitMediumText style={styles.sign}>-</OutfitMediumText>
        </TouchableHOC>
        <OutfitSemiBoldText>{this.state.count}</OutfitSemiBoldText>
        <TouchableHOC onPress={() => this.increment()}>
          <OutfitMediumText style={styles.sign}>+</OutfitMediumText>
        </TouchableHOC>
      </View>
    );
  }
}

export default Counter;
