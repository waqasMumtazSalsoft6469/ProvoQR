import React from 'react';
import {ImageBackground, View, Image, TextInput, FlatList} from 'react-native';
import {backgrounds, icons} from '../../assets/images';
import {vh, vw} from '../../Utils/Units';
import styles from './styles';
import TouchableHoc from '../../components/Buttons/TouchableHOC';
import ThemeColors from '../../Utils/ThemeColors';
import OutfitMediumText from '../Text/OutfitMediumText';
import Dash from 'react-native-dash';
import OutfitSemiBoldText from '../Text/OutfitSemiBoldText';
import OutfitRegularText from '../Text/OutfitRegularText';
import Button from '../Buttons/SimpleButton';

class SubCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _renderitem = (item, index) => {
    const items = this.props.item;
    return (
      <View key={index}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 8 * vw,
          }}>
          <Image
            source={icons.tick}
            style={styles.tickicon}
            resizeMode="contain"
          />
          <OutfitMediumText style={styles.labeltext}>
            {item.name}
          </OutfitMediumText>
        </View>
        {items.length - 1 < index && (
          <Dash
            style={styles.dash}
            dashColor="#E9E9E9"
            dashLength={0}
            dashGap={1 * vh}
            dashStyle={{width: 2 * vw}}></Dash>
        )}
      </View>
    );
  };
  setactive = () => {
    if (this.props.activeindex == this.props.index) {
      return true;
    } else {
      return false;
    }
  };

  render() {
    console.log('PRICE PACKAGE ***>>>', this.props.item?.price);
    return (
      <View style={[styles.container, this.props.con]}>
        <ImageBackground
          source={backgrounds.redBg}
          style={styles.footerimage}
          imageStyle={[styles.footerimagebg]}>
          <View style={{alignItems: 'center'}}>
            <View style={{flexDirection: 'row'}}>
              <OutfitSemiBoldText style={styles.dollar}>$</OutfitSemiBoldText>
              <OutfitSemiBoldText style={styles.amount}>
                {this.props.item?.price}
              </OutfitSemiBoldText>
              {/* {this.props.item?.price !== 0 ? (
                <>
                  <OutfitSemiBoldText style={styles.dollar}>
                    $
                  </OutfitSemiBoldText>
                  <OutfitSemiBoldText style={styles.amount}>
                    {this.props.item?.price}
                  </OutfitSemiBoldText>
                </>
              ) : (
                <OutfitSemiBoldText style={styles.amount1}>
                  {this.props.item?.price}
                </OutfitSemiBoldText>
              )} */}
            </View>

            <OutfitRegularText style={styles.month}>
              {this.props.item?.duration}
            </OutfitRegularText>
          </View>
          <View style={styles.innerCard}>
            <OutfitMediumText style={styles.title}>
              {this.props.item?.name}
            </OutfitMediumText>

            <View style={{alignItems: 'center'}}>
              {this.props.item?.features &&
                this.props.item?.features.map((values, indx) =>
                  this._renderitem(values, indx),
                )}
              {/* {this.props.item?.features && (
                <FlatList
                  data={this.props.item?.features}
                  style={{marginTop: 2 * vh}}
                  renderItem={this._renderitem}
                />
              )} */}
            </View>
            <View style={styles.coins}>
              <OutfitMediumText>Free Coins :</OutfitMediumText>
              <OutfitMediumText style={{marginLeft: 5}}>
                {parseInt(this.props?.item?.provo_cash_price)}
              </OutfitMediumText>
            </View>
            <Button
              title="SELECT PLAN"
              btnContainer={styles.btnContainer}
              onPress={() =>
                this.props.success(this.props?.index, this.props?.item)
              }
            />
          </View>
        </ImageBackground>
      </View>
    );
  }
}
export default SubCard;
