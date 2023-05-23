import {StyleSheet} from 'react-native';
import ThemeColors from '../../Utils/ThemeColors';
import {vh, vw} from '../../Utils/Units';
import {getStatusBarHeight} from 'react-native-safearea-height';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: vw * 100,
    alignItems: 'center',
    paddingTop: vh * 2,
  },
  contentContainerStyle: {
    paddingBottom: vh * 8,
  },
  headerContainer: {
    marginBottom: vh * 2,
  },
  headingTextStyle: {
    color: ThemeColors.iconColor,
    fontSize: vh * 2.3,
  },
  resCardContainer: {
    marginVertical: vh * 1,
  },
});

export default styles;
