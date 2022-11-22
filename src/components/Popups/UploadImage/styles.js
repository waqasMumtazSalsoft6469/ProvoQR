import {StyleSheet} from 'react-native';
import ThemeColors from '../../../Utils/ThemeColors';
import {vw, vh} from '../../../Utils/Units';

export default styles = StyleSheet.create({
  modalTouchable: {
    flex: 1,
    width: vw * 100,
    height: vh * 100,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.91,
    position: 'absolute',
    backgroundColor: 'rgba(172,172,172,0.91)',
  },
  view: {
    fontSize: vw * 3.5,
    textDecorationLine: 'underline',
    color: '#00AF41',
  },
  label1: {
    fontSize: vh * 2,

    color: ThemeColors.primary,
  },
  label2: {
    fontSize: vh * 2,

    color: ThemeColors.darkpurple,
  },
  cross: {width: vw * 5, height: vw * 5},
  butCon: {
    width: 25 * vw,
    backgroundColor: ThemeColors.white,
    marginTop: 3 * vh,
    borderColor: ThemeColors.primary,
    borderWidth: 0.5 * vw,
    height: 6 * vh,
  },
  boxtext: {
    color: ThemeColors.redfboxtext,
    fontSize: 1.5 * vh,
  },
  redbox: {
    elevation: 1 * vw,
    marginBottom: vh,
    borderColor: '#E8463A',
    alignItems: 'center',
    borderStyle: 'dashed',
    borderWidth: 1,
    backgroundColor: '#FFE8E8',
    paddingHorizontal: 2 * vw,
    paddingVertical: 1 * vh,
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
  butCon2: {
    width: 25 * vw,
    backgroundColor: ThemeColors.white,
    marginTop: 3 * vh,
    height: 6 * vh,
    borderColor: ThemeColors.darkpurple,
    borderWidth: 0.5 * vw,
    marginLeft: 1.5 * vw,
  },
  message: {
    fontSize: vh * 1.5,
    textAlign: 'center',
    color: '#464646',
  },
  footerimage3: {
    width: 11 * vh,
    height: 11 * vh,
    // marginTop:10*vh,
    position: 'absolute',
    bottom: -4 * vh,
    left: -11 * vw,
    resizeMode: 'contain',
  },

  yes: {
    fontSize: vh * 1.8,

    color: '#00AF41',
  },

  no: {
    fontSize: vh * 1.8,
    marginLeft: 8 * vw,
    color: '#EA242A',
  },

  footerimage: {
    width: 11 * vh,
    height: 11 * vh,
    // marginTop:10*vh,
    position: 'absolute',
    top: -5 * vh,
    right: -6 * vw,
    resizeMode: 'contain',
  },
  modalContainer: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 3 * vw,
    paddingTop: vh * 2,
    paddingBottom: vh * 4,
    alignItems: 'center',
    paddingHorizontal: vw * 8,
  },
  check: {width: vw * 15, height: vh * 5, marginBottom: vh * 1},
  title: {fontSize: vh * 3, color: ThemeColors.primary, marginTop: vh},
  Message: {
    fontSize: vw * 4.3,
    textAlign: 'center',
    color: '#333333',
    marginTop: vh * 1.5,
  },
  redirect: {fontSize: vw * 3.5, marginTop: vh * 3},
  login: {
    fontSize: vw * 3.5,
    textDecorationLine: 'underline',
    color: '#00AF41',
  },
  BtnContainer: {marginTop: vh * 3, width: '50%'},

  imageBg: {
    // marginVertical: vh * 20,
    backgroundColor: 'white',
    overflow: 'hidden',

    borderRadius: vh * 1.5,
    paddingTop: 2 * vh,
    marginHorizontal: vw * 10,
    paddingHorizontal: vw * 5,
    paddingBottom: 4 * vh,
    width: 80 * vw,
    // height:20*vh,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // elevation: 5
    // minHeight:vh*20,
  },

  image: {
    resizeMode: 'contain',
    marginTop: 2 * vh,
    marginBottom: vh,
    width: 10 * vh,
    height: 10 * vh,
  },
  crossContainer: {
    alignItems: 'flex-end',

    paddingRight: vw * 1,
  },
  // cross:{
  //   width: vw * 3,

  // },
  container: {alignItems: 'center', justifyContent: 'center', height: 8 * vh},
  imagecontainer: {alignItems: 'center', justifyContent: 'center'},
  checkMark: {width: vw * 10, height: vh * 5, marginBottom: vh * 1},
  label: {
    fontSize: vh * 2,
    textDecorationLine: 'underline',
    textAlign: 'center',
    marginTop: 0 * vh,
    color: '#555556',
  },

  text: {
    fontSize: vh * 2.5,
    // width: 65*vw,
    textAlign: 'center',
    marginTop: 1 * vh,
    color: ThemeColors.darkpurple,
  },
  btnsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: vh * 3,
    marginRight: 4 * vw,
    // width: 90*vw,
  },
  yesBtn: {
    backgroundColor: '#FFFFFF',
    width: 30 * vw,
    height: vh * 5.7,
    borderColor: '#000000',
    borderWidth: vw * 0.3,
  },
  noBtn: {
    width: 30 * vw,
    backgroundColor: '#000000',
    color: '#92278F',
    marginLeft: 3 * vw,
    height: vh * 5.7,
  },
  request: {
    backgroundColor: '#004786',
    width: '35%',
    marginTop: vh * 2,
    height: vh * 5,
  },
  blurView: {position: 'absolute', width: vw * 100, height: vh * 100},
  upperContainer: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
