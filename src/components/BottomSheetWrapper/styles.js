import {StyleSheet} from 'react-native';
import ThemeColors from '../../Utils/ThemeColors';
import {vh, vw} from '../../Utils/Units';

export const styles = StyleSheet.create({
  modal: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: ThemeColors.fontBlack,
    opacity: 0.6,
  },
  backOpacity: {
    width: vw * 92,
    backgroundColor: ThemeColors.white,
    position: 'absolute',
    // bottom: 2,
    top: vh * -1.9,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: vw * 8,
    borderTopRightRadius: vw * 8,
    height: vh * 5,
    opacity: 0.4,
    // marginBottom: vh * 2,
  },
  modalInnerContainer: {
    width: vw * 100,
    backgroundColor: '#FFF',
    position: 'absolute',
    bottom: 0,
    paddingTop: vh * 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: vw * 8,
    borderTopRightRadius: vw * 8,
    zIndex: 99999,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,

    paddingBottom: vh * 2,
  },
  horizontalLine: {
    height: vh * 0.6,
    width: vw * 20,
    backgroundColor: ThemeColors.lightGray,
    borderRadius: vh * 1,
    marginBottom: vh * 2,
  },
});
