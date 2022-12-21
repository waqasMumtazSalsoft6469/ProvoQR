import React from 'react';
import {ImageBackground, View, Image, FlatList} from 'react-native';
import {backgrounds, icons, sampleimage} from '../../assets/images';
import OutfitSemiBoldText from '../../components/Text/OutfitSemiBoldText';
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
      menu: [],
    };
  }

  componentDidMount() {
    const {id} = this.props.route.params;
    let data = {restaurant_id: id};
    this.props.getMenu(data).then(res => {
      this.setState({menu: res?.menu});
    });
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

  renderMenuList = ({item, index}) => {
    return (
      <>
        <OutfitSemiBoldText>{item?.name}</OutfitSemiBoldText>
        <FlatList
          data={item?.business_menus}
          style={{marginTop: 2 * vh}}
          renderItem={this.renderitem}
        />
        {index < this.state.menu?.length - 1 && this.renderDash()}
      </>
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
          <ScrollView
            style={{marginBottom: vh * 8, marginHorizontal: vw * 5}}
            showsVerticalScrollIndicator={false}
            nestedScrollEnabled>
            <FlatList
              data={this.state.menu}
              style={{marginTop: 2 * vh}}
              renderItem={this.renderMenuList}
              ListEmptyComponent={this.emptyList}
              nestedScrollEnabled
            />
          </ScrollView>
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
