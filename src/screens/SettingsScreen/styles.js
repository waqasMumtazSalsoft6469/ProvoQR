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

});
export default styles;
