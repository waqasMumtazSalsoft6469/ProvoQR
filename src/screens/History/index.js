import React from 'react';
import {
  ImageBackground,
  View,
  Image,
  FlatList,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {backgrounds, icons, sampleimage} from '../../assets/images';
import styles from './styles';
import HomeCard from '../../components/ResCard';
import TouchableHOC from '../../components/Buttons/TouchableHOC';
import {vh, vw} from '../../Utils/Units';
import Dash from 'react-native-dash';

class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      home: [
        {
          image: sampleimage.home1,
          name: 'Finest Dining Restaurant',
          distance: '113 meter',
          totalscan: '23',
          enum: 1,
          cusines: [
            {
              name: 'Cuisine 01',
            },
            {
              name: 'Cuisine 02',
            },
            {
              name: 'Cuisine 03',
            },
          ],
        },
        {
          image: sampleimage.home2,
          name: 'Finest Dining Restaurants',
          distance: '113 meter',
          totalscan: '23',
          enum: 2,
          cusines: [
            {
              name: 'Cuisine 01',
            },
            {
              name: 'Cuisine 02',
            },
            {
              name: 'Cuisine 03',
            },
          ],
        },
        {
          image: sampleimage.home2,
          name: 'Finest Dining Restaurant',
          distance: '113 meter',
          totalscan: '23',
          enum: 3,
          cusines: [
            {
              name: 'Cuisine 01',
            },
            {
              name: 'Cuisine 02',
            },
            {
              name: 'Cuisine 03',
            },
          ],
        },
        {
          image: sampleimage.home2,
          name: 'Finest Dining Restaurant',
          distance: '113 meter',
          totalscan: '23',
          enum: 1,
          cusines: [
            {
              name: 'Cuisine 01',
            },
            {
              name: 'Cuisine 02',
            },
            {
              name: 'Cuisine 03',
            },
          ],
        },
      ],
    };
  }

  renderitem = ({item, index}) => {
    return (
      <View style={{marginVertical: 2 * vh}}>
        <HomeCard
          item={item}
          history
          onClick={() => this.props.navigation.navigate('HistoryDetails')}
        />
        {index + 1 < this.state.home.length && (
          <Dash
            style={{
              width: 60 * vw,
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: vh * 2,
              // marginBottom: vh * 2,
            }}
            dashColor="#E9E9E9"
            dashLength={0}
            dashGap={0.5 * vh}
            dashStyle={{width: 2 * vw, height: vh * 0.2}}></Dash>
        )}
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={backgrounds.grayBackground}
          style={{width: 100 * vw, flex: 1}}
          resizeMode="cover"
          imageStyle={{width: 100 * vw}}>
          <View style={{alignItems: 'center'}}>
            <FlatList
              data={this.state.home}
              showsVerticalScrollIndicator={false}
              style={{marginTop: vh, marginBottom: 4 * vh}}
              renderItem={this.renderitem}
            />
          </View>
        </ImageBackground>
      </View>
    );
  }
}
export default History;
