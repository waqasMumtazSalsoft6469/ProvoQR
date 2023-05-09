import {StyleSheet} from 'react-native';
import {vh, vw} from '../../Utils/Units';
import {getStatusBarHeight} from 'react-native-safearea-height';
import ThemeColors from '../../Utils/ThemeColors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: vw * 100,
    paddingTop: getStatusBarHeight() + vh * 8,
  },
  contentContainerStyle: {alignItems: 'center', paddingBottom: vh * 5},
  topIconStyle: {width: vw * 45.3, height: vw * 29.8, resizeMode: 'contain'},
  menuCardStyle: {
    marginTop: vh * 2,
    height: vh * 80,
    width: vw * 90,
    resizeMode: 'cover',
  },
  footerContainer: {
    alignItems: 'center',
  },
  footerText: {
    color: ThemeColors.white,
    fontSize: vh * 2,
  },
});

export default styles;
