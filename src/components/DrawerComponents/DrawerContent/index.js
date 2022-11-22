import React, {useRef, useState} from 'react';
import styles from './styles';
import DrawerButton from '../DrawerButton';
import {Image, TouchableOpacity, View} from 'react-native';
import Animated from 'react-native-reanimated';
import {useDrawerProgress} from '@react-navigation/drawer';
import OutfitSemiBoldText from '../../Text/OutfitSemiBoldText';
import OutfitLightText from '../../Text/OutfitLightText';
import TwoAlertModal from '../../Popups/TwoAlert';
import {icons} from '../../../assets/images';

const DrawerContent = props => {
  const popupRef = useRef(null);
  const [visibleModal, setVisibleModal] = useState(false);
  const handleOnDrawerItemPress = routeName => {
    if (routeName == 'Logout') {
      setVisibleModal(true);
    } else {
      return props.navigation.navigate(routeName);
    }
  };

  const progress = useDrawerProgress();
  const opacity = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [-5, 1],
  });
  return (
    <Animated.View style={[styles.container]}>
      <Animated.View style={{opacity: opacity}}>
        <View style={styles.header}>
          <OutfitLightText style={styles.nameText}>Hello There</OutfitLightText>
          <OutfitSemiBoldText style={styles.profilename}>
            John Carter
          </OutfitSemiBoldText>
        </View>
      </Animated.View>

      <View style={styles.routeContainer}>
        {props.state.routes.map((item, index) => {
          const {title, drawerLabel, drawerIcon} =
            props.descriptors[item.key].options;
          return (
            <DrawerButton
              index={index}
              onPress={handleOnDrawerItemPress}
              routeName={item.name}
              label={drawerLabel}
              icon={drawerIcon}
            />
          );
        })}
      </View>
      <TwoAlertModal
        visible={visibleModal}
        setVisible={() => setVisibleModal(false)}
        icon={icons.popupQuestion}
        title=""
        description={'Are you sure you want to logout?'}
        leftButtonTitle="YES"
        onLeftButtonPress={() => {
          props.navigation.navigate('Login'), setVisibleModal(false);
        }}
        rightButtonTitle="NO"
        onRightButtonPress={() => setVisibleModal(false)}
      />
    </Animated.View>
  );
};
export default DrawerContent;
