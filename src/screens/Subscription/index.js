import React, {useEffect, useState} from 'react';
import {ImageBackground, View, Image, ScrollView} from 'react-native';
import {backgrounds, icons} from '../../assets/images';
import styles from './styles';
import SubsCard from '../../components/SubsCard';
import {vh, vw} from '../../Utils/Units';
import OutfitMediumText from '../../components/Text/OutfitMediumText';
import TouchableHOC from '../../components/Buttons/TouchableHOC';
import {subPackges} from '../../Redux/Actions/authActions';
import {useDispatch} from 'react-redux';

const Subscription = props => {
  const [activeindex, setActiveIndex] = useState(-1);
  const [selectedPackage, setSelectedPackage] = useState(0);
  const [subscription, setSubscription] = useState([]);
  const dispatch = useDispatch();
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     activeindex: -1,
  //     selectedPackage: 0,
  //     subscription: [],
  //   };
  // }

  // componentDidMount() {
  //   const {token} = this.props.route?.params;
  //   // this.props.getSubscription(token).then(res => {
  //   //   this.setState({subscription: res?.package});
  //   // });
  // }

  useEffect(() => {
    const {token} = props.route?.params;
    dispatch(subPackges(token)).then(res => {
      setSubscription(res?.package);
      // this.setState({subscription: res?.package});
    });
  }, []);

  const rendersubscriptions = index => {
    return (
      <View style={{marginTop: 5 * vh, alignItems: 'center'}}>
        <SubsCard
          item={subscription[index]}
          success={(itemIndex, item) => {
            if (activeindex == itemIndex) {
              setActiveIndex(-1);
              props.navigation.navigate('Payment');
            } else {
              setActiveIndex(itemIndex);
            }
          }}
          index={index}
          activeindex={activeindex}
        />
      </View>
    );
  };

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
          <Image source={icons.alertRound} style={styles.alert} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: vw * 90,
            marginTop: vh * 3,
          }}>
          {subscription.length > 0 &&
            subscription.map((item, i) => {
              return (
                <TouchableHOC onPress={() => setSelectedPackage(i)}>
                  <OutfitMediumText
                    style={
                      this.state.selectedPackage == i
                        ? styles.selectStyle
                        : styles.unselectedStyle
                    }>
                    {item.title == 'TRIAL PACKAGE'
                      ? 'Trail Package'
                      : `Package 0${i + 1}`}
                  </OutfitMediumText>
                  {this.state.selectedPackage == i && (
                    <View style={styles.underLine} />
                  )}
                </TouchableHOC>
              );
            })}
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {rendersubscriptions(selectedPackage)}
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default Subscription;
