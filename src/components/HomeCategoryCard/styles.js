import {StyleSheet, Text, View} from 'react-native';
import ThemeColors from '../../Utils/ThemeColors';
import {themeShadow, vh, vw} from '../../Utils/Units';

const styles = StyleSheet.create({
  container: {
    marginBottom: vh,
    paddingHorizontal: vw * 2,
  },
  nameText: {
    marginTop: vh * 1,
    color: ThemeColors.black,
    fontSize: vh * 1.9,
  },
  nameTextStyle: {
    color: ThemeColors.darkpurple,
    fontSize: 2 * vh,
  },
  innerContainer: {
    flexDirection: 'row',
    borderRadius: 2.5 * vh,
    backgroundColor: '#F2D3D1',
    alignItems: 'center',
    height: vh * 7,
    paddingHorizontal: vw * 3,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#EBC3C0',
  },
  iconStyle: {
    height: vh * 3,
    width: vh * 3,
    resizeMode: 'contain',
  },
});

export default styles;
