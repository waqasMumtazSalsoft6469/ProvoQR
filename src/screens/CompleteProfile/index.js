import React from 'react';
import {
  ImageBackground,
  View,
  Image,
  FlatList,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {backgrounds, icons, sampleimage} from '../../assets/images';
import styles from './styles';
import HeaderHome from '../../components/HeaderHome';
import JostRegular from '../../components/Text/JostRegular';
import GilroyLight from '../../components/Text/GilroyLight';
import GilroyExtraBold from '../../components/Text/GilroyExtraBold';
import RubikRegular from '../../components/Text/RubikRegular';
import GilroyBold from '../../components/Text/GilroyBold';
import RubikLight from '../../components/Text/RubikLight';
import MainInput from '../../components/Input/MainInput';
import TouchableHOC from '../../components/Buttons/TouchableHOC';
import Uploadimage from '../../components/Popups/UploadImage';

import {vh, vw} from '../../Utils/Units';
import Button from '../../components/Buttons/SimpleButton';
import ThemeColors from '../../Utils/ThemeColors';
import OutfitSemiBoldText from '../../components/Text/OutfitSemiBoldText';
import OutfitMediumText from '../../components/Text/OutfitMediumText';
import OutfitRegularText from '../../components/Text/OutfitRegularText';
import {connect} from 'react-redux';
import {completeProfile} from '../../Redux/Actions/authActions';
import {showToast} from '../../Api/HelperFunction';
import {getStatusBarHeight} from 'react-native-safearea-height';

class CompleteProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: null,
      lat: null,
      lng: null,
      age: '',
      gender: [
        {
          label: 'Male',
        },
        {
          label: 'Female',
        },
        {
          label: 'Prefer not to say',
        },
      ],
      selectedGender: 'Male',
    };
  }

  handleDoneAddress = (address, latitude, longitude) => {
    this.setState({address: address, lat: latitude, lng: longitude});
  };

  handleComplete = () => {
    const {age, selectedGender, address, lat, lng} = this.state;
    if (!age) {
      showToast('Please Enter Your Age.');
    } else if (!address) {
      showToast('Please Enter Your Address.');
    } else {
      let data = {age: age, gender: selectedGender, address: address};
      if ((lat, lng)) {
        data.lat = lat;
        data.lng = lng;
      }
      console.log('com prof data', data);
      // return
      this.props.completeProfile(data).then(res => {
        this.props.navigation.navigate('Drawer');
      });
    }
  };

  render() {
    const {address, age} = this.state;
    return (
      <View style={styles.container}>
        <Uploadimage
          ref={r => (this.upload = r)}
          onPress={() => this.props.navigation.navigate('DrawerStack')}
        />

        <ImageBackground
          source={backgrounds.bgimage}
          style={{width: 100 * vw, flex: 1, paddingTop: getStatusBarHeight()}}
          resizeMode="cover"
          imageStyle={{width: 100 * vw, height: 100 * vh}}>
          <ScrollView>
            <HeaderHome>
              <View
                style={{
                  flexDirection: 'row',
                  paddingHorizontal: 5 * vw,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View>
                  <OutfitSemiBoldText style={styles.headertext}>
                    Just a Step Away!
                  </OutfitSemiBoldText>
                  <OutfitMediumText style={styles.headertextbold}>
                    Let's Complete Your Profile
                  </OutfitMediumText>
                </View>

                {/* <View style={{flexDirection: 'row'}}>
                  <TouchableHOC>
                    <Image
                      source={icons.whiteloc}
                      resizeMode="contain"
                      style={styles.profile}
                    />
                  </TouchableHOC>
                  <TouchableHOC>
                    <ImageBackground
                      source={icons.notif}
                      resizeMode="contain"
                      style={{
                        width: 6 * vw,
                        height: 6 * vw,
                        alignItems: 'flex-end',
                      }}
                      imageStyle={{
                        width: 6 * vw,
                        height: 6 * vw,
                        tintColor: ThemeColors.iconColor,
                      }}>
                      <View style={styles.circle}>
                        <JostRegular style={styles.count}>5</JostRegular>
                      </View>
                    </ImageBackground>
                  </TouchableHOC>
                  <Image
                    source={sampleimage.profile}
                    resizeMode="contain"
                    style={styles.profile}
                  />
                </View> */}
              </View>
            </HeaderHome>

            <View style={styles.labelview}>
              <OutfitMediumText style={styles.label1}>Gender</OutfitMediumText>
            </View>
            <View style={{alignItems: 'center'}}>
              <View style={styles.radioContainer}>
                {this.state.gender.map((val, index) => {
                  return (
                    <TouchableHOC
                      style={styles.row}
                      onPress={() =>
                        this.setState({selectedGender: val.label})
                      }>
                      <View
                        style={
                          val.label == this.state.selectedGender
                            ? styles.selectedLabel
                            : styles.unselectedLabel
                        }>
                        {val.label == this.state.selectedGender && (
                          <View style={styles.orangeDot} />
                        )}
                      </View>
                      <OutfitRegularText
                        style={
                          val.label == this.state.selectedGender
                            ? styles.selectedText
                            : styles.unselectedText
                        }>
                        {val.label}
                      </OutfitRegularText>
                    </TouchableHOC>
                  );
                })}
              </View>

              <MainInput
                placeholder="Enter Age"
                // style={styles.field}
                ref={r => (this.email = r)}
                keyboardType="phone-pad"
                // onSubmitEditing={() => this.pw.onFocus()}
                maxLength={2}
                onChangeText={text => this.setState({age: text})}
                label="Age"
              />
            </View>
            <View style={styles.labelview}>
              <OutfitMediumText style={styles.label}>Location</OutfitMediumText>
            </View>
            <View style={{alignItems: 'center'}}>
              <TouchableHOC
                style={styles.fieldContainer}
                onPress={() =>
                  this.props.navigation.navigate('Location', {
                    handleDoneAddress: this.handleDoneAddress,
                  })
                }>
                <OutfitRegularText
                  style={[
                    styles.gender,
                    this.state.address && {color: ThemeColors.fontBlack},
                  ]}
                  numberOfLines={1}>
                  {address ?? 'Enter Location'}
                </OutfitRegularText>
                <Image source={icons.loc} style={styles.down} />
              </TouchableHOC>

              <Button
                onPress={this.handleComplete}
                title="CONTINUE"
                btnContainer={{
                  marginTop: 4 * vh,
                  paddingHorizontal: 6 * vw,
                  width: 40 * vw,
                  height: 6 * vh,
                }}
              />
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // explicitly forwarding arguments
    completeProfile: data => dispatch(completeProfile(data)),
  };
};

export default connect(null, mapDispatchToProps)(CompleteProfile);
