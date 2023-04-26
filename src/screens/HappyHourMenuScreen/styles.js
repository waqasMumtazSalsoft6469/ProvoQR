import {StyleSheet} from 'react-native';
import {vh, vw} from '../../Utils/Units';
import {getStatusBarHeight} from 'react-native-safearea-height';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: vw * 100,
    paddingTop: getStatusBarHeight() + vh * 8,
  },
  contentContainerStyle: {alignItems: 'center', paddingBottom: vh * 5},
  topIconStyle: {width: vw * 45.3, height: vw * 29.8, resizeMode: 'contain'},
  menuCardStyle: {height: vh * 80, width: vw * 90, resizeMode: 'cover'},
});

export default styles;
