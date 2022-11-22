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
import Dash from 'react-native-dash';
import HomeCarouselConmponent from '../../components/HomeCarouselComponent';

class ResturentCampaignDetailScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
      ratings: [
        {
          rate: 'Gold',
        },
        {
          rate: 'Silver',
        },
        {
          rate: 'Bronze',
        },
      ],
      campains: [
        {
          name: 'Loot Box A',
        },
        {
          name: 'Loot Box B',
        },
        {
          name: 'Loot Box C',
        },
        {
          name: 'Loot Box D',
        },
        {
          name: 'Loot Box E',
        },
        {
          name: 'Loot Box F',
        },
      ],
    };
  }
  rendercuisines = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 1.5 * vh,
        }}>
        {this.state.cusines.map((item, index) => {
          return (
            <OutfitRegularText style={styles.cus}>
              {item?.name},
            </OutfitRegularText>
          );
        })}
      </View>
    );
  };

  renderratings = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 2 * vh,
          width: 85 * vw,
        }}>
        {this.state.ratings.map((item, index) => {
          return (
            <View>
              <RateCard item={item} index={index} />
            </View>
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
          imageStyle={{width: 100 * vw}}>
          <ScrollView>
            <View style={{alignItems: 'center', marginTop: 5 * vh}}>
              <Image source={sampleimage.places} style={styles.cardimg} />
            </View>
            <View style={{paddingHorizontal: 6 * vw}}>
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
                      this.props.navigation.navigate('ResturentMenu')
                    }>
                    <OutfitRegularText style={styles.buttonText}>
                      Menu
                    </OutfitRegularText>
                  </TouchableHOC>
                  <TouchableHOC
                    onPress={() =>
                      this.props.navigation.navigate('MapStack', {
                        screen: 'ShowonMapScreen',
                      })
                    }>
                    <OutfitRegularText style={styles.buttonText}>
                      Get Direction
                    </OutfitRegularText>
                  </TouchableHOC>
                </View>
              </View>

              <OutfitLightText style={styles.rewtext}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since.
              </OutfitLightText>
              <View style={styles.catbox}>
                <Image source={icons.burger} style={styles.catIcon} />
                <OutfitRegularText style={styles.catText}>
                  Burger
                </OutfitRegularText>
              </View>

              {this.rendercuisines()}
              {this.renderratings()}
              <Dash
                style={{
                  width: 100 * vw,
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: vh * 2,
                  marginBottom: vh * 2,
                }}
                dashColor="#E9E9E9"
                dashLength={0}
                dashGap={1 * vh}
                dashStyle={{width: 2 * vw}}></Dash>
              <View style={{alignItems: 'center'}}>
                <OutfitSemiBoldText style={styles.recomend}>
                  Happy Hours Deals
                </OutfitSemiBoldText>
              </View>
              <HomeCarouselConmponent />
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingLeft: 5 * vw,
                marginTop: vh * 5,
              }}>
              <OutfitSemiBoldText style={styles.recomend}>
                Loot Boxes
              </OutfitSemiBoldText>
            </View>
            <View style={styles.campaignCon}>
              {this.state.campains.map((val, index) => {
                return (
                  <TouchableHOC
                    style={styles.campaign}
                    onPress={() =>
                      this.props.navigation.navigate('CampaignDetail')
                    }>
                    <OutfitMediumText>{val.name}</OutfitMediumText>
                  </TouchableHOC>
                );
              })}
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}
export default ResturentCampaignDetailScreen;
