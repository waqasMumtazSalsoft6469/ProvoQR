import { StyleSheet } from 'react-native'
import {vh, vw} from '../../Utils/Units';
import { Fonts } from '../../assets/fonts'
import ThemeColors from '../../Utils/ThemeColors';
export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:ThemeColors.white,
       
        zIndex: 10000
    },
    tickicon:{
        width:30*vw,
        height:30*vw,
        marginTop:8*vh,
        resizeMode:'contain'
    },
    imgbg:{
        width:100*vw,
        alignItems:'center',
       flex:1
    },
    success:{
        fontSize:2.5*vh,
        lineHeight:4*vh,
        marginTop:2*vh,
        width:90*vw,
        textAlign:'center',
        color:'#0F0F3A'
    },
    congrats:{
        fontSize:5*vh,
        marginTop:4*vh,
        color:'#FF0D0D'
    }

})