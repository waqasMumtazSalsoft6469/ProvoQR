import React, {useEffect} from 'react';
import {
  ImageBackground,
  Image,
  View,
  Animated,
  Easing,
  ScrollView,
} from 'react-native';
import {backgrounds, icons, sampleimage} from '../../assets/images';
import styles from './styles';
import TouchableHOC from '../../components/Buttons/TouchableHOC';
import {vh, vw} from '../../Utils/Units';
import AnimatedLottieView from 'lottie-react-native';
import celebAnim from './celebAnim.json';
import OutfitRegularText from '../../components/Text/OutfitRegularText';
import OutfitSemiBoldText from '../../components/Text/OutfitSemiBoldText';
import Button from '../../components/Buttons/SimpleButton';
import ThemeColors from '../../Utils/ThemeColors';
import OutfitMediumText from '../../components/Text/OutfitMediumText';

const RedeemRewardScreen = props => {
  const code = props?.route?.params?.code;
  const restaurant = props?.route?.params?.restaurant;

  const handleRewardBtnPress = () => {
    let sendingData = {
      id: restaurant?.organisation_id,
      lootBoxes: restaurant?.organisations?.lootboxes,
      provoCash: restaurant?.provo_cash_price,
      lootBoxAmount: restaurant?.lootbox_amount,
    };
    console.log('sendingData >>', sendingData);
    // return;
    props?.navigation.navigate('LootboxTierScreen', {
      id: restaurant?.organisation_id,
      lootBoxes: restaurant?.organisations?.lootboxes,
      provoCash: restaurant?.provo_cash_price,
      lootBoxAmount: restaurant?.lootbox_amount,
    });
  };

  return (
    <ImageBackground source={backgrounds.redBg}>
      <TouchableHOC
        onPress={() => props.navigation.goBack()}
        style={{
          zIndex: 999,
          position: 'absolute',
          top: vh * 6,
          left: vw * 8,
        }}>
        <Image source={icons.backarrow} style={styles.back} />
      </TouchableHOC>
      <ScrollView contentContainerStyle={{paddingBottom: vh * 10}}>
        <View style={styles.container}>
          <AnimatedLottieView
            source={celebAnim}
            autoPlay={true}
            loop={true}
            style={{
              height: 100 * vh,
              width: 100 * vw,
              backgroundColor: 'transparent',
              position: 'absolute',
              top: 0,
              left: 0,
              //   zIndex: 99999,
            }}
          />
          <Image source={sampleimage.openBox} style={styles.openBox} />

          <OutfitSemiBoldText style={styles.congText}>
            Hurray!
          </OutfitSemiBoldText>
          <OutfitRegularText style={styles.whiteText}>
            You have redeemed your reward.
          </OutfitRegularText>
          <OutfitRegularText style={styles.whiteCodeText}>
            Your code is{' '}
            <OutfitRegularText style={styles.codeText}>
              {code}
            </OutfitRegularText>
          </OutfitRegularText>

          <OutfitSemiBoldText style={styles.headingText}>
            Reward Info
          </OutfitSemiBoldText>
          <OutfitMediumText style={styles.rewardText}>
            {restaurant?.my_win_lootbox?.menu?.name}
          </OutfitMediumText>
          <OutfitSemiBoldText style={styles.headingText}>
            Restaurant Details
          </OutfitSemiBoldText>
          <OutfitMediumText style={styles.rewardText}>
            {restaurant?.organisations?.name}
          </OutfitMediumText>
          <OutfitMediumText style={styles.rewardText}>
            {restaurant?.organisations?.address}
          </OutfitMediumText>

          <Button
            title="OK"
            onPress={handleRewardBtnPress}
            btnContainer={{
              marginTop: vh * 3,
              borderColor: ThemeColors.white,
              width: vw * 40,
            }}
            labelStyle={{color: ThemeColors.white}}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default RedeemRewardScreen;
