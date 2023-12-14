import React from 'react';
import {ImageBackground, View, Image, FlatList} from 'react-native';
import {backgrounds, icons, sampleimage} from '../../assets/images';
import OutfitSemiBoldText from '../../components/Text/OutfitSemiBoldText';
import OutfitRegularText from '../../components/Text/OutfitRegularText';
import styles from './styles';
import MenuCard from '../../components/MenuCard';
import {vh, vw} from '../../Utils/Units';
import {ScrollView} from 'react-native-gesture-handler';
import Dash from 'react-native-dash';
import {getMenu} from '../../Redux/Actions/otherActions';
import {connect} from 'react-redux';

class ResturentMenuScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuList: [],
      menu: {},
    };
  }

  componentDidMount() {
    const {id} = this.props.route.params;
    let data = {restaurant_id: id};
    this.props.getMenu(data).then(res => {
      // Remove empty arrays
      const filteredData = Object.fromEntries(
        Object.entries(res?.menu).filter(
          ([key, value]) => Array.isArray(value) && value.length > 0,
        ),
      );
      const convertedData = Object.entries(filteredData).map(
        ([key, value]) => ({
          name: key,
          menu: value,
        }),
      );
      this.setState({menuList: convertedData});
    });
  }

  renderitem = ({item, index}) => {
    return <MenuCard item={item} onPressCard={() => {}} />;
  };
  renderDash = () => {
    return (
      <Dash
        style={{
          width: 90 * vw,
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

  renderMenuList = ({item, index}) => {
    return (
      <>
        <OutfitSemiBoldText style={{fontSize: vh * 2}}>
          {item?.name.toUpperCase()}
        </OutfitSemiBoldText>
        <FlatList
          data={item?.menu}
          style={{marginTop: 2 * vh}}
          renderItem={this.renderitem}
          // ListEmptyComponent={this.emptyMenuItem}
        />
        {index < this.state.menu?.length - 1 && this.renderDash()}
      </>
    );
  };

  emptyMenuItem = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 10,
        }}>
        <OutfitRegularText>No item avaible</OutfitRegularText>
      </View>
    );
  };

  emptyList = () => {
    return (
      <View style={styles.emptyList}>
        <OutfitSemiBoldText style={{fontSize: vh * 2.4}}>
          No menu avaible for this restaurant
        </OutfitSemiBoldText>
      </View>
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
          {/* <ScrollView
            style={{marginBottom: vh * 8, marginHorizontal: vw * 5}}
            showsVerticalScrollIndicator={false}
            nestedScrollEnabled> */}
          <FlatList
            data={this.state.menuList}
            style={{marginTop: 2 * vh}}
            renderItem={this.renderMenuList}
            ListEmptyComponent={this.emptyList}
            contentContainerStyle={styles.contentContainerStyle}
            // nestedScrollEnabled
          />
          {/* </ScrollView> */}
        </ImageBackground>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  // count: state.count,
});
const mapDispatchToProps = dispatch => {
  return {
    // explicitly forwarding arguments
    getMenu: data => dispatch(getMenu(data)),
    // signup: data => dispatch(userSignup(data)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResturentMenuScreen);
