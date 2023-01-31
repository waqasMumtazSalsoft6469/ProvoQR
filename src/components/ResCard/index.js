import React from 'react';
import {Image, View, ImageBackground, TouchableOpacity} from 'react-native';
import styles from './styles';
import TouchableHOC from '../../components/Buttons/TouchableHOC';
import {vw, vh, calculateDistance} from '../../Utils/Units';
import {icons, sampleimage} from '../../assets/images';
import GilroyBold from '../../components/Text/GilroyBold';
import RateCard from '../RatingCard';
import RubikRegular from '../../components/Text/RubikRegular';
import RubikLight from '../../components/Text/RubikLight';
import OutfitSemiBoldText from '../Text/OutfitSemiBoldText';
import OutfitRegularText from '../Text/OutfitRegularText';
import {imageUrl} from '../../Api/configs';

class ProductItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ratings: [
        {
          rate: 'Gold',
        },
        {
          rate: 'Silver',
        },
        {
          rate: 'Brown',
        },
      ],
    };
  }

  renderHistoryRating = () => {
    return (
      <View
        style={[
          styles.row,
          {justifyContent: 'space-between', marginTop: vh * 1.5},
        ]}>
        <View style={styles.row}>
          <Image source={icons.moneyBag} style={styles.moneyBagIcon} />
          <OutfitRegularText style={{color: '#A56A43', fontSize: vh * 1.8}}>
            Total Spending : ${this.props.history?.totalspending}
          </OutfitRegularText>
        </View>
        <View style={styles.row}>
          <Image source={icons.box} style={styles.boxIcon} />
          <OutfitRegularText style={{color: '#FFB829', fontSize: vh * 1.8}}>
            No of Lootbox : {this.props.history?.no_of_lootbox}
          </OutfitRegularText>
        </View>
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
          marginTop: 1 * vh,
          width: 75 * vw,
        }}>
        {this.props?.item?.ratings?.map((item, index) => {
          return (
            <View>
              <RateCard item={item} index={index} />
            </View>
          );
        })}
      </View>
    );
  };

  renderBadge = val => {
    if (val === 'Gold') return icons.gold;
    else if (val === 'Silver') return icons.silver;
    else return icons.bronze;
  };

  rendercuisines = () => {
    return (
      <View
        style={{flexDirection: 'row', alignItems: 'center', marginTop: 1 * vh}}>
        <OutfitRegularText style={styles.cus}>
          {this.props?.item?.organ_profiles?.cuisines?.name}
        </OutfitRegularText>
      </View>
    );
  };
  render() {
    const location = this.props.location;
    // console.log('image', this.props.item?.image);
    return (
      <View>
        <TouchableHOC
          onPress={() => {
            if (this.props.onClick) {
              this.props.onClick();
            }
          }}>
          <Image
            source={
              this.props.item?.image
                ? {uri: imageUrl + this.props.item?.image}
                : sampleimage.placeholder
            }
            defaultSource={sampleimage.placeholder}
            style={[
              styles.imgcard,
              {width: this.props.history ? 90 * vw : 90 * vw},
            ]}
            // style={styles.cardimage}
          />
          {this.props.item.happyHours && (
            <View style={styles.indicator}>
              <OutfitSemiBoldText style={styles.happyFont}>
                ✓ Happy Hours
              </OutfitSemiBoldText>
            </View>
          )}
          {this.props.history && (
            <Image
              source={this.renderBadge(this.props.history.badge)}
              style={styles.badge}
            />
          )}
        </TouchableHOC>
        <View style={{paddingHorizontal: vw * 1.1}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: vh,
            }}>
            <OutfitSemiBoldText style={styles.name}>
              {this.props.item?.name}
            </OutfitSemiBoldText>
            <TouchableHOC onPress={this.props.viewmap} style={{}}>
              <OutfitRegularText style={styles.viewmap}>
                View On Map
              </OutfitRegularText>
            </TouchableHOC>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 1 * vh,
            }}>
            <Image source={icons.whiteloc} style={styles.imgicon} />
            <OutfitSemiBoldText style={styles.dis}>
              {calculateDistance(
                location?.latitude,
                location?.longitude,
                this.props.item.lat,
                this.props.item.lng,
              )?.toFixed(0)}{' '}
              km
            </OutfitSemiBoldText>
          </View>
          {/* {this.rendercuisines()} */}
        </View>

        {this.props.history ? this.renderHistoryRating() : this.renderratings()}
      </View>
    );
  }
}

export default ProductItem;
