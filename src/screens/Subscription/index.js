import React from 'react';
import {ImageBackground, View, Image, ScrollView} from 'react-native';
import {backgrounds, icons} from '../../assets/images';
import styles from './styles';
import SubsCard from '../../components/SubsCard';
import {vh, vw} from '../../Utils/Units';
import OutfitMediumText from '../../components/Text/OutfitMediumText';
import TouchableHOC from '../../components/Buttons/TouchableHOC';

class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeindex: -1,
      selectedPackage: 0,
      subscription: [
        {
          amount: 'Free Package',
          title: 'TRIAL PACKAGE',
          validity:
            'Use Provo free for 2 months straight.Then its only $ 5/month.',
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
  rendersubscriptions = index => {
    return (
      <View style={{marginTop: 5 * vh, alignItems: 'center'}}>
        <SubsCard
          item={this.state.subscription[index]}
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
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={backgrounds.bgimage}
          style={styles.imgbg}
          resizeMode="cover"
          imageStyle={styles.imgbg}>
          <View style={{width: vw * 100, alignItems: 'center'}}>
            <OutfitMediumText style={styles.header}>
              Subscription Packages
            </OutfitMediumText>
            <Image source={icons.alertRound} style={styles.alert} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: vw * 90,
              marginTop: vh * 3,
            }}>
            {this.state.subscription.map((item, i) => {
              return (
                <TouchableHOC
                  onPress={() => this.setState({selectedPackage: i})}>
                  <OutfitMediumText
                    style={
                      this.state.selectedPackage == i
                        ? styles.selectStyle
                        : styles.unselectedStyle
                    }>
                    {item.title == 'TRIAL PACKAGE'
                      ? 'Trail Package'
                      : `Package 0${i + 1}`}
                  </OutfitMediumText>
                  {this.state.selectedPackage == i && (
                    <View style={styles.underLine} />
                  )}
                </TouchableHOC>
              );
            })}
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            {this.rendersubscriptions(this.state.selectedPackage)}
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}
export default RegisterScreen;
