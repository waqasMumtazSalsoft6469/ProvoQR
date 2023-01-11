import {StyleSheet} from 'react-native';
import ThemeColors from '../../../Utils/ThemeColors';
import {vw, vh} from '../../../Utils/Units';

export default styles = StyleSheet.create({
  container: {
    paddingVertical: vh * 1,
  },
  contentContainer: {
    // backgroundColor: 'red',
    width: vw * 80,
    marginVertical: vh * 0.5,
    paddingVertical: vh * 0.5,
  },
  nameTextStyle: {
    color: ThemeColors.placeholderGrey,
    fontSize: vh * 1.9,
  },
});
