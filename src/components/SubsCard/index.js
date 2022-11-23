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

class HomeCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _renderitem = ({item, index}) => {
    return (
      <>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 8 * vw,
            marginTop: vh,
          }}>
          <Image
            source={icons.tick}
            style={styles.tickicon}
            resizeMode="contain"
          />
          <OutfitMediumText style={styles.labeltext}>
            {item.label}
          </OutfitMediumText>
        </View>
        <Dash
          style={{
            width: 30 * vw,
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: vh * 2,
            marginBottom: vh * 2,
          }}
          dashColor="#E9E9E9"
          dashLength={0}
          dashGap={1 * vh}
          dashStyle={{width: 2 * vw}}></Dash>
      </>
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
    return (
      <View style={[styles.container, this.props.con]}>
        <ImageBackground
          source={backgrounds.redBg}
          style={styles.footerimage}
          imageStyle={[styles.footerimagebg]}>
          <View style={{alignItems: 'center'}}>
            <View style={{flexDirection: 'row'}}>
              {this.props.item?.price !== 0 ? (
                <>
                  <OutfitSemiBoldText style={styles.dollar}>
                    $
                  </OutfitSemiBoldText>

                  <OutfitSemiBoldText style={styles.amount}>
                    {this.props.item.price}
                  </OutfitSemiBoldText>
                </>
              ) : (
                <OutfitSemiBoldText style={styles.amount1}>
                  {this.props.item.price}
                </OutfitSemiBoldText>
              )}
            </View>

            <OutfitRegularText style={styles.month}>
              {this.props.item.validity}
            </OutfitRegularText>
          </View>
          <View style={styles.innerCard}>
            <OutfitMediumText style={styles.title}>
              {this.props.item?.title}
            </OutfitMediumText>

            <View style={{alignItems: 'center'}}>
              {this.props.item?.offers && (
                <FlatList
                  data={this.props.item?.offers}
                  style={{marginTop: 2 * vh}}
                  renderItem={this._renderitem}
                />
              )}
            </View>
            <Button
              title="SELECT PLAN"
              btnContainer={styles.btnContainer}
              onPress={() =>
                this.props.success(this.props.index, this.props.item)
              }
            />
          </View>
        </ImageBackground>
      </View>
    );
  }
}
export default HomeCard;
