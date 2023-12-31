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
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../../../Redux/Actions/authActions';

const DrawerContent = props => {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.SessionReducer.userData);
  const popupRef = useRef(null);
  const [visibleModal, setVisibleModal] = useState(false);
  const handleOnDrawerItemPress = routeName => {
    if (routeName == 'Logout') {
      setVisibleModal(true);
    } else if (routeName == 'Login') {
      props.navigation.navigate('Authstack');
    } else {
      return props.navigation.navigate(routeName);
    }
  };

  const handlePressLogout = () => {
    dispatch(logout());
    setVisibleModal(false);
    props.navigation.toggleDrawer();
    props.navigation.navigate('Authstack', {screen: 'Login'});
  };

  const progress = useDrawerProgress();
  const opacity = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [-5, 1],
  });
  console.log('Props Data of Drawer Content >>>>', props);
  return (
    <Animated.View style={[styles.container]}>
      <Animated.View style={{opacity: opacity}}>
        <View style={styles.header}>
          <OutfitLightText style={styles.nameText}>Hello There</OutfitLightText>
          <OutfitSemiBoldText style={styles.profilename}>
            {userData?.name}
          </OutfitSemiBoldText>
        </View>
      </Animated.View>

      <View style={styles.routeContainer}>
        {props.state.routes.map((item, index) => {
          const {title, drawerLabel, drawerIcon} =
            props.descriptors[item.key].options;
          return (
            <DrawerButton
              key={`item_${index}`}
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
          handlePressLogout();
        }}
        rightButtonTitle="NO"
        onRightButtonPress={() => setVisibleModal(false)}
      />
    </Animated.View>
  );
};
export default DrawerContent;
