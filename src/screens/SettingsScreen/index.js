import React from 'react';
import { ImageBackground, View, Image } from 'react-native';
import { backgrounds, icons } from '../../assets/images';
import styles from './styles';

class RegisterScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           
        };
    }


    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={backgrounds.bgimage}
                    style={styles.imgbg}
                    resizeMode='cover'
                    imageStyle={styles.imgbg}>

                
                </ImageBackground>

            </View>


        );
    }
}
export default RegisterScreen;
