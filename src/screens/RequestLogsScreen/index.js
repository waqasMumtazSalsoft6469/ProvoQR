import React from 'react';
import {ImageBackground, View, Image, FlatList} from 'react-native';
import {backgrounds, icons, sampleimage} from '../../assets/images';
import OutfitSemiBoldText from '../../components/Text/OutfitSemiBoldText';
import RewardCard from '../../components/RewardCard';
import styles from './styles';
import {vh} from '../../Utils/Units';

class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectreward: true,
      reward: [
        {
          name: 'Finest Dining Restaurant',
          category: 'Address',
          image: sampleimage.reward1,
        },
        {
          name: 'Finest Dining Restaurant',
          category: 'Address',
          image: sampleimage.reward2,
        },
        {
          name: 'Finest Dining Restaurant',
          category: 'Address',
          image: sampleimage.reward3,
        },
        {
          name: 'Finest Dining Restaurant',
          category: 'Address',
          image: sampleimage.reward1,
        },
        {
          name: 'Finest Dining Restaurant',
          category: 'Address',
          image: sampleimage.reward2,
        },
        {
          name: 'Finest Dining Restaurant',
          category: 'Address',
          image: sampleimage.reward3,
        },
      ],
    };
  }

  renderitem = ({item, index}) => {
    return (
      <RewardCard
        item={item}
        viewmap={() =>
          this.props.navigation.navigate('MapStack', {
            screen: 'ShowonMapScreen',
          })
        }
      />
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={backgrounds.grayBackground}
          style={styles.imgbg}
          resizeMode="cover"
          imageStyle={styles.imgbg}>
          <View style={{alignItems: 'center', marginTop: vh}}>
            <OutfitSemiBoldText style={{fontSize: vh * 2.5}}>
              Restaurant Request Logs
            </OutfitSemiBoldText>
            <FlatList
              data={this.state.reward}
              style={{marginTop: 2 * vh}}
              renderItem={this.renderitem}
            />
          </View>
        </ImageBackground>
      </View>
    );
  }
}
export default RegisterScreen;
