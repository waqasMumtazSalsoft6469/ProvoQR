import React from 'react';
import {
  ImageBackground,
  View,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {backgrounds, icons, sampleimage, tabicons} from '../../assets/images';
import TouchableHOC from '../../components/Buttons/TouchableHOC';

import ImageView from 'react-native-image-viewing';

import RateCard from '../../components/RatingCard';
import styles from './styles';
import {vh, vw} from '../../Utils/Units';
import OutfitRegularText from '../../components/Text/OutfitRegularText';
import OutfitLightText from '../../components/Text/OutfitLightText';
import OutfitMediumText from '../../components/Text/OutfitMediumText';
import OutfitSemiBoldText from '../../components/Text/OutfitSemiBoldText';
import Button from '../../components/Buttons/SimpleButton';
import HomeCarouselConmponent from '../../components/HomeCarouselComponent';
import Dash from 'react-native-dash';
import Counter from '../../components/Counter';
import {restaurantDetails} from '../../Redux/Actions/otherActions';
import {connect} from 'react-redux';
import {imageUrl} from '../../Api/configs';
import {showToast} from '../../Api/HelperFunction';

class ResturentDetailScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: {},
      modal: false,
      cusines: [
        {
          name: 'Cuisine 01',
        },
        {
          name: 'Cuisine 02',
        },
        {
          name: 'Cuisine 03',
        },
      ],
    };
  }

  componentDidMount() {
    const id = this.props.route.params.id;
    // alert(`Organization ID >> ${id}`);
    const name = this.props.route.params.name;
    this.props.navigation.setOptions({
      title: name,
    });
    this.props.restaurantDetails({organisation_id: id}).then(res => {
      // console.log(
      //   'Resturants Detail Response Data New 11 ******>>>>>>>>>',
      //   res.details,
      // );
      this.setState({
        details: res?.details,
      });
    });
  }

  // rendercuisines = () => {
  //   return (
  //     <View
  //       style={{
  //         flexDirection: 'row',
  //         alignItems: 'center',
  //         marginTop: 1.5 * vh,
  //       }}>
  //       {/* {this.state.cusines.map((item, index) => {
  //         return (
  //           <OutfitRegularText style={styles.cus}>
  //             {item?.name},
  //           </OutfitRegularText>
  //         );
  //       })} */}
  //       <OutfitRegularText style={styles.cus}>
  //         {this.state.details?.organ_profiles?.cuisines?.name}
  //       </OutfitRegularText>
  //     </View>
  //   );
  // };

  handleMapDirectionPress = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${this.state?.details?.lat},${this.state?.details?.lng}&dir_action=navigate`;
    const supported = Linking.canOpenURL(url);
    if (supported) {
      Linking.openURL(url);
    } else {
      showToast(`Don't know how to open this URL: ${url}`);
    }
  };

  handleLootBoxPress = () => {
    // console.log('Restaurant IDD >>>', this.state.details?.id);
    // return;
    this.props?.navigation?.navigate('LootboxTierScreen', {
      id: this.state.details?.id,
      lootBoxes: this.state?.details?.lootboxes,
      provoCash: this.state.details?.provo_cash_price,
      lootBoxAmount: this.state?.details?.lootbox_amount,
    });
  };

  handleHappyHourMenuPress = () => {
    // this.props?.navigation?.navigate('HappyHourMenuScreen', {
    //   deal: this.state?.details?.happy_hour_deals,
    // });
    this.setState({modal: true});
  };

  renderRatings = () => {
    // console.log('tiers', this.state?.details?.lootboxes);
    return (
      <View style={styles.tiersContainer}>
        {this.state?.details?.lootboxes?.map((item, index) => {
          return (
            <RateCard item={item} index={index} style={{marginLeft: vw * 5}} />
          );
        })}
      </View>
    );
  };

  handleCloseModal = () => {
    this.setState({modal: false});
  };

  CarouselFooterComponent = ({imageIndex}) => {
    return (
      <View style={styles.footerContainer}>
        <OutfitRegularText style={styles.footerText}>
          {imageIndex + 1} /{' '}
          {this?.state?.details?.happy_hour_deals?.happyhourmenus?.length}
        </OutfitRegularText>
      </View>
    );
  };

  render() {
    // console.log('res details', this.state.details);
    return (
      <View style={styles.container}>
        <ImageBackground
          source={backgrounds.grayBackground}
          style={styles.imgbg}
          resizeMode="cover"
          imageStyle={{width: 100 * vw, height: vh * 100}}>
          {console.log('Resturant Image Path >>>', this.state.details?.image)}
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: vh * 10}}>
            {/* <OutfitSemiBoldText style={styles.headingText}>
              {this.props?.route?.params?.name}
            </OutfitSemiBoldText> */}
            <View style={styles.imageContainer}>
              <ImageBackground
                source={
                  this.state.details?.image
                    ? {uri: imageUrl + this.state.details?.image}
                    : sampleimage.placeholder
                }
                defaultSource={sampleimage.placeholder}
                style={styles.cardimg}>
                {this?.state?.details?.happy_hour_deals?.happyhourmenus
                  ?.length > 0 && (
                  // <View style={styles.happyHourIconContainer}>
                  <Image
                    source={icons.happyHourIcon}
                    style={styles.happyHourIcon}
                  />
                  // </View>
                )}
              </ImageBackground>
              {/* <Image
                source={
                  this.state.details?.image
                    ? {uri: imageUrl + this.state.details?.image}
                    : sampleimage.placeholder
                }
                defaultSource={sampleimage.placeholder}
                style={styles.cardimg}
              /> */}
            </View>
            <View style={{paddingHorizontal: 5 * vw}}>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 2 * vh,
                  justifyContent: 'space-between',
                }}>
                <OutfitSemiBoldText style={styles.recomend}>
                  About Restaurant
                </OutfitSemiBoldText>
                <View style={styles.menuContainer}>
                  <TouchableHOC
                    onPress={() =>
                      // console.log(
                      //   'Resturant Detail >>>>>',
                      //   this.state.details,
                      // )
                      this.props.navigation.navigate('ResturentMenu', {
                        id: this.state.details?.id,
                      })
                    }>
                    <OutfitRegularText style={styles.buttonText}>
                      Menu
                    </OutfitRegularText>
                  </TouchableHOC>
                  <TouchableHOC onPress={this.handleMapDirectionPress}>
                    <OutfitRegularText style={styles.buttonText}>
                      Get Direction
                    </OutfitRegularText>
                  </TouchableHOC>
                </View>
              </View>

              <OutfitLightText style={styles.rewtext}>
                {this.state.details?.organ_profiles?.about}
              </OutfitLightText>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View style={styles.catbox}>
                  <Image
                    source={{
                      uri:
                        imageUrl +
                        this.state.details?.organ_profiles?.categories?.image,
                    }}
                    style={styles.catIcon}
                  />
                  <OutfitRegularText style={styles.catText}>
                    {'  '}
                    {this.state.details?.organ_profiles?.categories?.name}
                  </OutfitRegularText>
                </View>
                {/* <Counter /> */}
              </View>
              {/* {this.rendercuisines()} */}
            </View>
            {/* {console.log(
              'Loooot Boooooxxxx Detail ***>>>>>',
              this.state?.details.lootboxes,
            )} */}
            {this.state?.details?.lootboxes?.length > 0 && this.renderRatings()}
            <Dash
              style={{
                width: 100 * vw,
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: vh * 2,
                // marginTop: vh * 2,
                // marginBottom: vh * -2,
              }}
              dashColor="#E9E9E9"
              dashLength={0}
              dashGap={1 * vh}
              dashStyle={{width: 2 * vw}}></Dash>

            {this.state?.details?.lootboxes?.length > 0 && (
              <View style={styles.outerContainer}>
                <View style={styles.priceContainer}>
                  <OutfitSemiBoldText style={styles.priceHeadingText}>
                    By Card:
                  </OutfitSemiBoldText>
                  <OutfitRegularText style={styles.priceHeadingText}>
                    ${this.state?.details?.lootbox_amount}
                  </OutfitRegularText>
                </View>
                <View style={styles.priceContainer}>
                  <OutfitSemiBoldText style={styles.priceHeadingText}>
                    By ProvoCash:
                  </OutfitSemiBoldText>
                  <OutfitRegularText style={styles.priceHeadingText}>
                    {`${this.state?.details?.provo_cash_price} coin`}
                  </OutfitRegularText>
                </View>
              </View>
            )}
            {this.state?.details?.lootboxes?.length > 0 && (
              <View style={{alignItems: 'center', marginVertical: vh * 3}}>
                <Button title="LootBoxes" onPress={this.handleLootBoxPress} />
              </View>
            )}
            {this?.state?.details?.happy_hour_deals?.happyhourmenus?.length >
            0 ? (
              <View
                style={{
                  // marginTop: vh * 3,
                  paddingHorizontal: 5 * vw,
                  justifyContent: 'space-between',
                }}>
                <OutfitSemiBoldText style={styles.recomend}>
                  Happy Hours Deals Test
                </OutfitSemiBoldText>
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() =>
                    this.handleHappyHourMenuPress(
                      this?.state?.details?.happy_hour_deals,
                    )
                  }
                  style={styles.happyHourBannerImageContainer}>
                  {/* {console.log(
                    'Happ Hour Image **>>>',
                    this?.state?.details?.happy_hour_deals?.banner_image,
                  )} */}
                  <Image
                    source={{
                      uri:
                        imageUrl +
                        this?.state?.details?.happy_hour_deals?.banner_image,
                    }}
                    style={styles.happyHourBannerImage}
                  />
                </TouchableOpacity>
                {/* <HomeCarouselConmponent /> */}
              </View>
            ) : (
              <View
                style={{
                  paddingHorizontal: 5 * vw,
                  paddingVertical: 5 * vh,
                  alignItems: 'center',
                }}>
                <OutfitSemiBoldText style={styles.recomend}>
                  Happy Hour not added yet
                </OutfitSemiBoldText>
              </View>
            )}
          </ScrollView>
        </ImageBackground>
        <ImageView
          images={this?.state?.details?.happy_hour_deals?.happyhourmenus?.map(
            item => ({
              uri: imageUrl + item?.image,
            }),
          )}
          imageIndex={0}
          visible={this.state.modal}
          onRequestClose={this.handleCloseModal}
          FooterComponent={this.CarouselFooterComponent}
          presentationStyle="overFullScreen"
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  // count: state.count,
  token: state.SessionReducer.token,
});
const mapDispatchToProps = dispatch => {
  return {
    // explicitly forwarding arguments
    restaurantDetails: data => dispatch(restaurantDetails(data)),
    // signup: data => dispatch(userSignup(data)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResturentDetailScreen);
