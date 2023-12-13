const {StyleSheet} = require('react-native');
import ThemeColors from '../../Utils/ThemeColors';
import {themeShadow, vh, vw} from '../../Utils/Units';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ThemeColors.white,
  },
  input: {
    width: 70 * vw,
  },
  imgbg: {
    width: 100 * vw,
    flex: 1,
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    // backgroundColor: 'green',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: -5,
    right: 5,
    // bottom: -20,
  },
  heading: {
    alignItems: 'center',
    margin: 8,
    fontSize: 15,
    fontWeight: 'bold',
  },
  options: {
    width: vw * 64,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: vh * 5,
    backgroundColor: ThemeColors.white,
    height: vh * 7,
    borderRadius: vh * 2.2,
    ...themeShadow,
  },
  darkButton: {
    backgroundColor: ThemeColors.primary,
    // paddingHorizontal: vw * 5,
    paddingVertical: vh * 1.5,
    borderRadius: vh * 1.8,
    width: vw * 30,
    alignItems: 'center',
  },
  lightButton: {
    paddingVertical: vh * 1,
    borderRadius: vh * 1.8,
    width: vw * 30,
    alignItems: 'center',
  },
  amount: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  value: {
    fontSize: vh * 8,
    marginBottom: vh * -1.3,
    marginLeft: 2,
  },
  headCoins: {
    height: vh * 4,
    width: vh * 4,
    resizeMode: 'contain',
  },
  label: {
    fontSize: vh * 3,
    width: vw * 65,
    textAlign: 'center',
    marginVertical: vh * 2.5,
  },
  vector: {
    height: vh * 22,
    width: vh * 22,
    resizeMode: 'cover',
  },
  coinContainer: {
    alignItems: 'center',
    marginHorizontal: vw * 5,
    marginBottom: vh * 5,
  },
  coinTouch: {
    height: vh * 12,
    width: vh * 12,
    backgroundColor: ThemeColors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: vh * 2,
    marginBottom: vh * 2,
    ...themeShadow,
  },
  selectedCoin: {
    height: vh * 12,
    width: vh * 12,
    backgroundColor: ThemeColors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: vh * 2,
    marginBottom: vh * 2,
    ...themeShadow,
  },
  coinIcon: {height: vh * 7, width: vh * 7},
  coinLabel: {fontSize: vh * 2.2},
  coinPrice: {fontSize: vh * 2.2, color: ThemeColors.primary},
  signupBtn: {backgroundColor: ThemeColors.butonGray},
});
export default styles;
