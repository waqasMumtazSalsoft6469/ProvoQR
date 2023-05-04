import {StyleSheet} from 'react-native';
import ThemeColors from '../../../Utils/ThemeColors';
import {themeShadow, vh, vw} from '../../../Utils/Units';
import {fonts} from '../../../assets/fonts';

const styles = StyleSheet.create({
  searchbar: {
    flexDirection: 'row',
    width: vw * 85,
    paddingHorizontal: vw * 4,
    height: vh * 6.5,
    alignItems: 'center',
    borderRadius: 2 * vh,
    alignSelf: 'center',
    borderColor: ThemeColors.white,
    borderWidth: 0.3 * vh,
    backgroundColor: ThemeColors.white,
    ...themeShadow,
  },
  input: {
    marginLeft: vw * 3,
    fontSize: 1.7 * vh,
    color: ThemeColors.black,
    fontFamily: fonts.Outfit.regular,
    flex: 1,
    padding: 0,
    paddingVertical: 0,
    paddingHorizontal: 0,
    margin: 0,
    marginVertical: 0,
    marginHorizontal: 0,
  },
  search: {width: vw * 4, height: vh * 5, marginRight: 0 * vw},
  crossIconContainer: {
    height: vw * 4,
    width: vw * 4,
    borderRadius: (vw * 4) / 2,
    backgroundColor: 'rgba(0,0,0,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  crossIconStyle: {
    height: vw * 1.5,
    width: vw * 1.5,
    resizeMode: 'contain',
  },
  hitSlop: {
    top: 10,
    bottom: 10,
    left: 10,
    right: 10,
  },
});

export default styles;
