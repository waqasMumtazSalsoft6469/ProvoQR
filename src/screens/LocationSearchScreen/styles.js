import {StyleSheet} from 'react-native';
import {vh, vw} from '../../Utils/Units';
import ThemeColors from '../../Utils/ThemeColors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  contentContainerStyle: {
    paddingTop: vh * 2,
  },
  //   inputContainer: {
  //     width: vw * 76.2,
  //     marginLeft: vw * 6.4,
  //   },
  itemContaienr: {
    width: vw * 85,
    marginVertical: vh * 0.5,
  },
  itemText: {
    color: ThemeColors.fontBlack,
    fontSize: vh * 1.7,
  },
  border: {
    marginTop: vh * 2.5,
    width: '100%',
    height: 0.5,
    backgroundColor: ThemeColors.dashBorderColor,
  },
  //   emptyContainer: {
  //     marginTop: vh * 10,
  //   },
});
export default styles;
