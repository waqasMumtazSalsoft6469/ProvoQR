import Measurements from "../../Utils/Measurements";
import { vh, vw } from "../../Utils/Units";


const { StyleSheet } = require("react-native");
const { default: ThemeColors } = require("../../Utils/ThemeColors");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    scroll:{ 
        flex: 1 
    },
    notifimage:{
        height:5*vw,width:5*vw,resizeMode:'contain',alignItems:'flex-end'
    },
    defaultHeaderTitleStyle: {
        color: 'white',
        
      
        fontSize: 2.6 * vh,
       
       
        // marginTop:vh
      },

    backview:{
        backgroundColor:'#1D683E',height:10*vw,width:10*vw,borderRadius:5*vw,alignItems:'center',justifyContent:'center',
        marginLeft:3.5*vw,

    },

    userimage:{
        height:6*vw,width:6*vw,resizeMode:'contain',alignItems:'flex-end'
    },
    userview:{
        height:10*vw,width:10*vw,borderRadius:5*vw,backgroundColor:'#FFFFFF',alignItems:'center',justifyContent:'center',borderColor:'#1D683E',borderWidth:0.8*vw,marginLeft:vw
    },
notifview:{
    height:10*vw,width:10*vw,borderRadius:5*vw,backgroundColor:'#1D683E',alignItems:'center',justifyContent:'center'
},
    headertext:{
        color: '#FFFFFF',
        fontSize: vh *3.5,
       
        textAlign:'left'
    },

    titleText:{
        color: '#FFFFFF',
        fontSize: vh *2.6,
     
      
    },
    headertext1:{
        color: '#FFFFFF',
        fontSize: vh *2,
       
        textAlign:'left'
    },
    
    
    topBackground: {
        height: 10*vh,
        width: 100*vw,    
    },
    bottomBackground:{
        height: Measurements.backgroundHeight,
        width: Measurements.backgroundWidth,
        marginLeft: Measurements.backgroundLeft,
        alignItems:'center'
    },
    bottomBackgroundImage:{

        opacity: 0.2
    },
    topOverlay: { 
        height: Measurements.backgroundHeight + Measurements.backgroundTop, 
        backgroundColor: 'transparent', 
        width: 100 * vw 
    },
    title:{
        color:ThemeColors.white,
        marginTop:0.5*vh,
        fontSize:3*vh,
        marginLeft:Measurements.marginLeft
    },
    sheetContainer:{
        width: 100 * vw, 
        minHeight: 100 * vh - (Measurements.backgroundHeight + Measurements.backgroundTop), 
        backgroundColor: 'white', 
        marginTop: 5 * vh, 
        borderTopRightRadius: 10 * vw, 
        borderTopLeftRadius: 10 * vw, 
        alignItems: 'center' 
    },
    backButton:{
        position: 'absolute',
        left: 5 * vw,
        top: 10 * vw,
        backgroundColor: 'white',
        width: 8 * vw,
        height: 8 * vw,
        borderRadius: 4 * vw,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo:{ height: 5 * vh, width: 50 * vw, marginVertical: 5 * vh, resizeMode: 'contain' }
})
export default styles