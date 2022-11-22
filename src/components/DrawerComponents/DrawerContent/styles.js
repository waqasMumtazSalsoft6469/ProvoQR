import {StyleSheet} from 'react-native';
import ThemeColors from '../../../Utils/ThemeColors';

import {vh, vw} from '../../../Utils/Units';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: ThemeColors.white,
  },
  routeContainer: {
    marginTop: 3 * vh,
    marginLeft: vw * 4,
  },
  nameText: {
    color: ThemeColors.darkpurple,
    marginLeft: vw,
    fontSize: 2.5 * vh,
  },
  profilename: {
    color: ThemeColors.darkpurple,
    marginLeft: vw,
    fontSize: 3.2 * vh,
    fontWeight: '700',
  },
  profileImage: {
    height: vh * 8,
    width: vh * 8,
    borderRadius: (vh * 8) / 2,
    backgroundColor: ThemeColors.white,
  },
  profileImageContainer: {
    height: vh * 9,
    width: vh * 9,
    borderRadius: (vh * 9) / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: ThemeColors.white,
    borderWidth: 2,
    borderColor: ThemeColors.white,
  },
  profileText: {
    color: ThemeColors.white,
    fontSize: vh * 5,
  },
  header: {
    marginTop: vh * 14,
    marginBottom: vh * 5,
    paddingLeft: vw * 8,
  },
  footer: {
    // marginTop: vh * 10,
    position: 'absolute',
    bottom: vh * -15,
    paddingLeft: vw * 8,
  },
  userName: {
    color: ThemeColors.white,
    fontSize: vh * 3,
    marginTop: vh * 1,
  },
  button: {
    backgroundColor: ThemeColors.black,
    borderRadius: vh * 3,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: vh * 1.5,
    width: vw * 45,
  },
  buttonText: {
    fontSize: vh * 2,
    color: ThemeColors.black,
  },
});
export default styles;
