import {StyleSheet} from 'react-native';
import ThemeColors from '../../../Utils/ThemeColors';
import {themeShadow, vh, vw} from '../../../Utils/Units';

const styles = StyleSheet.create({
  container: {flex: 1},
  backdropContainer: {
    position: 'absolute',
    height: vh * 100,
    width: vw * 100,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modal: {
    backgroundColor: ThemeColors.white,
    position: 'absolute',
    width: vw * 100,
    overflow: 'hidden',
    bottom: 0,
    borderTopLeftRadius: vh * 2,
    borderTopRightRadius: vh * 2,
    paddingVertical: vh * 2,
    ...themeShadow,
  },
  btnStyle: {marginLeft: vw * 2},
  btnText: {
    color: 'black',
    fontSize: vh * 2.2,
  },
  line: {
    height: vh * 0.1,
    width: vw * 100,
    backgroundColor: ThemeColors.lightGray,
    marginVertical: vh * 1.5,
  },
});

export default styles;
