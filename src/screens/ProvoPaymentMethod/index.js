import React from 'react';
import {ImageBackground, View, Image} from 'react-native';
import {backgrounds, provoCash} from '../../assets/images';
import styles from './styles';
import Button from '../../components/Buttons/SimpleButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import TouchableHOC from '../../components/Buttons/TouchableHOC';
import {vh, vw} from '../../Utils/Units';
import OutfitRegularText from '../../components/Text/OutfitRegularText';
import OutfitSemiBoldText from '../../components/Text/OutfitSemiBoldText';

class ProvoPaymentMethod extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
              <Image source={provoCash.vector3} style={styles.image} />
              <View style={styles.radioContainer}>
                {this.state.gender.map((val, index) => {
                  return (
                    <TouchableHOC
                      style={styles.row}
                      onPress={() => this.setState({selectedOption: val.id})}>
                      <View
                        style={
                          val.id == this.state.selectedOption
                            ? styles.selectedLabel
                            : styles.unselectedLabel
                        }>
                        {val.id == this.state.selectedOption && (
                          <View style={styles.orangeDot} />
                        )}
                      </View>
                      <OutfitRegularText
                        style={
                          val.id == this.state.selectedOption
                            ? styles.selectedText
                            : styles.unselectedText
                        }>
                        {val.label}
                      </OutfitRegularText>
                    </TouchableHOC>
                  );
                })}
              </View>
              {console.log(this.props.route?.params?.from)}
              <Button
                title="CONTINUE"
                btnContainer={{marginTop: 5 * vh}}
                onPress={() =>
                  this.props.navigation.navigate('Payment', {
                    option: this.state.selectedOption,
                    from: this.props.route?.params?.from,
                  })
                }
              />
            </View>
          </ImageBackground>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}
export default ProvoPaymentMethod;
