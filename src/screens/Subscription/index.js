import React, {useEffect, useState} from 'react';
import {ImageBackground, View, Image, ScrollView} from 'react-native';
import {backgrounds, icons} from '../../assets/images';
import styles from './styles';
import SubsCard from '../../components/SubsCard';
import {vh, vw} from '../../Utils/Units';
import OutfitMediumText from '../../components/Text/OutfitMediumText';
import TouchableHOC from '../../components/Buttons/TouchableHOC';
import {subPackges, subscribePackage} from '../../Redux/Actions/authActions';
import {useDispatch} from 'react-redux';
import {showToast} from '../../Api/HelperFunction';
import AlertModal from '../../components/Popups/alertModal';
import {
  useNavigation,
  DrawerActions,
  StackActions,
} from '@react-navigation/native';

const Subscription = props => {
  const navigation = useNavigation();
  const [activeindex, setActiveIndex] = useState(-1);
  const [selectedPackage, setSelectedPackage] = useState(0);
  const [subscription, setSubscription] = useState([]);
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const token = props?.route?.params?.token;
  const dispatch = useDispatch();

  useEffect(() => {
    const {token} = props.route?.params;
    dispatch(subPackges(token)).then(res => {
      console.log(res?.package);
      setSubscription(res?.packages);
      // this.setState({subscription: res?.package});
    });
  }, []);

  const subScribeFreePackage = async id => {
    const data = {
      package_id: id,
    };
    // console.log('Free Package Data >>>', data);
    let res = await dispatch(subscribePackage(data, token));
    console.log('Free Package Response >>>>', res);
    showToast(res?.message);
    if (
      res?.message ===
      'You have successfully subscribed to a free trial subscription.'
    ) {
      setVisibleSuccess(true);
    }
    // dispatch(
    //   subscribePackage(data, token).then(res => {
    //     showToast(res?.message?.message);
    //     if (res?.success) {
    //       setVisibleSuccess(true);
    //     }
    //   }),
    // );
  };

  const handleSuccessPress = () => {
    navigation?.dispatch(DrawerActions.closeDrawer());
    navigation?.dispatch(StackActions.replace('MainNavigator'));
  };

  const rendersubscriptions = index => {
    return (
      <View style={{marginTop: 1 * vh, alignItems: 'center'}}>
        <SubsCard
          item={subscription[index]}
          success={(itemIndex, item) => {
            console.log('Selected Package >>>>', subscription[itemIndex]);
            if (subscription[itemIndex]?.price === 0) {
              console.log('Free Trail Package Condition');
              subScribeFreePackage(subscription[itemIndex]?.id);
            } else {
              props.navigation.navigate('Payment', {
                id: subscription[itemIndex]?.id,
                token,
                from: props?.route?.name,
              });
            }
          }}
          index={index}
          activeindex={activeindex}
        />
      </View>
    );
  };

  // console.log(
  //   'Subscription Packages ***>>>>>',
  //   subscription[subscription.length - 1],
  // );

  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgrounds.bgimage}
        style={styles.imgbg}
        resizeMode="cover"
        imageStyle={styles.imgbg}>
        <View style={{width: vw * 100, alignItems: 'center'}}>
          <OutfitMediumText style={styles.header}>
            Subscription Packages
          </OutfitMediumText>
          {/* <Image source={icons.alertRound} style={styles.alert} /> */}
        </View>
        <View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: vh * 3,
              height: vh * 10,
            }}>
            {subscription.length > 0 &&
              subscription.map((item, i) => {
                return (
                  <TouchableHOC
                    key={i}
                    onPress={() => setSelectedPackage(i)}
                    style={styles.headingHorizontal}>
                    <OutfitMediumText
                      style={
                        selectedPackage == i
                          ? styles.selectStyle
                          : styles.unselectedStyle
                      }>
                      {item.name == 'Free Trial'
                        ? 'Trail Package'
                        : `Package ${i + 1}`}
                    </OutfitMediumText>
                    {selectedPackage == i && <View style={styles.underLine} />}
                  </TouchableHOC>
                );
              })}
          </ScrollView>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {rendersubscriptions(selectedPackage)}
        </ScrollView>
        <AlertModal
          visible={visibleSuccess}
          setVisible={() => setVisibleSuccess(false)}
          icon={icons.popupTick}
          title={'Congratulations!'}
          description={'Trail package has been activated'}
          buttonTitle="OK"
          onButtonPress={handleSuccessPress}
        />
      </ImageBackground>
    </View>
  );
};

export default Subscription;
