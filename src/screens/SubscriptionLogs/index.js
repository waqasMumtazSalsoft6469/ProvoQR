import React from 'react';
import {ImageBackground, View, Image, ScrollView} from 'react-native';
import {backgrounds, icons} from '../../assets/images';
import styles from './styles';
import PlanCard from '../../components/PlanCard';
import {vh, vw} from '../../Utils/Units';
import TouchableHOC from '../../components/Buttons/TouchableHOC';
import OutfitSemiBoldText from '../../components/Text/OutfitSemiBoldText';
import OutfitMediumText from '../../components/Text/OutfitMediumText';
import OutfitLightText from '../../components/Text/OutfitLightText';
import OutfitRegularText from '../../components/Text/OutfitRegularText';
import Dash from 'react-native-dash';
import {connect} from 'react-redux';
import {
  getMySubscription,
  getSubscriptionLogs,
} from '../../Redux/Actions/otherActions';
import moment from 'moment';

class SubscriptionLogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subscription: {},
      activeindex: -1,
      logs: [],
    };
  }

  componentDidMount() {
    this.props.getMySubscription().then(res => {
      this.setState({subscription: res?.subscriptionPlans[0]});
    });
    this.props.getSubscriptionLogs().then(res => {
      this.setState({logs: res?.subscriptionLogs});
    });
  }
  rendersubscriptions = () => {
    return this.state?.logs.map((item, index) => {
      return (
        <View style={{marginTop: 5 * vh, alignItems: 'center'}}>
          <PlanCard item={item} index={index} />
        </View>
      );
    });
  };

  rendermyPlan = () => {
    return (
      <View style={styles.containerclick}>
        <OutfitSemiBoldText style={styles.title}>
          {this.state.subscription?.packages?.name?.toUpperCase()}
        </OutfitSemiBoldText>
        <OutfitRegularText style={styles.current}>
          (Current Plan)
        </OutfitRegularText>
        <OutfitMediumText style={styles.month}>
          {this.state.subscription?.packages?.duration?.toUpperCase()} PLAN
        </OutfitMediumText>
        <View style={{flexDirection: 'row'}}>
          <OutfitSemiBoldText style={styles.symbol}>$</OutfitSemiBoldText>
          <OutfitSemiBoldText style={styles.amount}>
            {this.state.subscription?.packages?.price}
          </OutfitSemiBoldText>
        </View>
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
          <ScrollView>
            <View style={{alignItems: 'center', paddingVertical: 2 * vh}}>
              {this.rendermyPlan()}

              <View style={styles.locationscroll}>
                <OutfitRegularText style={styles.scrolltext}>
                  (Package Expires in {''}
                  {this.state.subscription?.end_date
                    ? moment
                        .duration(
                          moment(new Date()).diff(
                            moment(
                              this.state.subscription?.end_date,
                              'YYYY-MM-DD',
                            ),
                          ),
                        )
                        .asDays()
                        ?.toFixed(0)
                    : 0}{' '}
                  Days){' '}
                </OutfitRegularText>
              </View>
            </View>
            <Dash
              style={{
                width: 100 * vw,
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: vh * 2,
                marginBottom: vh * 2,
              }}
              dashColor="#E9E9E9"
              dashLength={0}
              dashGap={1 * vh}
              dashStyle={{width: 2 * vw}}></Dash>
            {this.rendersubscriptions()}
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => {
  return {
    // explicitly forwarding arguments
    getMySubscription: () => dispatch(getMySubscription()),
    getSubscriptionLogs: () => dispatch(getSubscriptionLogs()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SubscriptionLogs);
