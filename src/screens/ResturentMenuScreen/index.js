import React from 'react';
import {ImageBackground, View, Image, FlatList} from 'react-native';
import {backgrounds, icons, sampleimage} from '../../assets/images';
import OutfitSemiBoldText from '../../components/Text/OutfitSemiBoldText';
import styles from './styles';
import MenuCard from '../../components/MenuCard';
import {vh, vw} from '../../Utils/Units';
import {ScrollView} from 'react-native-gesture-handler';
import Dash from 'react-native-dash';

class ResturentMenuScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectreward: true,
      reward: [
        {
          name: 'Pumpkin Soup',
          category: 'Bread, servilate, cheese, tomato, lettuce',
          image: sampleimage.reward1,
        },
        {
          name: 'Sandwich',
          category: 'Salmon, asparagus,hard cheese,guanciale...',
          image: sampleimage.reward2,
        },
      ],
    };
  }

  renderitem = ({item, index}) => {
    return <MenuCard item={item} onPressCard={() => {}} />;
  };
  renderDash = () => {
    return (
      <Dash
        style={{
          width: 100 * vw,
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: vh * 2,
          marginBottom: vh * 2,
        }}
        dashColor="#BBBBBB"
        dashLength={0}
        dashGap={1 * vh}
        dashStyle={{width: 2 * vw}}></Dash>
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
          <ScrollView
            style={{marginBottom: vh * 8, marginHorizontal: vw * 5}}
            showsVerticalScrollIndicator={false}>
            <OutfitSemiBoldText>Breakfast</OutfitSemiBoldText>
            <FlatList
              data={this.state.reward}
              style={{marginTop: 2 * vh}}
              renderItem={this.renderitem}
            />
            {this.renderDash()}
            <OutfitSemiBoldText>Lunch</OutfitSemiBoldText>
            <FlatList
              data={this.state.reward}
              style={{marginTop: 2 * vh}}
              renderItem={this.renderitem}
            />
            {this.renderDash()}

            <OutfitSemiBoldText>Dinner</OutfitSemiBoldText>
            <FlatList
              data={this.state.reward}
              style={{marginTop: 2 * vh}}
              renderItem={this.renderitem}
            />
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}
export default ResturentMenuScreen;
