const {StyleSheet} = require('react-native');
import ThemeColors from '../../Utils/ThemeColors';
import {vh, vw} from '../../Utils/Units';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ThemeColors.white,
  },
  imgbg: {
    width: 100 * vw,

    flex: 1,
  },
  tick: {
    height: vh * 1.2,
    width: vh * 1.2,
    resizeMode: 'contain',
  },
  headerImage: {
    height: vh * 28,
    width: vw * 90,
    borderRadius: vh * 3,
    // marginVertical: vh*0.01,
  },
  qrCodeIcon: {height: vh * 20, width: vh * 20, marginVertical: vh * 2},
  symbol: {color: ThemeColors.iconColor},
  price: {color: ThemeColors.iconColor, fontSize: vh * 6},
  orangeText: {color: ThemeColors.primary, marginVertical: vh * 2},
  checkBox: {
    height: vh * 2,
    width: vh * 2,
    borderColor: ThemeColors.iconColor,
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: vw * 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: vw * 90,
    marginVertical: vh * 2,
  },
  orangeBox: {
    backgroundColor: '#FCE4E2',
    padding: vh * 2,
    width: vw * 90,
    marginBottom: vh * 3,
  },
});
export default styles;
