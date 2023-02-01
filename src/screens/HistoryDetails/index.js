import React from 'react';
import {ImageBackground, View, Image, ScrollView} from 'react-native';
import {backgrounds, icons, sampleimage} from '../../assets/images';
import TouchableHOC from '../../components/Buttons/TouchableHOC';
import styles from './styles';
import {vh, vw} from '../../Utils/Units';
import OutfitRegularText from '../../components/Text/OutfitRegularText';
import OutfitLightText from '../../components/Text/OutfitLightText';
import Button from '../../components/Buttons/SimpleButton';
import DetailList from '../../components/DetailList';
import {getHistoryDetail} from '../../Redux/Actions/otherActions';
import {connect} from 'react-redux';
import {imageUrl} from '../../Api/configs';

class HistoryDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: {},
      // cusines: [
      //   {
      //     name: 'Cuisine 01',
      //   },
      //   {
      //     name: 'Cuisine 02',
      //   },
      //   {
      //     name: 'Cuisine 03',
      //   },
      // ],
    };
  }
  getData = async () => {
    const id = this.props?.route?.params?.id;
    try {
      let data = {
        restaurant_id: id,
      };

      const response = await this.props.getHistoryDetail(data);

      console.log('response', response?.lootbox_amount);

      this.setState({
        response: response?.history,
      });
    } catch (error) {
      console.log('error', error);
    }
  };

  componentDidMount() {
    const name = this.props?.route?.params?.name;
    this.props?.navigation?.setOptions({
      title: name,
    });
    this.getData();
  }

  handleLootBoxPress = () => {
    this.props.navigation.navigate('LootBoxPaymentMethod', {
      id: this.state.response?.organisations?.id,
      provoCash: this.state.response?.provo_cash_price,
      lootBoxAmount: this.state.response?.lootbox_amount,
    });
  };
  handleMapPress = () => {
    this.props.navigation.navigate('RestaurantDirection', {
      latitude: this.state.response?.organisations?.lat,
      longitude: this.state.response?.organisations?.lng,
    });
  };

  // rendercuisines = () => {
  //   return (
  //     <View
  //       style={{
  //         flexDirection: 'row',
  //         alignItems: 'center',
  //         marginTop: 1.5 * vh,
  //       }}>
  //       {this.state.cusines.map((item, index) => {
  //         return (
  //           <OutfitRegularText style={styles.cus}>
  //             {item?.name},
  //           </OutfitRegularText>
  //         );
  //       })}
  //     </View>
  //   );
  // };

  renderBadge = val => {
    if (val === 'Gold') return icons.gold;
    else if (val === 'Silver') return icons.silver;
    else return icons.bronze;
  };

  renderRatings = () => {
    let ratings = [
      {
        rate: `Total Spending: $${
          this.state.response?.totalspending
            ? this.state.response?.totalspending
            : 0
        }`,
      },
      {
        rate: `No of Lootbox : ${
          this.state.response?.no_of_lootbox
            ? this.state.response?.no_of_lootbox
            : 0
        }`,
      },
      {
        rate: `No of Rewards : ${
          this.state.response?.no_of_rewards
            ? this.state.response?.no_of_rewards
            : 0
        }`,
      },
    ];
    return (
      <View style={styles.lowerContainer}>
        {/* <View
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
        </View> */}

        {ratings.map((item, index) => {
          return (
            <DetailList
              item={item}
              index={index}
              style={{marginVertical: vh * 1}}
            />
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
          imageStyle={{width: 100 * vw, height: 100 * vh}}>
          <ScrollView
            contentContainerStyle={{paddingBottom: vh * 5}}
            showsVerticalScrollIndicator={false}>
            <View
              style={{
                marginHorizontal: vw * 5,
                alignItems: 'center',
                marginTop: 3 * vh,
                borderRadius: vh * 3,
              }}>
              <Image
                source={
                  this.state.response?.organisations?.image
                    ? {
                        uri:
                          imageUrl + this.state.response?.organisations?.image,
                      }
                    : sampleimage.placeholder
                }
                style={styles.cardimg}
              />
              <Image
                source={this.renderBadge(this.state.response.badge)}
                style={styles.badge}
              />
            </View>
            <View style={{paddingHorizontal: 6 * vw}}>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 2 * vh,
                  justifyContent: 'space-between',
                }}>
                <OutfitRegularText style={styles.recomend}>
                  About Restaurant
                </OutfitRegularText>
                <View style={styles.menuContainer}>
                  <TouchableHOC onPress={this.handleMapPress}>
                    <OutfitRegularText style={styles.buttonText}>
                      View on Map
                    </OutfitRegularText>
                  </TouchableHOC>
                </View>
              </View>

              <OutfitLightText style={styles.rewtext}>
                {this.state.response?.organisations?.organ_profiles?.about}
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
                        this.state.response?.organisations?.organ_profiles
                          ?.categories?.image,
                    }}
                    style={styles.catIcon}
                  />
                  <OutfitRegularText style={styles.catText}>
                    {'  '}
                    {
                      this.state.response?.organisations?.organ_profiles
                        ?.categories?.name
                    }
                  </OutfitRegularText>
                </View>
                {/* <Counter /> */}
              </View>
              {/* {this.rendercuisines()} */}
              {this.renderRatings()}
            </View>
            {/* <Dash
              style={{
                width: 100 * vw,
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: vh * 3,
                marginBottom: vh * -2,
              }}
              dashColor="#E9E9E9"
              dashLength={0}
              dashGap={1 * vh}
              dashStyle={{width: 2 * vw}}></Dash> */}
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
            {!this.state?.response?.organisations?.is_lootbox_purchase && (
              <View style={{alignItems: 'center'}}>
                <Button
                  title="LOOT BOX"
                  onPress={this.handleLootBoxPress}
                  btnContainer={{marginTop: 5 * vh}}
                />
              </View>
            )}
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
    getHistoryDetail: data => dispatch(getHistoryDetail(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HistoryDetail);
