import React from 'react';
import {
  ImageBackground,
  View,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {backgrounds, icons, sampleimage, tabicons} from '../../assets/images';
import TouchableHOC from '../../components/Buttons/TouchableHOC';

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

class ResturentDetailScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: {},
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
      ratings: [],
    };
  }

  componentDidMount() {
    const id = this.props.route.params.id;
    const name = this.props.route.params.name;
    this.props.navigation.setOptions({
      title: name,
    });
    this.props.restaurantDetails({organisation_id: id}).then(res => {
      this.setState({
        details: res?.details,
        ratings: res?.rewards,
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

  renderRatings = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          // justifyContent: 'space-between',
          marginTop: 2 * vh,
          width: 100 * vw,
        }}>
        {this.state.ratings.map((item, index) => {
          return (
            <RateCard item={item} index={index} style={{marginLeft: vw * 5}} />
          );
        })}
      </View>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={backgrounds.grayBackground}
          style={styles.imgbg}
          resizeMode="cover"
          imageStyle={{width: 100 * vw, height: vh * 100}}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: vh * 10}}>
            <View style={{alignItems: 'center', marginTop: 3 * vh}}>
              <Image
                source={
                  this.state.details?.image
                    ? {uri: imageUrl + this.state.details?.image}
                    : sampleimage.placeholder
                }
                defaultSource={sampleimage.placeholder}
                style={styles.cardimg}
              />
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
                      this.props.navigation.navigate('ResturentMenu', {
                        id: this.state.details?.id,
                      })
                    }>
                    <OutfitRegularText style={styles.buttonText}>
                      Menu
                    </OutfitRegularText>
                  </TouchableHOC>
                  <TouchableHOC
                    onPress={() =>
                      this.props.navigation.navigate('RestaurantDirection', {
                        latitude: this.state.details?.lat,
                        longitude: this.state.details?.lng,
                      })
                    }>
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
            {this.renderRatings()}
            <Dash
              style={{
                width: 100 * vw,
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: vh * 3,
                // marginTop: vh * 2,
                // marginBottom: vh * -2,
              }}
              dashColor="#E9E9E9"
              dashLength={0}
              dashGap={1 * vh}
              dashStyle={{width: 2 * vw}}></Dash>
            {/* <View
              style={{
                paddingHorizontal: 5 * vw,
                marginTop: 5 * vh,
                justifyContent: 'space-between',
              }}>
              <OutfitSemiBoldText style={styles.recomend}>
                Happy Hours Deals
              </OutfitSemiBoldText>
              <HomeCarouselConmponent />
            </View> */}
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
                  ${this.state?.details?.provo_cash_price}
                </OutfitRegularText>
              </View>
            </View>
            <View style={{alignItems: 'center'}}>
              <Button
                title="LOOT BOX"
                onPress={() =>
                  this.props.navigation.navigate('LootBoxPaymentMethod', {
                    id: this.state.details?.id,
                    provoCash: this.state.details?.provo_cash_price,
                    lootBoxAmount: this.state?.details?.lootbox_amount,
                  })
                }
                btnContainer={{marginTop: 3 * vh}}
              />
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
    restaurantDetails: data => dispatch(restaurantDetails(data)),
    // signup: data => dispatch(userSignup(data)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResturentDetailScreen);
