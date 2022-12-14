import React from 'react';
import {ImageBackground, View, Image, ScrollView, FlatList} from 'react-native';
import {backgrounds, icons} from '../../assets/images';
import styles from './styles';
import RubikLight from '../../components/Text/RubikLight';
import RubikRegular from '../../components/Text/RubikRegular';
import GilroyBold from '../../components/Text/GilroyBold';
import MainInput from '../../components/Input/MainInput';
import {vh, vw} from '../../Utils/Units';
import ThemeColors from '../../Utils/ThemeColors';
import Button from '../../components/Buttons/SimpleButton';
import TouchableHOC from '../../components/Buttons/TouchableHOC';
import OutfitMediumText from '../../components/Text/OutfitMediumText';
import OutfitSemiBoldText from '../../components/Text/OutfitSemiBoldText';
import OutfitLightText from '../../components/Text/OutfitLightText';
import OutfitRegulerText from '../../components/Text/OutfitRegularText';
import {getProfileData} from '../../Redux/Actions/otherActions';
import {connect} from 'react-redux';
import {imageUrl} from '../../Api/configs';

class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: [],
    };
  }

  getData = () => {
    this.props.getProfile().then(res => {
      this.setState({profile: res?.profile[0]});
      console.log(res?.profile[0], 'PROFILE');
    });
  };

  componentDidMount() {
    this.getData();
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      this.getData();
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  renderbadges = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 8 * vw,
          marginTop: 2 * vh,
        }}>
        <View style={{}}>
          <View style={styles.circle}>
            <Image source={icons.qrcode} style={styles.imgicon} />
          </View>
          <OutfitSemiBoldText style={styles.points}>30</OutfitSemiBoldText>
          <OutfitLightText style={styles.pointstext}>
            Total Scans
          </OutfitLightText>
        </View>
        <View style={{marginLeft: 4 * vw}}>
          <View style={styles.circle}>
            <Image source={icons.bronze} style={styles.imgicon} />
          </View>
          <OutfitSemiBoldText style={styles.points}>05</OutfitSemiBoldText>
          <OutfitLightText style={styles.pointstext}>Bronze</OutfitLightText>
        </View>
        <View style={{marginLeft: 4 * vw}}>
          <View style={styles.circle}>
            <Image source={icons.silver} style={styles.imgicon} />
          </View>
          <OutfitSemiBoldText style={styles.points}>10</OutfitSemiBoldText>
          <OutfitLightText style={styles.pointstext}>Silver</OutfitLightText>
        </View>
        <View style={{marginLeft: 4 * vw}}>
          <View style={styles.circle}>
            <Image source={icons.gold} style={styles.imgicon} />
          </View>
          <OutfitSemiBoldText style={styles.points}>20</OutfitSemiBoldText>
          <OutfitLightText style={styles.pointstext}>Gold</OutfitLightText>
        </View>
      </View>
    );
  };
  render() {
    const {profile} = this.state;
    return (
      <View style={styles.container}>
        <ImageBackground
          source={backgrounds.grayBackground}
          style={styles.imgbg}
          resizeMode="cover"
          imageStyle={{width: 100 * vw}}>
          <ScrollView>
            <View
              style={{
                alignItems: 'center',
                marginTop: 5 * vh,
                paddingHorizontal: 4 * vw,
              }}>
              <Image
                source={
                  profile?.image
                    ? {
                        uri:
                          'https://custom-dev.onlinetestingserver.com/provo/public/storage/' +
                          profile?.image,
                      }
                    : icons.purpleprofile
                }
                style={styles.profile}
              />

              <OutfitMediumText style={styles.name}>
                {profile?.name}
              </OutfitMediumText>
              {/* {this.renderbadges()} */}
            </View>
            <View style={{marginTop: 5 * vh, paddingHorizontal: 8 * vw}}>
              <OutfitMediumText style={styles.emailtext}>
                Email Address
              </OutfitMediumText>
              <OutfitRegulerText style={styles.email}>
                {profile?.email}
              </OutfitRegulerText>
            </View>
            <View style={{marginTop: 3 * vh, paddingHorizontal: 8 * vw}}>
              <OutfitMediumText style={styles.emailtext}>Age</OutfitMediumText>
              <OutfitRegulerText style={styles.email}>
                {profile?.age}
              </OutfitRegulerText>
            </View>
            {/* <View style={{marginTop: 5 * vh, paddingHorizontal: 8 * vw}}>
              <OutfitMediumText style={styles.emailtext}>
                Billing Details{' '}
              </OutfitMediumText>
              <OutfitRegulerText style={styles.email}>
                ***************7193
              </OutfitRegulerText>
            </View> */}
            <View style={{marginTop: 3 * vh, paddingHorizontal: 8 * vw}}>
              <OutfitMediumText style={styles.emailtext}>
                Phone Number
              </OutfitMediumText>
              <OutfitRegulerText style={styles.email}>
                {profile?.phone}
              </OutfitRegulerText>
            </View>
            <View style={{marginTop: 3 * vh, paddingHorizontal: 8 * vw}}>
              <OutfitMediumText style={styles.emailtext}>
                Gender
              </OutfitMediumText>
              <OutfitRegulerText style={styles.email}>
                {profile?.gender}
              </OutfitRegulerText>
            </View>
            <View style={{marginTop: 5 * vh, paddingHorizontal: 8 * vw}}>
              <OutfitMediumText style={styles.emailtext}>
                Address
              </OutfitMediumText>
              <OutfitRegulerText style={styles.email}>
                {profile?.address}
              </OutfitRegulerText>
            </View>

            <View style={{alignItems: 'center', marginBottom: 2 * vh}}>
              <Button
                title="EDIT PROFILE"
                onPress={() => this.props.navigation.navigate('EditProfile')}
                btnContainer={{
                  marginTop: 2 * vh,
                  paddingHorizontal: 6 * vw,
                  width: 40 * vw,
                  height: 6 * vh,
                }}
              />
              <TouchableHOC
                onPress={() =>
                  this.props.navigation.navigate('ChangePassword')
                }>
                <OutfitRegulerText style={styles.editpw}>
                  Change Password
                </OutfitRegulerText>
              </TouchableHOC>
              {/* <TouchableHOC
                onPress={() =>
                  this.props.navigation.navigate('EditBillingDetails')
                }>
                <OutfitRegulerText style={styles.editpw}>
                  Edit Billing Details
                </OutfitRegulerText>
              </TouchableHOC> */}
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  // count: state.count,
});
const mapDispatchToProps = dispatch => {
  return {
    // explicitly forwarding arguments
    getProfile: () => dispatch(getProfileData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
