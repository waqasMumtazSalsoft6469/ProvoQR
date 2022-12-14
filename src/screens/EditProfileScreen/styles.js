const {StyleSheet} = require('react-native');
import ThemeColors from '../../Utils/ThemeColors';
import {themeShadow, vh, vw} from '../../Utils/Units';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ThemeColors.white,
  },
  imgbg: {
    width: 100 * vw,

    flex: 1,
  },
  profile: {
    width: 12 * vh,
    height: 12 * vh,
    borderRadius: 6 * vh,
  },
  email: {
    fontSize: 2 * vh,
    color: '#999999',
    marginTop: 0.5 * vh,
  },

  editpw: {
    color: '#20C3CF',
    marginTop: vh,
    textDecorationLine: 'underline',
    fontSize: 1.7 * vh,
  },
  points: {
    fontSize: 2 * vh,
    color: ThemeColors.darkpurple,
    marginTop: 0.5 * vh,
    textAlign: 'center',
  },
  pointstext: {
    fontSize: 1.7 * vh,
    color: ThemeColors.darkpurple,

    textAlign: 'center',
  },
  emailtext: {
    fontSize: 2 * vh,
    color: '#4B4B4B',
  },
  name: {
    fontSize: 2.5 * vh,
    color: ThemeColors.darkpurple,
    marginTop: vh,
  },
  imgicon: {
    width: 4 * vh,
    height: 4 * vh,
    resizeMode: 'contain',
  },
  circle: {
    width: 18 * vw,
    height: 18 * vw,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9 * vh,
    backgroundColor: '#20C3CF',
  },
  modal: {
    // height: vh * 20,
    backgroundColor: 'white',
    position: 'absolute',
    width: vw * 100,
    overflow: 'hidden',
    bottom: 0,
    borderTopLeftRadius: vh * 2,
    borderTopRightRadius: vh * 2,
    paddingVertical: vh * 2,
    ...themeShadow,
    // zIndex: 1,
  },
  line: {
    height: vh * 0.1,
    width: vw * 100,
    backgroundColor: ThemeColors.lightGray,
    marginVertical: vh * 1.5,
  },
  down: {
    width: 4 * vw,
    height: 4 * vw,
    resizeMode: 'contain',
  },
  fieldContainer: {
    width: 85 * vw,
    flexDirection: 'row',
    // elevation:0.5*vw,
    // marginTop: 2 * vh,
    backgroundColor: ThemeColors.white,

    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 3 * vw,
    borderRadius: 4 * vw,
    height: 7 * vh,
    ...themeShadow,
  },
  gender: {
    color: ThemeColors.placeholderGrey,

    width: 68 * vw,

    padding: 0,
    paddingHorizontal: 2 * vw,
    // marginLeft: 1.5 * vw,
    margin: 0,
    fontSize: vh * 1.6,
  },
  labelview: {
    // flexDirection: 'row',
    height: 3 * vh,
    marginLeft: 15 * vw,
    width: 85 * vw,
    marginTop: 2 * vh,
    alignItems: 'flex-start',
  },
  label: {
    // width: 80 * vw,
    flexDirection: 'row',
    marginBottom: 0.5 * vh,
    alignItems: 'center',
    fontSize: 2 * vh,
    // justifyContent: 'space-between',
    // paddingHorizontal: 3 * vw,

    // height: 5 * vh,
  },
});
export default styles;
