import React from 'react';
import {Image, View, ImageBackground, TouchableOpacity} from 'react-native';
import styles from './styles';
import TouchableHOC from '../../components/Buttons/TouchableHOC';
import {vw, vh} from '../../Utils/Units';
import {icons, sampleimage} from '../../assets/images';
import GilroyBold from '../../components/Text/GilroyBold';
import RateCard from '../RatingCard';
import RubikRegular from '../../components/Text/RubikRegular';
import RubikLight from '../../components/Text/RubikLight';
import OutfitSemiBoldText from '../Text/OutfitSemiBoldText';
import OutfitRegularText from '../Text/OutfitRegularText';

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
            Total Spending : $230
          </OutfitRegularText>
        </View>
        <View style={styles.row}>
          <Image source={icons.box} style={styles.boxIcon} />
          <OutfitRegularText style={{color: '#FFB829', fontSize: vh * 1.8}}>
            No of Lootbox : 23
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
        {this.props?.item?.ratings.map((item, index) => {
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
    if (val == 1) return icons.gold;
    else if (val == 2) return icons.silver;
    else return icons.bronze;
  };

  rendercuisines = () => {
    return (
      <View
        style={{flexDirection: 'row', alignItems: 'center', marginTop: 1 * vh}}>
        {this.props?.item?.cusines.map((item, index) => {
          return (
            <OutfitRegularText style={styles.cus}>
              {item?.name},
            </OutfitRegularText>
          );
        })}
      </View>
    );
  };
  render() {
    return (
      <View>
        <TouchableHOC
          onPress={() => {
            if (this.props.onClick) {
              this.props.onClick();
            }
          }}>
          <Image
            source={this.props.item?.image}
            style={[
              styles.imgcard,
              {width: this.props.history ? 90 * vw : 80 * vw},
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
              source={this.renderBadge(this.props.item.enum)}
              style={styles.badge}
            />
          )}
        </TouchableHOC>
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
            {this.props.item?.distance}
          </OutfitSemiBoldText>
        </View>

        {this.rendercuisines()}

        {this.props.history ? this.renderHistoryRating() : this.renderratings()}
      </View>
    );
  }
}

export default ProductItem;
