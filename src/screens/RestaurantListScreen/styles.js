import {StyleSheet} from 'react-native';
import ThemeColors from '../../Utils/ThemeColors';
import {vh, vw} from '../../Utils/Units';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: vw * 100,
    alignItems: 'center',
  },
  headerContainer:{
    marginBottom: vh*2
  },
  headingTextStyle: {
    color: ThemeColors.iconColor,
    fontSize: vh * 2.3,
  },
});

export default styles;
