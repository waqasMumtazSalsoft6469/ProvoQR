import React from 'react';
import { Image, View, ImageBackground, TouchableOpacity } from 'react-native';
import styles from './styles';
import TouchableHOC from '../../components/Buttons/TouchableHOC';
import { vw, vh } from '../../Utils/Units';
import { icons, sampleimage } from '../../assets/images';
import GilroyBold from '../../components/Text/GilroyBold'
import RateCard from '../RatingCard'
import OutfitSemiBoldText from '../../components/Text/OutfitSemiBoldText'
import OutfitRegularText from '../Text/OutfitRegularText';
import OutfitMediumText from '../Text/OutfitMediumText';

class ProductItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            
        };
    }

    render() {

        return (
            <TouchableHOC style={styles.card}
          >

              <OutfitMediumText style={styles.date}>10/22/21</OutfitMediumText>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                   <View style={styles.cardimage}>
                        <Image source={icons.purplenotif}
                        style={styles.notif}/>
                   </View>

                    <View style={{marginLeft:2.5*vw}}>
                        <OutfitSemiBoldText style={styles.name}>{this.props.item.title}</OutfitSemiBoldText>
                        <OutfitRegularText style={styles.cus}>{this.props.item.message}</OutfitRegularText>
                       
                    </View>
                </View>
                

            </TouchableHOC>
        );
    }
}



export default ProductItem;
