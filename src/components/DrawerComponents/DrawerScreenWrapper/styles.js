import {StyleSheet} from 'react-native';
import {themeShadow, vh} from '../../../Utils/Units';

const styles = StyleSheet.create({
  stack: {
    flex: 1,
    // zIndex: 999,
    // overflow: 'hidden',
    borderRadius: vh * 5,
  },
  outerStyle: {
    flex: 1,
    borderRadius: vh * 2,
    // elevation: 100,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    ...themeShadow,
  },
});
export default styles;
