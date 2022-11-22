const {StyleSheet} = require('react-native');
import ThemeColors from '../../Utils/ThemeColors';
import {vh, vw} from '../../Utils/Units';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  backgroundColor:ThemeColors.white
  },
  imgbg:{
    width:100*vw,
   
   flex:1
},
or:{
fontSize:2*vh,
marginLeft:4*vw,
color:'#2A2A2A'
},
label:{
  fontSize:1.7*vh,
  marginLeft:4*vw,
  color:'#2A2A2A'
},
googlebox:{
backgroundColor:ThemeColors.white,
borderWidth:0.5*vw,
borderColor:'#2A2A2A'
},
account:{
  // textAlign: 'center',
  color:'#444444',
  fontSize: 1.8 * vh,

},
createaccount:{
  color:ThemeColors.primary,
  marginLeft:vw,
  textDecorationLine: 'underline',
  fontSize: 1.8* vh,
},
forgotText: {
    width: 80 * vw,
    textAlign: 'right',
    color:'#20C3CF',
    fontSize: 1.6 * vh,
    textDecorationLine: 'underline',
  },
forgotButton: {marginTop: 1 * vh},
});
export default styles;
