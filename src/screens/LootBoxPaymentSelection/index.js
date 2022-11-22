import React from 'react';
import {ImageBackground, View, Image} from 'react-native';
import {backgrounds, provoCash, icons} from '../../assets/images';
import styles from './styles';
import Button from '../../components/Buttons/SimpleButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import TouchableHOC from '../../components/Buttons/TouchableHOC';
import {vh, vw} from '../../Utils/Units';
import OutfitRegularText from '../../components/Text/OutfitRegularText';
import OutfitSemiBoldText from '../../components/Text/OutfitSemiBoldText';
import ThemeColors from '../../Utils/ThemeColors';
import AlertModal from '../../components/Popups/alertModal';

class LootBoxPaymentMethod extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleSuccess: false,
      gender: [
        {
          id: 1,
          label: 'By New Card',
        },
        {
          id: 2,
          label: 'By Saved Billing Details',
        },
      ],
      selectedOption: 1,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView>
          <ImageBackground
            source={backgrounds.grayBackground}
            style={styles.imgbg}
            resizeMode="cover"
            imageStyle={{width: 100 * vw, height: 100 * vh}}>
            <View style={{alignItems: 'center', marginTop: 5 * vh}}>
              <OutfitSemiBoldText style={styles.heading}>
                Payment Method Selection
              </OutfitSemiBoldText>
              <Image source={provoCash.vector2} style={styles.image} />

              <Button
                title="BY CARD"
                btnContainer={styles.upperBtn}
                onPress={() =>
                  this.props.navigation.navigate('ProvoPaymentMethod', {
                    from: 'lootbox',
                  })
                }
                labelStyle={{color: ThemeColors.white}}
              />
              <Button
                title="BY PROVOCASH"
                btnContainer={styles.lowerBtn}
                onPress={() => this.setState({visibleSuccess: true})}
                labelStyle={{color: ThemeColors.secondaryColor}}
              />
            </View>
          </ImageBackground>
        </KeyboardAwareScrollView>
        <AlertModal
          visible={this.state.visibleSuccess}
          setVisible={() => this.setState({visibleSuccess: false})}
          icon={icons.popupAlert}
          description={'Please confirm purchase of lootbox for 100 ProvoCash'}
          buttonTitle={'CONFIRM'}
          onButtonPress={() => {
            this.setState({visibleSuccess: false});
            this.props.navigation.navigate('LootBoxScreen', {success: 0});
          }}
        />
      </View>
    );
  }
}
export default LootBoxPaymentMethod;
