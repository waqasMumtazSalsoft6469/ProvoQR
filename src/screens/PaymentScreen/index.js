import React from 'react';
import {ImageBackground, View, Image} from 'react-native';
import {backgrounds, icons} from '../../assets/images';
import styles from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import MainInput from '../../components/Input/MainInput';
import {vh, vw} from '../../Utils/Units';
import Button from '../../components/Buttons/SimpleButton';
import AlertModal from '../../components/Popups/alertModal';

class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      confpw: '',
      visibleSuccess: false,
    };
  }
  componentDidMount() {
    console.log(this.props.route?.params?.from);
    if (this.props.route?.params?.from == 'lootBox') {
      this.props.navigation.setOptions({title: 'Payment'});
    } else {
      this.props.navigation.setOptions({
        title: 'Subscription Payment',
      });
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={backgrounds.grayBackground}
          style={styles.imgbg}
          resizeMode="cover"
          imageStyle={styles.imgbg}>
          <KeyboardAwareScrollView>
            <View style={{alignItems: 'center', marginTop: 10 * vh}}>
              <MainInput
                placeholder="Enter Card Holder Name"
                // style={styles.field}
                ref={r => (this.email = r)}
                // onSubmitEditing={() => this.pw.onFocus()}
                // onChangeText={(newemail) =>
                //   this.setState({
                //     email: newemail,
                //   })
                // }

                value={this.props.route?.params?.option == 2 ? 'John Wick' : ''}
                label="Card Holder Name"
              />

              <MainInput
                placeholder="Enter Card Number"
                // style={styles.field}
                ref={r => (this.email = r)}
                // onSubmitEditing={() => this.pw.onFocus()}
                // onChangeText={(newemail) =>
                //   this.setState({
                //     email: newemail,
                //   })
                // }
                keyboardType="number-pad"
                value={
                  this.props.route?.params?.option == 2 ? '***********' : ''
                }
                label="Card Number"
              />
              <MainInput
                placeholder="Enter CVV"
                // style={styles.field}
                ref={r => (this.email = r)}
                // onSubmitEditing={() => this.pw.onFocus()}
                // onChangeText={(newemail) =>
                //   this.setState({
                //     email: newemail,
                //   })
                // }
                keyboardType="number-pad"
                value={this.props.route?.params?.option == 2 ? '321' : ''}
                label="CVV Number"
              />
              <MainInput
                placeholder="Enter Expiration Date"
                // style={styles.field}
                ref={r => (this.name = r)}
                // onSubmitEditing={() => this.pw.onFocus()}
                // onChangeText={(newemail) =>
                //   this.setState({
                //     email: newemail,
                //   })
                // }
                keyboardType="number-pad"
                value={this.props.route?.params?.option == 2 ? '12/25' : ''}
                label="Expiration Date"
              />

              <Button
                title="PAY"
                onPress={() => this.setState({visibleSuccess: true})}
                btnContainer={{marginTop: 2 * vh, width: vw * 40}}
              />
            </View>
          </KeyboardAwareScrollView>
          <AlertModal
            visible={this.state.visibleSuccess}
            setVisible={() => this.setState({visibleSuccess: false})}
            icon={
              this.props.route?.params?.from == 'lootbox'
                ? icons.popupAlert
                : icons.popupTick
            }
            title={
              this.props.route?.params?.from == 'lootbox'
                ? ''
                : 'Congratulations!'
            }
            description={
              this.props.route?.params?.from == 'lootbox'
                ? 'Are you sure you want to spend $5'
                : 'Payment has been made successfully'
            }
            buttonTitle="OK"
            onButtonPress={() =>
              this.props.route?.params?.from == 'lootbox'
                ? this.props.navigation.navigate('LootBoxScreen', {success: 0})
                : this.props.navigation.navigate('Login')
            }
          />
        </ImageBackground>
      </View>
    );
  }
}
export default RegisterScreen;
