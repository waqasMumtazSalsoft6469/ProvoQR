const {StyleSheet} = require('react-native');
import ThemeColors from '../../Utils/ThemeColors';
import {vh, vw, themeShadow} from '../../Utils/Units';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ThemeColors.white,
  },
  imgbg: {
    width: 100 * vw,

    height: 100 * vh,
  },
  txtArea: {
    width: 85 * vw,
    height: vh * 20,
    borderRadius: vw * 3,
    alignItems: 'flex-start',
    paddingTop: vh * 1,
    marginBottom: vh,
    borderColor: '#fff',
  },
  image: {
    height: vw * 30,
    width: vh * 30,
    resizeMode: 'contain',
    marginVertical: vh * 5,
  },
  radioContainer: {
    width: vw * 65,
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    marginTop: vh * 2,
  },
  selectedLabel: {
    height: vh * 3,
    width: vh * 3,
    borderRadius: vh * 2,
    backgroundColor: ThemeColors.white,
    borderColor: ThemeColors.primary,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    ...themeShadow,
  },
  unselectedLabel: {
    height: vh * 3,
    width: vh * 3,
    borderRadius: vh * 2,
    backgroundColor: ThemeColors.white,
    ...themeShadow,
  },
  row: {flexDirection: 'row', marginBottom: vh * 2},
  selectedText: {color: ThemeColors.primary, marginLeft: vw * 2},
  unselectedText: {color: ThemeColors.grayText, marginLeft: vw * 2},
  orangeDot: {
    height: vh * 1.5,
    width: vh * 1.5,
    borderRadius: vh * 2,
    backgroundColor: ThemeColors.primary,
  },
  heading: {fontSize: vh * 3, marginBottom: vh * 5},
});
export default styles;
