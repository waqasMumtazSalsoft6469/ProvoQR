import React from 'react';
import { ImageBackground, View, Image, ScrollView, FlatList } from 'react-native';
import { backgrounds, icons } from '../../assets/images';
import styles from './styles';
import RubikLight from '../../components/Text/RubikLight'
import MainInput from '../../components/Input/MainInput';
import { vh, vw } from '../../Utils/Units';
import NotifCard from '../../components/NotifCard'

class RegisterScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notification: [{
                title: 'Your Order Is Ready',
                message: 'Lorem Ipsum is simply dummy text of the printing'
            },
            {
                title: 'Your Order Is Ready',
                message: 'Lorem Ipsum is simply dummy text of the printing'
            },
            {
                title: 'Your Order Is Ready',
                message: 'Lorem Ipsum is simply dummy text of the printing'
            },
            {
                title: 'Your Order Is Ready',
                message: 'Lorem Ipsum is simply dummy text of the printing'
            },
            {
                title: 'Your Order Is Ready',
                message: 'Lorem Ipsum is simply dummy text of the printing'
            },
            {
                title: 'Your Order Is Ready',
                message: 'Lorem Ipsum is simply dummy text of the printing'
            }
            ]
        };
    }

    renderitem = ({ item, index }) => {
        return (
            <View style={{marginBottom:2*vh}}>
  <NotifCard item={item}
            />
            </View>
          

        )
    }
    render() {
        return (
            <View style={styles.container}>
                    <ImageBackground source={backgrounds.grayBackground}
                        style={styles.imgbg}
                        resizeMode='cover'
                        imageStyle={{ width: 100 * vw,}}>
                            <ScrollView>


                        <View style={{ alignItems: 'center', marginTop: 5 * vh, paddingHorizontal: 4 * vw }}>

                            <FlatList
                                data={this.state.notification}
                      
                                style={{ marginTop: 2 * vh,marginBottom:2*vh, }}
                                renderItem={this.renderitem}


                            />
                        </View>
                        </ScrollView>

                    </ImageBackground>
            </View>


        );
    }
}
export default RegisterScreen;