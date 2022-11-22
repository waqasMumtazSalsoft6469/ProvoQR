import React from 'react';
import {ImageBackground, View, Image} from 'react-native';
import {backgrounds, icons, sampleimage} from '../../assets/images';
import styles from './styles';
import Button from '../../components/Buttons/SimpleButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import MainInput from '../../components/Input/MainInput';
import {vh, vw} from '../../Utils/Units';

class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
              <Image source={sampleimage.contact} style={styles.image} />

              <MainInput
                placeholder="Enter Name"
                // style={styles.field}
                ref={r => (this.email = r)}
                // onSubmitEditing={() => this.pw.onFocus()}
                // onChangeText={(newemail) =>
                //   this.setState({
                //     email: newemail,
                //   })
                // }

                // value={this.state.email}
                label="Name"
              />

              <MainInput
                placeholder="Enter Email Address"
                // style={styles.field}
                ref={r => (this.email = r)}
                // onSubmitEditing={() => this.pw.onFocus()}
                // onChangeText={(newemail) =>
                //   this.setState({
                //     email: newemail,
                //   })
                // }
                keyboardType="email-address"
                // value={this.state.email}
                label="Email Address"
              />
              <MainInput
                placeholder="Enter Subject"
                // style={styles.field}
                ref={r => (this.email = r)}
                // onSubmitEditing={() => this.pw.onFocus()}
                // onChangeText={(newemail) =>
                //   this.setState({
                //     email: newemail,
                //   })
                // }

                // value={this.state.email}
                label="Subject"
              />
              <MainInput
                placeholder="Enter Message"
                // style={styles.field}
                ref={r => (this.name = r)}
                // onSubmitEditing={() => this.pw.onFocus()}
                // onChangeText={(newemail) =>
                //   this.setState({
                //     email: newemail,
                //   })
                // }
                style={styles.txtArea}
                multiline={true}
                // value={this.state.password}
                label="Message"
              />
              <Button title="SEND" btnContainer={{marginTop: 2 * vh}} />
            </View>
          </ImageBackground>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}
export default RegisterScreen;
