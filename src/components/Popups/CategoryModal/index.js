import React, {Component} from 'react';
import {
  View,
  Modal,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import styles from './styles';
import {
  icons,
  assets,
  footer,
  backgrounds,
  sampleimage,
} from '../../../assets/images';
import Button from '../../Buttons/SimpleButton';
import GilroyBold from '../../Text/GilroyBold';
import {BlurView} from '@react-native-community/blur';
import TouchableHOC from '../../Buttons/TouchableHOC';
import RubikLight from '../../Text/RubikLight';
import {vw, vh} from '../../../Utils/Units';
import ThemeColors from '../../../Utils/ThemeColors';
import BottomSheetWrapper from '../../BottomSheetWrapper';
import OutfitSemiBoldText from '../../Text/OutfitSemiBoldText';
import OutfitRegularText from '../../Text/OutfitRegularText';
import {connect} from 'react-redux';
import {getAllCategories} from '../../../Redux/Actions/otherActions';

class CategoryModal extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   categories: [],
    // };
  }

  onButtonPress = () => {
    if (this.props.onButtonPress || this.props.setVisible) {
      this.props.onButtonPress();
      this.props.setVisible();
    }
  };

  //   componentDidMount() {
  //     this.props.getAllCategories().then(res => {
  //       this.setState({
  //         categories: res?.categoryList?.data,
  //       });
  //     });
  //   }

  renderEmpty = () => {
    return (
      <View>
        <OutfitRegularText>No Categories</OutfitRegularText>
      </View>
    );
  };

  renderHeader = () => {
    return (
      <View>
        <OutfitSemiBoldText>Filter by Category</OutfitSemiBoldText>
      </View>
    );
  };

  handleCategoryPress = item => {
    this.props.setVisible();
    this.props.setCategory(item);
  };

  renderItem = ({item, index}) => {
    return (
      <TouchableHOC
        style={styles.contentContainer}
        onPress={() => this.handleCategoryPress(item)}>
        <OutfitRegularText style={styles.nameTextStyle}>
          {item.name}
        </OutfitRegularText>
      </TouchableHOC>
    );
  };

  render() {
    // console.log('categories', this.props.categories);
    return (
      <BottomSheetWrapper
        noBackDrop
        visible={this.props.visible}
        setVisible={this.props.setVisible}>
        <View style={styles.container}>
          <FlatList
            data={this.props.categories}
            renderItem={this.renderItem}
            ListHeaderComponent={this.renderHeader}
            ListEmptyComponent={this.renderEmpty}
          />
          {/* <Image source={this.props.icon} style={styles.icon} />
          <OutfitSemiBoldText style={styles.title}>
            {this.props.title}
          </OutfitSemiBoldText>
          <OutfitRegularText style={styles.description}>
            {this.props.description}
          </OutfitRegularText>
          <View style={styles.buttonContainer}>
            <Button
              title={this.props.buttonTitle}
              onPress={() => this.onButtonPress()}
              btnContainer={styles.buttonStyle}
            />
            {this.props.no && (
              <Button
                title={'No'}
                onPress={this.props.no}
                btnContainer={styles.buttonStyle}
              />
            )}
          </View> */}
        </View>
      </BottomSheetWrapper>
    );
  }
}

const mapStateToProps = state => ({
  // count: state.count,
  categories: state.GeneralReducer.categories,
});
const mapDispatchToProps = dispatch => {
  return {
    // explicitly forwarding arguments
    getAllCategories: () => dispatch(getAllCategories()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CategoryModal);
