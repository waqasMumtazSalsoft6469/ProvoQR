import React from 'react';
import {ImageBackground, View, FlatList} from 'react-native';
import {backgrounds} from '../../assets/images';
import styles from './styles';
import {vh} from '../../Utils/Units';
import NotifCard from '../../components/NotifCard';
import {connect} from 'react-redux';
import {getAllNotifications} from '../../Redux/Actions/otherActions';
import EmptyComponent from '../../components/EmptyComponent';

class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notification: [],
      refreshing: false,
    };
  }

  getNotifications = async () => {
    this.setState({
      refreshing: true,
    });

    try {
      //   const filters = {
      //     page: this.state.page,
      //     perPage: 10,
      //   };

      const response = await this.props.getAllNotifications();
      //   console.log('response', response);
      this.setState({
        notification: response?.notification,
      });

      //   let data = {
      //     refreshing: false,
      //     notifications: response?.notifications?.docs,
      //     totalPages: response?.notifications?.totalPages,
      //   };

      //   if (filters.page > 1) {
      //     data = {
      //       ...data,
      //       notifications: [
      //         ...this.state.notifications,
      //         ...response?.notifications?.docs,
      //       ],
      //     };
      //   }

      //   this.setState({
      //     ...data,
      //   });
    } catch (error) {
      this.setState({
        refreshing: false,
      });
      //   showToast(error);
    } finally {
      this.setState({
        refreshing: false,
      });
    }
  };

  componentDidMount() {
    this.getNotifications();
  }

  handleOnRefresh = () => {
    this.setState(
      //   {
      //     page: 1,
      //     totalPages: 1,
      //   },
      this.getNotifications,
    );
  };

  renderEmpty = () => {
    if (this.state?.refreshing) {
      return null;
    }
    return <EmptyComponent text="No notifications to show." />;
  };

  renderItem = ({item, index}) => {
    return (
      <View style={{marginBottom: 2 * vh}}>
        <NotifCard item={item} />
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
          imageStyle={styles.imageStyle}>
          <FlatList
            data={this.state.notification}
            renderItem={this.renderItem}
            showsVerticalScrollIndicator={false}
            refreshing={this.state.refreshing}
            ListEmptyComponent={this.renderEmpty}
            onRefresh={this.handleOnRefresh}
            contentContainerStyle={styles.contentContainerStyle}
          />
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
    getAllNotifications: () => dispatch(getAllNotifications()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);
