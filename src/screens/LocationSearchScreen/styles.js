import {StyleSheet} from 'react-native';
import {vh, vw} from '../../Utils/Units';
import ThemeColors from '../../Utils/ThemeColors';
import {fonts} from '../../assets/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  contentContainerStyle: {
    paddingTop: vh * 2,
  },
  //   inputContainer: {
  //     width: vw * 76.2,
  //     marginLeft: vw * 6.4,
  //   },
  itemContaienr: {
    width: vw * 85,
    marginVertical: vh * 0.5,
    paddingVertical: vh * 1,
    // justifyContent: 'center',
    // backgroundColor: 'yellow',
  },
  hitslop: {
    top: 10,
    bottom: 10,
    left: 10,
    right: 10,
  },
  itemText: {
    color: ThemeColors.fontBlack,
    fontSize: vh * 1.7,
    fontFamily: fonts.Outfit.regular,
    // backgroundColor: 'red',
  },
  border: {
    marginTop: vh * 1,
    width: '100%',
    height: 0.5,
    backgroundColor: ThemeColors.dashBorderColor,
  },
  //   emptyContainer: {
  //     marginTop: vh * 10,
  //   },
});
export default styles;
