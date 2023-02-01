import {StyleSheet} from 'react-native';
import ThemeColors from '../../Utils/ThemeColors';
import {vh, vw} from '../../Utils/Units';

export default styles = StyleSheet.create({
  carouselContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  slide: {
    // width: '100%',
    height: vh * 25,
    backgroundColor: ThemeColors.white,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: vh * 3,
    // marginHorizontal: vh * 2,
    marginTop: vh * 2,
  },

  image: {
    resizeMode: 'contain',
    width: vw * 90,
    height: vh * 25,
    backgroundColor: ThemeColors.white,
    resizeMode: 'cover',
    borderRadius: vh * 3,
  },
  paginationContainer: {
    paddingVertical: vh * 1,
  },
  paginationDot: {
    width: vh * 1.2,
    height: vh * 1.2,
    borderRadius: (vh * 1.2) / 2,
    backgroundColor: 'red',
  },
});
