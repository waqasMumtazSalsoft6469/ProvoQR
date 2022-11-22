import React from 'react';
import {ImageBackground, View, Image, ScrollView} from 'react-native';
import {backgrounds, icons} from '../../assets/images';
import styles from './styles';
import PlanCard from '../../components/PlanCard';
import {vh, vw} from '../../Utils/Units';
import TouchableHOC from '../../components/Buttons/TouchableHOC';
import OutfitSemiBoldText from '../../components/Text/OutfitSemiBoldText';
import OutfitMediumText from '../../components/Text/OutfitMediumText';
import OutfitLightText from '../../components/Text/OutfitLightText';
import OutfitRegularText from '../../components/Text/OutfitRegularText';
import Dash from 'react-native-dash';

class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeindex: -1,
      plan: [
        {
          amount: '05.00',
          month: 'June',
          title: 'My Plan',
          validity: '01 Month',
        },
        {
          amount: '05.00',
          validity: '01 Year',
          month: 'May',
          title: 'My Plan',
        },
        {
          amount: '05.00',
          validity: '01 Year',
          month: 'April',
          title: 'My Plan',
        },
      ],
    };
  }
  rendersubscriptions = () => {
    return this.state?.plan.map((item, index) => {
      return (
        <View style={{marginTop: 5 * vh, alignItems: 'center'}}>
          <PlanCard item={item} index={index} />
        </View>
      );
    });
  };

  rendermyPlan = () => {
    return (
      <View style={styles.containerclick}>
        <OutfitSemiBoldText style={styles.title}>MY PLAN</OutfitSemiBoldText>
        <OutfitRegularText style={styles.current}>(Current)</OutfitRegularText>
        <OutfitMediumText style={styles.month}>1 Month Plan</OutfitMediumText>
        <View style={{flexDirection: 'row'}}>
          <OutfitSemiBoldText style={styles.symbol}>$</OutfitSemiBoldText>
          <OutfitSemiBoldText style={styles.amount}>5</OutfitSemiBoldText>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={backgrounds.grayBackground}
          style={styles.imgbg}
          resizeMode="cover"
          imageStyle={styles.imgbg}>
          <ScrollView>
            <View style={{alignItems: 'center', paddingVertical: 2 * vh}}>
              {this.rendermyPlan()}

              <View style={styles.locationscroll}>
                <OutfitRegularText style={styles.scrolltext}>
                  (Expire in 20 days){' '}
                </OutfitRegularText>
              </View>
            </View>
            <Dash
              style={{
                width: 100 * vw,
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: vh * 2,
                marginBottom: vh * 2,
              }}
              dashColor="#E9E9E9"
              dashLength={0}
              dashGap={1 * vh}
              dashStyle={{width: 2 * vw}}></Dash>
            {this.rendersubscriptions()}
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}
export default RegisterScreen;
