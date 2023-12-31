const {StyleSheet} = require('react-native');
import ThemeColors from '../../Utils/ThemeColors';
import {vh, vw} from '../../Utils/Units';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ThemeColors.white,
  },
  imgbg: {
    // width: 100 * vw,
    // height: 100 * vh,
    paddingBottom: vh * 9,
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
  happyHour: {
    borderRadius: vh * 3,
    marginTop: vh * 2,
    width: vw * 90,
    height: vh * 30,
    resizeMode: 'cover',
  },
  recomend: {
    color: ThemeColors.darkpurple,
    fontSize: 2.5 * vh,
    alignSelf: 'flex-start',
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
});
export default styles;
