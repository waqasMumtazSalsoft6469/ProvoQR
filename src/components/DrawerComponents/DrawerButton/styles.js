import {StyleSheet} from 'react-native';
import {vh, vw} from '../../../Utils/Units';
import ThemeColors from '../../../Utils/ThemeColors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3 * vh,
  },
  icon: {
    height: 2.5 * vh,
    width: 2.5 * vh,
    resizeMode: 'contain',
    marginHorizontal: 5 * vw,
  },
  label: {
    fontSize: 2 * vh,
  },
});

export default styles;
