import {StyleSheet} from 'react-native';
import ThemeColors from '../../Utils/ThemeColors';
import {vh, vw} from '../../Utils/Units';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: vw * 100,
    alignItems: 'center',
  },
  contentContainerStyle: {
    paddingBottom: vh * 5,
  },
  categoryContainer: {
    margin: vw * 1,
  },
  headerContainer: {
    marginBottom: vh * 2,
  },
  headingTextStyle: {
    color: ThemeColors.iconColor,
    fontSize: vh * 2.3,
  },
  dashContainerStyle: {
    width: 90 * vw,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: vh * 2,
    marginBottom: vh * 2,
  },
  dashStyle: {width: 2 * vw, height: 1},
  menuListContainer: {marginTop: 2 * vh},
  footerContainer: {alignItems: 'center', marginVertical: vh * 2},
});

export default styles;
