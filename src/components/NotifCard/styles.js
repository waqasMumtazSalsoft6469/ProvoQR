import { StyleSheet } from 'react-native';
import ThemeColors from '../../Utils/ThemeColors';
import { vw, vh } from '../../Utils/Units';

export default StyleSheet.create({

    cardimage: {
        
       
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#F2D3D1',
        borderRadius:1 * vh,
       width:15*vw,
       height:15*vw
    },
    date:{
        color: ThemeColors.fontBlack,
        textAlign:'right',
        fontSize: 1.7 * vh
    },
    card:{
        width:90*vw,
        paddingVertical:3*vh,
        paddingHorizontal:4*vw,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
      
        elevation: 4,
        borderColor:'#F3F3F3',
        borderWidth:0.5*vw,
        backgroundColor:ThemeColors.white,
        borderRadius:2*vh
    },
    name: {
        color: ThemeColors.fontBlack,
        fontSize: 2 * vh
    },
    notif:{
        width: 8 * vw,
       tintColor:ThemeColors.primary,
        height: 8 * vw,
        resizeMode: 'contain'
    },
    imgicon: {
        width: 5 * vw,
        tintColor:'#000000',
        height: 5 * vw,
        resizeMode: 'contain'
    },
    viewmap: {
        color: '#20C3CF',
        textDecorationLine: 'underline',
        fontSize: 1.7 * vh
    },
    dis:{
        color: ThemeColors.darkpurple,
        
        fontSize: 2 * vh
    },
    cus:{
        color: ThemeColors.fontDarkGrey,
        width:60*vw,
        marginTop:0.5*vh,
        fontSize: 1.7 * vh
    },

    imgcard:{
        resizeMode: 'contain',
        width: 80 * vw,
       
        borderRadius: 0.5 * vh,
        height: 50 * vw
    }
});
