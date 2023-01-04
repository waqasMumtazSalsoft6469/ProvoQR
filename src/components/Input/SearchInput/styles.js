import {StyleSheet} from 'react-native';
import ThemeColors from '../../../Utils/ThemeColors';
import {themeShadow, vh, vw} from '../../../Utils/Units';

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
  },
  search: {width: vw * 4, height: vh * 5, marginRight: 0 * vw},
});

export default styles;
