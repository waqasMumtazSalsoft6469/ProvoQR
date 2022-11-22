import React from 'react';
import {ImageBackground, View, Image, Text, FlatList} from 'react-native';
import {backgrounds, icons, sampleimage} from '../../assets/images';
import MapView, {
  Polyline,
  Marker,
  Callout,
  CalloutSubview,
} from 'react-native-maps';
import styles from './styles';
import OutfitRegularText from '../../components/Text/OutfitRegularText';
import OutfitLightText from '../../components/Text/OutfitLightText';
import OutfitMediumText from '../../components/Text/OutfitMediumText';
import OutfitSemiBoldText from '../../components/Text/OutfitSemiBoldText';
import TouchableHOC from '../../components/Buttons/TouchableHOC';
import Button from '../../components/Buttons/SimpleButton';
import DetailList from '../../components/DetailList';
import {vh, vw} from '../../Utils/Units';
import MainInput from '../../components/Input/MainInput';
import BottomSheetWrapper from '../../components/BottomSheetWrapper';
import Dash from 'react-native-dash';
import HomeCarouselConmponent from '../../components/HomeCarouselComponent';
import {ScrollView} from 'react-native-gesture-handler';

class MapScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resturentModal: false,
      campaignModal: false,
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
          rate: 'Total Spending : $230',
        },
        {
          rate: 'No of Lootbox : 23',
        },
        {
          rate: 'No of Rewards : 140',
        },
      ],
      categories: [
        {
          name: 'Burger',
          icon: icons.burger,
        },
        {
          name: 'Pizza',
          icon: icons.pizza,
        },
        {
          name: 'Salad',
          icon: icons.salad,
        },
        {
          name: 'Burger',
          icon: icons.burger,
        },
        {
          name: 'Pizza',
          icon: icons.pizza,
        },
        {
          name: 'Salad',
          icon: icons.salad,
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
      <View style={styles.lowerContainer}>
        <View
          style={{
            justifyContent: 'space-between',
            width: 42 * vw,
            height: vh * 10,
          }}>
          <OutfitSemiBoldText>Last Scan</OutfitSemiBoldText>
          <View style={styles.row}>
            <Image source={icons.calender} style={styles.icon} />
            <OutfitRegularText>02.02.2022</OutfitRegularText>
          </View>
          <View style={styles.row}>
            <Image source={icons.clock} style={styles.icon} />
            <OutfitRegularText>09:00 pm</OutfitRegularText>
          </View>
        </View>
        <View
          style={{
            //   flexDirection: 'row',
            //   alignItems: 'center',
            justifyContent: 'space-between',
            width: 55 * vw,
            height: vh * 13,
          }}>
          {this.state.ratings.map((item, index) => {
            return (
              <View>
                <DetailList item={item} index={index} />
              </View>
            );
          })}
        </View>
      </View>
    );
  };

  getMarkersArray = () => {
    let markers = [];

    for (var i = 0; i < 20; i++) {
      markers.push({
        latitude:
          Math.random() * (37.8025259 - (37.8025259 - 0.1)) +
          37.8025259 -
          0.002,
        longitude:
          Math.random() * (-122.4351431 - (-122.4351431 - 0.1)) +
          -122.4351431 -
          0.002,
      });
    }

    return markers;
  };

  rendercategoryitem = ({item, index}) => {
    return (
      <View style={{marginBottom: vh, marginRight: 4 * vw}}>
        <View style={styles.viewcon}>
          <Image source={item.icon} style={styles.burgerIcon} />
          <OutfitSemiBoldText style={styles.catname}>
            {item.name}
          </OutfitSemiBoldText>
        </View>
      </View>
    );
  };

  renderMarkers = () => {
    let markers = this.getMarkersArray();

    if (markers.length == 0) {
      return null;
    }

    return React.Children.toArray(
      markers?.map(location => {
        return (
          <Marker
            draggable={false}
            coordinate={{
              latitude: location?.latitude,
              longitude: location?.longitude,
            }}
            image={icons.marker}></Marker>
        );
      }),
    );
  };

  render() {
    return (
      <View style={styles.container}>
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
            }}>
            {this.renderMarkers()}
          </MapView>

          {/* <View style={{ alignItems: 'center', }}> */}

          <View style={styles.box}>
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: vw * 85,
              }}>
              <MainInput
                placeholder="Search Here..."
                // style={styles.field}
                ref={r => (this.email = r)}
                // onSubmitEditing={() => this.pw.onFocus()}
                leftIcon={icons.search}
                style={{width: vw * 70}}
              />
              <View style={styles.filterBg}>
                <Image source={icons.filter} style={styles.filter} />
              </View>
            </View>
          </View>

          <View style={styles.mapButtonContainer}>
            <TouchableHOC onPress={() => this.setState({resturentModal: true})}>
              <Image source={icons.mapButton} style={styles.buttonIcon} />
            </TouchableHOC>
          </View>

          {/* </View> */}
          <BottomSheetWrapper
            noBackDrop
            visible={this.state.resturentModal}
            setVisible={() => this.setState({resturentModal: false})}>
            <ScrollView style={styles.imgbgs}>
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
                        this.props.navigation.navigate('MapStack', {
                          screen: 'ShowonMapScreen',
                        })
                      }>
                      <OutfitRegularText style={styles.buttonText}>
                        View on Map
                      </OutfitRegularText>
                    </TouchableHOC>
                  </View>
                </View>

                <OutfitLightText style={styles.rewtext}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since.
                </OutfitLightText>
                <View style={styles.catbox}>
                  <Image source={icons.burger} style={styles.catIcon} />
                  <OutfitRegularText style={styles.catText}>
                    Burger
                  </OutfitRegularText>
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
                  // marginBottom: vh * 2,
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
                  title="Loot Box"
                  onPress={() => {
                    this.setState({resturentModal: false, campaignModal: true});
                  }}
                  btnContainer={{marginTop: 5 * vh}}
                />
              </View>
            </ScrollView>
          </BottomSheetWrapper>
          <BottomSheetWrapper
            noBackDrop
            visible={this.state.campaignModal}
            setVisible={() => this.setState({campaignModal: false})}>
            <View style={styles.categorybox}>
              <View style={{flexDirection: 'row', paddingLeft: 5 * vw}}>
                <OutfitSemiBoldText style={styles.recomend}>
                  Categories
                </OutfitSemiBoldText>
              </View>

              <FlatList
                data={this.state.categories}
                showsHorizontalScrollIndicator={false}
                style={{marginTop: vh, paddingLeft: 4 * vw}}
                renderItem={this.rendercategoryitem}
                horizontal={true}
              />
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
              <View
                style={{
                  flexDirection: 'row',
                  paddingLeft: 5 * vw,
                  marginTop: vh * 1,
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
                      onPress={() => {
                        this.setState({campaignModal: false});
                        this.props.navigation.navigate(
                          'ResturentCampaignDetails',
                        );
                      }}>
                      <OutfitMediumText>{val.name}</OutfitMediumText>
                    </TouchableHOC>
                  );
                })}
              </View>
            </View>
          </BottomSheetWrapper>
        </ImageBackground>
      </View>
    );
  }
}
export default MapScreen;
