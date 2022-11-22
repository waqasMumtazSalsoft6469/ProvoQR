const {StyleSheet} = require('react-native');
import ThemeColors from '../../Utils/ThemeColors';
import {themeShadow, vh, vw} from '../../Utils/Units';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ThemeColors.white,
  },
  imgbg: {
    width: 100 * vw,

    flex: 1,
  },
  box: {
    width: 80 * vw,
    paddingVertical: 4 * vh,
    position: 'absolute',
    alignItems: 'center',
    alignSelf: 'center',
    top: 4 * vh,
    borderRadius: 2 * vh,
  },
  boxview: {
    width: 40 * vw,
    borderColor: '#E2E2E2',
    paddingBottom: 2 * vh,
    borderWidth: 0.5 * vw,
    // height:40*vh,
    borderRadius: vh,
    backgroundColor: ThemeColors.white,
  },
  gender: {
    color: ThemeColors.placeholderGrey,
    fontSize: 1.7 * vh,
  },
  viewmap: {
    color: '#20C3CF',
    textDecorationLine: 'underline',
    fontSize: 1.7 * vh,
  },
  dis: {
    color: ThemeColors.darkpurple,

    fontSize: 2 * vh,
  },
  cus: {
    color: ThemeColors.primary,

    fontSize: 2 * vh,
  },

  totalscan: {
    color: '#FFB829',

    fontSize: 2 * vh,
  },
  name: {
    color: ThemeColors.darkpurple,
    fontSize: 1.2 * vh,
  },
  imgcard: {
    resizeMode: 'cover',
    width: 40 * vw,
    backgroundColor: 'green',
    borderRadius: vh,
    height: 20 * vh,
  },
  down: {
    width: 3 * vw,
    height: 3 * vw,
    resizeMode: 'contain',
  },
  fieldContainer: {
    width: 70 * vw,
    flexDirection: 'row',
    // elevation:0.5*vw,
    marginTop: 0 * vh,
    backgroundColor: ThemeColors.input,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 6 * vw,
    borderRadius: 7 * vw,
    height: 7 * vh,
  },
  mapButtonContainer: {
    position: 'absolute',
    alignSelf: 'center',
    height: vh * 100,
    justifyContent: 'center',
  },
  buttonIcon: {
    height: vh * 10,
    width: vh * 10,
  },

  imgbgs: {
    width: 100 * vw,

    height: 80 * vh,
  },
  label: {
    color: '#C6C5C5',
    fontSize: 1.7 * vh,
  },
  date: {
    color: '#818080',
    fontSize: 1.7 * vh,
  },
  buttText: {
    color: ThemeColors.white,
    marginLeft: 2 * vh,
    fontSize: 2 * vh,
  },
  lastscan: {
    color: ThemeColors.darkpurple,
    marginTop: 2 * vh,
    fontSize: 2 * vh,
  },
  imgButview: {
    borderColor: '#E10613',
    // width:60*vw,

    alignItems: 'center',
    borderStyle: 'dashed',
    borderWidth: 1,
    backgroundColor: 'rgba(255,6,19,0.6)',
    paddingHorizontal: 8 * vw,
    paddingVertical: 2 * vh,
    marginTop: 3 * vh,
    borderRadius: 2 * vw,
    shadowColor: '#FF0000',
    shadowOffset: {
      width: 5,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 15,
  },
  catbox: {
    flexDirection: 'row',
    paddingHorizontal: 3 * vw,
    paddingVertical: 1.5 * vh,
    width: 25 * vw,
    marginTop: 2 * vh,
    alignItems: 'center',
    borderRadius: 2 * vh,
    justifyContent: 'space-between',
    backgroundColor: ThemeColors.primary,
  },
  catText: {
    color: ThemeColors.white,
    fontSize: 1.8 * vh,
  },
  you: {
    color: ThemeColors.primary,
    fontSize: 2.5 * vh,
  },
  redeem: {
    color: '#FF1919',
    marginTop: vh,
    fontSize: 1.7 * vh,
  },
  rewtext: {
    color: '#818080',
    marginTop: vh,
    lineHeight: 3 * vh,
    fontSize: 2 * vh,
  },
  imgicon: {
    width: 5 * vw,
    tintColor: '#000000',
    height: 5 * vw,
    resizeMode: 'contain',
  },
  recomend: {
    color: ThemeColors.darkpurple,
    fontSize: 2.5 * vh,
  },
  cus: {
    color: '#365EB1',

    fontSize: 2 * vh,
  },
  name: {
    color: ThemeColors.darkpurple,
    fontSize: 2.2 * vh,
  },
  viewmap: {
    color: '#20C3CF',
    textDecorationLine: 'underline',
    marginTop: 2 * vh,
    fontSize: 2 * vh,
  },
  butCon: {
    marginTop: 2 * vh,
    backgroundColor: '#E5E5E5',
    width: 40 * vw,
    paddingHorizontal: 4 * vw,
    borderColor: '#E5E5E5',
  },
  cardimg: {
    width: 90 * vw,
    height: 50 * vw,

    borderRadius: 0.5 * vh,
    resizeMode: 'contain',
  },
  menuContainer: {
    flexDirection: 'row',
  },
  buttonText: {
    color: '#365EB1',
    marginHorizontal: vw * 2,
    fontSize: vh * 1.8,
    textDecorationLine: 'underline',
  },
  catIcon: {
    resizeMode: 'contain',
    height: vh * 3,
    width: vh * 3,
  },
  lowerContainer: {
    width: vw * 100,
    flexDirection: 'row',
    marginTop: vh * 2,
  },
  row: {flexDirection: 'row', alignItems: 'center'},
  icon: {height: vh * 2.5, width: vh * 2.5, marginRight: vw * 2},
  viewcon: {
    flexDirection: 'row',
    // padding: 4 * vw,
    borderRadius: 3 * vh,
    backgroundColor: '#F2D3D1',
    alignItems: 'center',
    height: vh * 8,
    width: vw * 28,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#EBC3C0',
  },
  burgerIcon: {
    height: vh * 3,
    width: vh * 3,
    marginRight: vw * 3,
  },
  campaignCon: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    width: vw * 100,
    justifyContent: 'center',
    marginVertical: vh * 2,
  },
  campaign: {
    height: vh * 8,
    width: vw * 28,
    backgroundColor: '#EFF4FF',
    borderWidth: 1,
    borderColor: '#DAE4F8',
    borderRadius: 3 * vh,
    alignItems: 'center',
    justifyContent: 'center',
    margin: vh * 1,
  },
  filterBg: {
    backgroundColor: ThemeColors.white,
    padding: vh * 1.3,
    borderRadius: vh * 2,
    ...themeShadow,
  },
  filter: {height: vh * 4, width: vh * 4, tintColor: '#999999'},
});
export default styles;
