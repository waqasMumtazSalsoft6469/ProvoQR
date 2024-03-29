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
import {getBillingDetails} from '../../Redux/Actions/otherActions';
import {connect} from 'react-redux';
import {showToast} from '../../Api/HelperFunction';
import BackToHome from '../../components/Buttons/BackHome';

class ProvoPaymentMethod extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      methods: [
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

  componentDidMount() {
    this.props.navigation.addListener('focus', () => {
      if (!this.props.billingDetails) {
        this.props.getBillingDetails();
      }
    });
    console.log(this.props.billingDetails);
  }

  handleContinue = () => {
    if (this.state.selectedOption == 2 && !this.props.billingDetails) {
      showToast('You have not saved any billing details.');
    } else {
      // alert(this.props?.route?.params?.lootbox_id);
      const {lootBoxDetails} = this?.props?.route?.params;
      // console.log('Selected 11 >>', lootBoxDetails);
      // return;
      this.props.navigation.navigate('Payment', {
        option: this.state.selectedOption,
        id: this.props.route.params.packageId,
        from: this.props.route?.params?.from,
        navigateTo: this.props.route?.params?.navigateTo,
        lootbox_id: this.props?.route?.params?.lootbox_id,
        lootBoxDetails: lootBoxDetails,
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={backgrounds.grayBackground}
          style={styles.imgbg}
          resizeMode="cover"
          imageStyle={{width: 100 * vw, height: 100 * vh}}>
          {/* <BackToHome /> */}
          <KeyboardAwareScrollView>
            <View style={{alignItems: 'center', marginTop: 5 * vh}}>
              <OutfitSemiBoldText style={styles.heading}>
                Payment Method Selection
              </OutfitSemiBoldText>
              <Image source={provoCash.vector3} style={styles.image} />
              <View style={styles.radioContainer}>
                {this.state.methods.map((val, index) => {
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
              <Button
                title="CONTINUE"
                btnContainer={{marginTop: 5 * vh}}
                onPress={this.handleContinue}
              />
            </View>
          </KeyboardAwareScrollView>
        </ImageBackground>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  // count: state.count,
  billingDetails: state.GeneralReducer.billingDetails,
});

const mapDispatchToProps = dispatch => {
  return {
    // explicitly forwarding arguments
    getBillingDetails: () => dispatch(getBillingDetails()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProvoPaymentMethod);
