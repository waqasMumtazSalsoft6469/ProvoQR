import React from 'react';
import {ImageBackground, View, Image} from 'react-native';
import {backgrounds, icons} from '../../assets/images';
import styles from './styles';
import MainInput from '../../components/Input/MainInput';
import RubikRegular from '../../components/Text/RubikRegular';
import MapView, {Polyline, Marker} from 'react-native-maps';
import Uploadimage from '../../components/Popups/UploadImage';
import Button from '../../components/Buttons/SimpleButton';
import {vh, vw} from '../../Utils/Units';
import BottomSheetWrapper from '../../components/BottomSheetWrapper';
import OutfitSemiBoldText from '../../components/Text/OutfitSemiBoldText';
import ThemeColors from '../../Utils/ThemeColors';
import OutfitMediumText from '../../components/Text/OutfitMediumText';

class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Uploadimage ref={r => (this.upload = r)} />
        <ImageBackground
          source={backgrounds.bgimage}
          style={styles.imgbg}
          resizeMode="cover"
          imageStyle={styles.imgbg}>
          <MapView
            style={{flex: 1}}
            // mapType={Platform.OS == "android" ? "none" : "standard"}
            initialRegion={{
              latitude: 37.8025259,
              longitude: -122.4351431,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}></MapView>

          {/* <View style={{ alignItems: 'center', }}> */}
          <View style={styles.locationscroll}>
            <RubikRegular style={styles.scrolltext}>
              Scroll the screen to set your location by moving the marker
            </RubikRegular>
          </View>
          <View style={styles.bottomWrapper}>
            <View style={styles.backOpacity} />

            <View style={styles.horizontalLine} />

            <View style={styles.box}>
              <OutfitSemiBoldText style={styles.haeding}>
                Add a New Address
              </OutfitSemiBoldText>
              <OutfitMediumText style={styles.label}>Address</OutfitMediumText>
              <MainInput
                placeholder="Enter Address"
                style={{
                  width: 75 * vw,
                  backgroundColor: ThemeColors.backgroundGray,
                }}
                ref={r => (this.name = r)}
              />
              <Button
                title="CONTINUE"
                onPress={() => this.props.navigation.goBack()}
                btnContainer={{marginTop: 2 * vh}}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
export default RegisterScreen;
