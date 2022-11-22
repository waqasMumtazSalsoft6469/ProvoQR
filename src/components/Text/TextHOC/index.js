import React from 'react';
import styles from "./styles"
import { Text } from 'react-native'

const TextHOC = (props) => {
    return (
        <Text
            onLongPress={() => copyText(props.children)}
            ellipsizeMode='tail'
            adjustsFontSizeToFit={false}
            allowFontScaling={false}
            {...props}

            style={[styles.font, props.style]}
        >
            {props.children}
        </Text>
    )
}
// const copyText = (children) => {
//     for(var child in children){
//         if(typeof children[child] === 'string'){
//             Clipboard.setString(child)
//             Api.showToast('"'+children[child]+'" copied to clipboard.')
//             break;
//         }
//     }

export default TextHOC