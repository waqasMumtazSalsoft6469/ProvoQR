// const {StyleSheet} = require('react-native');
import {StyleSheet, Dimensions} from 'react-native';
import {getStatusBarHeight} from 'react-native-safearea-height';
import ThemeColors from '../../Utils/ThemeColors';
import {vh, vw} from '../../Utils/Units';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ThemeColors.white,
  },
  imgbg: {
    width: 100 * vw,
    // height: vh * 90,
    // paddingBottom: vh * 7,
    flex: 1,
    paddingTop: vh * 3,
  },
  imageStyle: {
    width: 100 * vw,
    height: vh * 100,
  },
  catname: {
    color: ThemeColors.darkpurple,
    fontSize: 2 * vh,
  },
  notselectview: {
    borderRadius: 3 * vh,
    width: 25 * vw,
    justifyContent: 'center',
    height: 5 * vh,
    paddingHorizontal: 3 * vw,
    backgroundColor: ThemeColors.white,
    alignItems: 'center',
  },
  kgs: {
    borderRadius: 3 * vh,
    marginTop: 1 * vh,
    elevation: vw,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    width: 50 * vw,
    height: 5 * vh,
    flexDirection: 'row',
    backgroundColor: ThemeColors.white,
  },
  poundtext: {
    color: ThemeColors.white,
    fontSize: 1.7 * vh,
  },
  select: {
    color: ThemeColors.darkpurple,

    fontSize: 1.7 * vh,
  },
  dis: {
    color: ThemeColors.darkpurple,

    fontSize: 2 * vh,
  },
  pounds: {
    borderRadius: 3 * vh,
    width: 25 * vw,
    justifyContent: 'center',
    height: 5 * vh,
    paddingHorizontal: 3 * vw,
    backgroundColor: ThemeColors.primary,
    alignItems: 'center',
  },
  reward: {
    padding: 4 * vw,
    shadowColor: '#000',
    borderRadius: 4 * vh,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 3,
    backgroundColor: ThemeColors.white,
  },
  imageContainer: {
    // margin: vh * 0.2,
    width: vw * 42,
    height: vh * 20,
    aspectRatio: 1,
    // backgroundColor: 'red',
    //margin: vw * 2,
  },
  image: {
    resizeMode: 'cover',
    // width: '100%',
    // height: '100%',
    width: vw * 42,
    height: vh * 20,
  },
  bigImageContainer: {
    width: '66.666%',
    padding: 2,
  },
  smallImageContainer: {
    width: '33.333%',
    padding: 2,
  },
  // smallImageContainer: {
  //   width: windowWidth / 2,
  //   aspectRatio: 1, // Maintain a 1:1 aspect ratio for each small image container
  //   margin: 2,
  // },
  bigImage: {
    width: '100%',
    aspectRatio: 1, // Maintain square aspect ratio
  },
  smallImage: {
    width: '100%',
    aspectRatio: 1, // Maintain square aspect ratio
  },
  largeImageContainer: {
    width: windowWidth / 2,
    aspectRatio: 1.5, // Maintain a 3:2 aspect ratio for the large image container
    margin: 2,
  },
  largeImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  contentContainerStyle: {
    paddingHorizontal: vw * 4,
    paddingBottom: vh * 10,
    // alignItems: 'center',
  },
  emptyContainer: {
    alignItems: 'center',
  },
  emptyText: {
    color: ThemeColors.iconColor,
    fontSize: vh * 1.8,
  },
  resLogoStyle: {
    position: 'absolute',
    bottom: vw * 5,
    right: vw * 5,
    height: vw * 6,
    width: vw * 6,
    resizeMode: 'contain',
  },
  // contentContainerStyle: {backgroundColor: 'transparent'},
});
export default styles;
