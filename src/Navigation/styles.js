import {StyleSheet, Platform} from 'react-native';
import ThemeColors from '../Utils/ThemeColors';
import {fonts} from '../assets/fonts';
import {vh, vw} from '../Utils/Units';

const styles = StyleSheet.create({
  defaultHeaderTitleStyle: {
    color: 'white',
    alignItems: 'flex-end',
    // width:100*vw,
    fontFamily: fonts.Outfit.medium,
    fontSize: 2.6 * vh,
    // paddingBottom: 2 * vh,
    color: ThemeColors.iconColor,
  },
  stack: {
    flex: 1,
    zIndex: 999,
    overflow: 'hidden',
  },
  indicatorStyle: {
    backgroundColor: ThemeColors.primary,
    height: 0.7 * vh,
    borderRadius: 2 * vw,
    width: 10 * vw,
    marginLeft: 0 * vw,
    bottom: -1.7 * vh,
    alignSelf: 'center',
  },
  navigate: {
    color: ThemeColors.white,
    textDecorationLine: 'underline',
    fontSize: 2 * vh,
  },
  centreViewStyles: {
    width: 16 * vw,
    height: 16 * vw,
    borderRadius: 8 * vh,
    bottom: 1 * vh,
    alignItems: 'center',

    justifyContent: 'center',

    backgroundColor: ThemeColors.primary,
  },
  container: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: vh * 8,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 4,
    borderTopLeftRadius: vw * 10,
    borderTopRightRadius: vw * 10,
    bottom: 0,
    width: 100 * vw,

    backgroundColor: ThemeColors.white,
  },
  btnStyle: {
    height: vw * 6,
    width: vw * 6,
  },
  defaultHeaderTitleStylechanged: {
    color: 'white',
    // width:100*vw,
    fontFamily: fonts.Gilroy.medium,
    fontSize: 2.6 * vh,
    // paddingBottom: 2 * vh,
  },
  count: {
    color: ThemeColors.white,
    fontSize: 1.5 * vh,
  },
  profile: {
    width: 6 * vw,
    borderRadius: 3 * vw,
    marginLeft: vw,
    height: 6 * vw,
    tintColor: ThemeColors.iconColor,
  },
  circle: {
    width: 4 * vw,
    height: 4 * vw,
    marginTop: -0.5 * vh,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF6969',
    borderRadius: 2 * vh,
  },

  line: {
    width: vw * 65,
    height: vh * 0.1,
    marginTop: 2 * vh,
    backgroundColor: '#852FF2',
  },
  icon: {width: vw * 4, height: vw * 4},
  optionContainer: {marginTop: vh * 2, marginLeft: 2 * vw},
  option: {width: 85 * vw, marginBottom: 1 * vh},
  optionLabel: {
    fontSize: vh * 2,
    color: ThemeColors.darkpurple,

    right: vw * 2,
  },
  gradient: {
    width: 70 * vw,
    height: 100 * vh,
  },
  drawerStyles: {
    flex: 1,
    width: 70 * vw,
    backgroundColor: ThemeColors.darkpurple,
  },
  // DrawerScrollView: {paddingLeft: vw * 3},
  nameText: {
    color: ThemeColors.darkpurple,
    marginLeft: vw,
    fontSize: 2.5 * vh,
  },
  profilename: {
    color: ThemeColors.darkpurple,
    marginLeft: vw,
    fontSize: 3.2 * vh,
  },
  menu: {width: vw * 5, height: vh * 4, marginLeft: 3 * vw},
  headerText: {
    color: ThemeColors.white,

    textAlign: 'center',
    fontSize: 1.7 * vh,
  },
  name: {
    color: ThemeColors.button,

    fontSize: 2 * vh,
  },
  // input: {
  //   color: '#BFBFBF',
  //   fontSize: vh * 2,
  //   padding: 0,
  //   fontFamily: fonts.jost.regular,
  // },
  search: {width: vw * 7, height: vw * 7},
  send: {width: vw * 9, height: vw * 9},
  seachbar: {
    flexDirection: 'row',
    width: vw * 85,
    paddingHorizontal: vw * 4,
    height: vh * 7,
    alignItems: 'center',
    borderRadius: 6 * vw,
    alignSelf: 'center',
    elevation: vh,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: -3 * vh,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
  },
  notifimage: {
    height: 5 * vw,
    width: 5 * vw,
    resizeMode: 'contain',
    alignItems: 'flex-end',
  },

  defaultHeaderTitleContainerStyle: {
    justifyContent: 'center',
  },
  defaultHeaderRightContainerStyle: {
    // paddingBottom: 2 * vh,
    paddingRight: 5 * vw,
    // width: 0,
  },
  defaultHeaderLeftContainerStyle: {
    // paddingBottom: 2 * vh,
    paddingLeft: 5 * vw,
  },
  deafultHeaderStyle: {
    height: 12 * vh,
    // paddingBottom: 2 * vh,
    // alignItems:'center',
    // backgroundColor:'red',
    // width: 100 * vw,
    backgroundColor: '#F3F3F3',
  },
  deafultbigHeaderStyle: {
    height: 35 * vw,

    // paddingBottom: 2 * vh,
    alignItems: 'center',
    backgroundColor: 'red',
    width: 100 * vw,
  },
  tabStyle: {
    paddingTop: 0,
    paddingLeft: 0,
    borderTopLeftRadius: 4 * vh,
    borderTopRightRadius: 4 * vh,
    backgroundColor: ThemeColors.white,
    borderWidth: 0,
    elevation: 0,
    // position:'absolute',
    // width:100*vw,
    height: 8 * vh,
  },
  notifview: {
    height: 10 * vw,
    width: 10 * vw,
    borderRadius: 5 * vw,
    backgroundColor: '#1D683E',
    alignItems: 'center',
    justifyContent: 'center',
  },

  userimage: {
    height: 6 * vw,
    width: 6 * vw,
    resizeMode: 'contain',
    alignItems: 'flex-end',
  },
  userview: {
    height: 10 * vw,
    width: 10 * vw,
    borderRadius: 5 * vw,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#1D683E',
    borderWidth: 0.8 * vw,
    marginLeft: vw,
  },
  notifview: {
    height: 10 * vw,
    width: 10 * vw,
    borderRadius: 5 * vw,
    backgroundColor: '#1D683E',
    alignItems: 'center',
    justifyContent: 'center',
  },

  tabBarStyle: {
    width: 100 * vw,
    backgroundColor: ThemeColors.white,
    height: 8 * vh,
    borderTopLeftRadius: 3 * vh,
    borderTopRightRadius: 3 * vh,
    borderTopWidth: 0,
    elevation: 0,
  },
  iconStyle: {
    width: 10 * vw,
    alignItems: 'center',
  },
  homeHeaderText: {
    color: ThemeColors.iconColor,
    fontSize: 2 * vh,
  },
  headerTextBold: {
    color: ThemeColors.primary,
    fontSize: 3 * vh,
  },
  homeLeftHeaderContainer:{
    width: vw*60
  }
});
export default styles;
