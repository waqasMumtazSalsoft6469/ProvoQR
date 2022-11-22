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
import GilroyBold from '../../components/Text/GilroyBold';
import GilroyLight from '../../components/Text/GilroyLight';
import RubikLight from '../../components/Text/RubikLight';
import RubikRegular from '../../components/Text/RubikRegular';
import ThemeColors from '../../Utils/ThemeColors';
import TwoAlert from '../../components/Popups/TwoAlert';
import ImageButton from '../../components/Buttons/ImageButton';
import RateCard from '../../components/RatingCard';
import styles from './styles';
import {vh, vw} from '../../Utils/Units';
import OutfitRegularText from '../../components/Text/OutfitRegularText';
import OutfitLightText from '../../components/Text/OutfitLightText';
import OutfitMediumText from '../../components/Text/OutfitMediumText';
import OutfitSemiBoldText from '../../components/Text/OutfitSemiBoldText';
import Button from '../../components/Buttons/SimpleButton';
import Dash from 'react-native-dash';

class CampaignDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={backgrounds.grayBackground}
          style={styles.imgbg}
          resizeMode="cover"
          imageStyle={{width: 100 * vw}}>
          <ScrollView contentContainerStyle={{paddingBottom: vh * 2}}>
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
                  Loot Box Details
                </OutfitSemiBoldText>
              </View>

              <OutfitLightText style={styles.rewtext}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since.
              </OutfitLightText>
            </View>
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
            <View style={styles.rewardContainer}>
              <OutfitSemiBoldText>Rewards</OutfitSemiBoldText>
              <OutfitLightText style={styles.rewtext}>
                The reward in this campaign would contain of
              </OutfitLightText>
              <View style={styles.row}>
                <Image source={icons.rewardCup} style={styles.rewardCup} />
                <OutfitRegularText>Reward ABC</OutfitRegularText>
              </View>
              <View style={styles.row}>
                <Image source={icons.rewardCup} style={styles.rewardCup} />
                <OutfitRegularText>Reward EFG</OutfitRegularText>
              </View>
              <OutfitLightText style={styles.rewtext}>
                And many others...
              </OutfitLightText>
            </View>
            <View style={{alignItems: 'center'}}>
              <Button
                title="LOOT BOX"
                onPress={() =>
                  this.props.navigation.navigate('LootBoxPaymentMethod', {
                    success: 0,
                  })
                }
                btnContainer={{marginTop: 2 * vh}}
              />
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}
export default CampaignDetail;
