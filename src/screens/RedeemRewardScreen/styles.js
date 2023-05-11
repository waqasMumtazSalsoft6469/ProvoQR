import {StyleSheet} from 'react-native';
import {vh, vw} from '../../Utils/Units';
import {getStatusBarHeight} from 'react-native-safearea-height';
import ThemeColors from '../../Utils/ThemeColors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: vw * 100,
    // paddingTop: getStatusBarHeight() + vh * 8,
  },
  back: {
    tintColor: ThemeColors.white,
    height: vh * 5,
    width: vw * 5,
    resizeMode: 'contain',
  },
  openBox: {width: vw * 80, height: vh * 40, resizeMode: 'contain'},
  congText: {
    fontSize: vh * 5,
    color: ThemeColors.white,
    marginTop: vh * 2,
  },
  whiteText: {
    color: ThemeColors.white,
    fontSize: vh * 2.5,
    textAlign: 'center',
  },
  whiteCodeText: {
    marginTop: vh * 1,
    backgroundColor: ThemeColors.white,
    fontSize: vh * 2.5,
    textAlign: 'center',
  },
  codeText: {
    color: ThemeColors.primary,
    fontSize: vh * 2.5,
  },
});

export default styles;
