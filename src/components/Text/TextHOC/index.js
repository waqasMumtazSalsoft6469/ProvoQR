import React from 'react';
import styles from "./styles"
import { Text,Clipboard } from 'react-native'
import { showToast } from '../../../Api/HelperFunction';

const TextHOC = (props) => {
    console.log(props?.children)
    return (
        <Text
            onLongPress={() => copyText(props?.children)}
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
const copyText = (children) => {
        if(typeof children === 'string'){
            Clipboard.setString(children)
            // showToast('Key Copy to Clipboard')
            showToast('"'+children+'" copied to clipboard.')
        }
    }

export default TextHOC