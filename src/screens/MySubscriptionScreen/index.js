import React from 'react';
import {ImageBackground, View, Image, ScrollView} from 'react-native';
import {backgrounds, icons} from '../../assets/images';
import styles from './styles';
import SubsCard from '../../components/SubsCard';
import {vh, vw} from '../../Utils/Units';
import TouchableHOC from '../../components/Buttons/TouchableHOC';
import OutfitSemiBoldText from '../../components/Text/OutfitSemiBoldText';
import OutfitMediumText from '../../components/Text/OutfitMediumText';
import OutfitLightText from '../../components/Text/OutfitLightText';
import OutfitRegularText from '../../components/Text/OutfitRegularText';

class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeindex: -1,
      subscription: [
        {
          amount: '5',
          title: 'SMALL BUSINESS SOLUTION',
          validity: 'Month',
          offers: [
            {
              label: 'Unlimited Call',
            },
            {
              label: 'Free Hosting',
            },
            {
              label: '40MB of Storage Space',
            },
          ],
        },
        {
          amount: '24',
          validity: 'Year',
          title: 'MEDIUM BUSINESS SOLUTION',
          offers: [
            {
              label: 'Unlimited Call',
            },
            {
              label: 'Free Hosting',
            },
            {
              label: '40MB of Storage Space',
            },
          ],
        },
      ],
    };
  }
  rendersubscriptions = () => {
    return this.state?.subscription.map((item, index) => {
      return (
        <View style={{marginTop: 5 * vh, alignItems: 'center'}}>
          <SubsCard
            item={item}
            success={(itemIndex, item) => {
              if (this.state.activeindex == itemIndex) {
                this.setState(
                  {
                    activeindex: -1,
                  },
                  () => this.props.navigation.navigate('Payment'),
                );
              } else {
                this.setState({
                  activeindex: itemIndex,
                });
              }
            }}
            index={index}
            activeindex={this.state.activeindex}
          />
        </View>
      );
    });
  };

  rendermyPlan = () => {
    return (
      <View style={styles.containerclick}>
        <OutfitSemiBoldText style={styles.title}>MY PLAN</OutfitSemiBoldText>
        <OutfitRegularText style={styles.current}>(Current)</OutfitRegularText>
        <OutfitMediumText style={styles.month}>1 MONTH PLAN</OutfitMediumText>
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
            <View
              style={{
                alignItems: 'flex-end',
                marginRight: 12 * vw,
                marginTop: 2 * vh,
              }}>
              <TouchableHOC
                style={{alignItems: 'flex-end'}}
                onPress={() =>
                  this.props.navigation.navigate('SubscriptionLogs')
                }>
                <OutfitRegularText style={styles.viewmap}>
                  Subscription Logs
                </OutfitRegularText>
              </TouchableHOC>
            </View>

            <View style={{alignItems: 'center', marginTop: 2 * vh}}>
              {this.rendermyPlan()}
              <View style={styles.locationscroll}>
                <OutfitRegularText style={styles.scrolltext}>
                  (Package Expires in 20 Days)
                </OutfitRegularText>
              </View>
            </View>

            {this.rendersubscriptions()}
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}
export default RegisterScreen;
