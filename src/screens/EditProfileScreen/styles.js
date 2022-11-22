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
profile:{
    width:12*vh,
    height:12*vh,
    borderRadius:6*vh,
    resizeMode:'contain'
},
email:{
    fontSize:2*vh,color:'#999999', marginTop:0.5*vh,
},

editpw:{
    color: '#20C3CF',
    marginTop:vh,
    textDecorationLine: 'underline',
    fontSize: 1.7 * vh
},
points:{
    fontSize:2*vh,color:ThemeColors.darkpurple,
    marginTop:0.5*vh,
    textAlign:'center'
},
pointstext:{
    fontSize:1.7*vh,color:ThemeColors.darkpurple,
   
    textAlign:'center'
},
emailtext:{
    fontSize:2*vh,color:'#4B4B4B'
},
name: {
  fontSize:2.5*vh,color:ThemeColors.darkpurple,
 marginTop:vh
  },
  imgicon:{
    width:4*vh,
    height:4*vh,
    resizeMode:'contain'
  },
  circle:{
      width:18*vw,
      height:18*vw,
      alignItems:'center',
      justifyContent:'center',
      borderRadius:9*vh,
      backgroundColor:'#20C3CF'
  }

});
export default styles;
