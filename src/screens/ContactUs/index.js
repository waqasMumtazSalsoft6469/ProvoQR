import React from 'react';
import {ImageBackground, View, Image} from 'react-native';
import {backgrounds, icons, sampleimage} from '../../assets/images';
import styles from './styles';
import Button from '../../components/Buttons/SimpleButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import MainInput from '../../components/Input/MainInput';
import {vh, vw} from '../../Utils/Units';
import { contactUs } from '../../Redux/Actions/otherActions';
import { connect } from 'react-redux';
import { showToast } from '../../Api/HelperFunction';
import { CommonActions } from '@react-navigation/native';

class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
    };
  }

  handleSend=()=>{
    const {name,email,subject,message}=this.state
  if(!subject){
      showToast('Subject is Required')
    }
    else if(!message){
      showToast('Please Write Your Message')
    }
    else {
      let data={subject,message}
      this.props.contactUs(data).then(res=>{
        showToast(res?.messgae)
        this.props.navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [{name: 'Home'}],
          }),
        );
      })
    }
  }

  render() {
    const {userDetails}=this.props
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
                ref={r => (this.name = r)}
                onSubmitEditing={() => this.email.onFocus()}
                onChangeText={newemail =>
                  this.setState({
                    name: newemail,
                  })
                }
                defaultValue={userDetails?.name}
                label="Name"
              />

              <MainInput
                placeholder="Enter Email Address"
                // style={styles.field}
                ref={r => (this.email = r)}
                onSubmitEditing={() => this.subject.onFocus()}
                onChangeText={newemail =>
                  this.setState({
                    email: newemail,
                  })
                }
                keyboardType="email-address"
                defaultValue={userDetails?.email}
                label="Email Address"
              />
              <MainInput
                placeholder="Enter Subject"
                // style={styles.field}
                ref={r => (this.subject = r)}
                onSubmitEditing={() => this.message.onFocus()}
                onChangeText={newemail =>
                  this.setState({
                    subject: newemail,
                  })
                }
                // value={this.state.email}
                label="Subject"
              />
              <MainInput
                placeholder="Enter Message"
                // style={styles.field}
                ref={r => (this.message = r)}
                // onSubmitEditing={() => this.pw.onFocus()}
                onChangeText={newemail =>
                  this.setState({
                    message: newemail,
                  })
                }
                style={styles.txtArea}
                multiline={true}
                // value={userDetails?.email}
                label="Message"
              />
              <Button title="SEND" btnContainer={{marginTop: 2 * vh}} onPress={this.handleSend}/>
            </View>
          </ImageBackground>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  // count: state.count,
  userDetails:state.SessionReducer.userData
});
const mapDispatchToProps = dispatch => {
  return {
    // explicitly forwarding arguments
    contactUs: (data) => dispatch(contactUs(data)),
    // signup: data => dispatch(userSignup(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactUs);