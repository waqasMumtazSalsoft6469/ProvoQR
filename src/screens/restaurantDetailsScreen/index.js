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

class ResturentDetailScreen extends React.Component {
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
          <ScrollView
            style={{flex: 1}}
            contentContainerStyle={{height: vh * 130}}>
            <View style={{alignItems: 'center', marginTop: 3 * vh}}>
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
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View style={styles.catbox}>
                  <Image source={icons.burger} style={styles.catIcon} />
                  <OutfitRegularText style={styles.catText}>
                    Burger
                  </OutfitRegularText>
                </View>
                <Counter />
              </View>
              {this.rendercuisines()}
              {this.renderratings()}
            </View>
            <Dash
              style={{
                width: 100 * vw,
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: vh * 2,
                marginBottom: vh * -2,
              }}
              dashColor="#E9E9E9"
              dashLength={0}
              dashGap={1 * vh}
              dashStyle={{width: 2 * vw}}></Dash>
            <View
              style={{
                paddingHorizontal: 5 * vw,
                marginTop: 5 * vh,
                justifyContent: 'space-between',
              }}>
              <OutfitSemiBoldText style={styles.recomend}>
                Happy Hours Deals
              </OutfitSemiBoldText>
              <HomeCarouselConmponent />
            </View>
            <View style={{alignItems: 'center'}}>
              <Button
                title="LOOT BOX"
                onPress={() =>
                  this.props.navigation.navigate('LootBoxPaymentMethod', {
                    success: 0,
                  })
                }
                btnContainer={{marginTop: 5 * vh}}
              />
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}
export default ResturentDetailScreen;
