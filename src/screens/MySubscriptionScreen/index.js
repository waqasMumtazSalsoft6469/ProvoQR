import React from 'react';
import {ImageBackground, View, Image, ScrollView} from 'react-native';
import {backgrounds, icons} from '../../assets/images';
import styles from './styles';
import SubsCard from '../../components/SubsCard';
import {vh, vw} from '../../Utils/Units';
import TouchableHOC from '../../components/Buttons/TouchableHOC';
import OutfitSemiBoldText from '../../components/Text/OutfitSemiBoldText';
import OutfitMediumText from '../../components/Text/OutfitMediumText';
import OutfitLightText from '../../components/Text/OutfitLightText';
import OutfitRegularText from '../../components/Text/OutfitRegularText';
import {getMySubscription} from '../../Redux/Actions/otherActions';
import {connect} from 'react-redux';
import {subPackges} from '../../Redux/Actions/authActions';
import moment from 'moment/moment';

class MySuscription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeindex: -1,
      subscription: null,
      packages: [],
      token: this.props.token,
    };
  }

  componentDidMount() {
    this.props.getMySubscription().then(res => {
      console.log('My Current Package ***>>>', res?.subscriptionPlans);
      let activePackage = res?.subscriptionPlans;
      this.setState({subscription: res?.subscriptionPlans[0]});
    });
    this.props.subPackges().then(res => {
      this.setState({packages: res?.packages});
    });
  }

  rendersubscriptions = () => {
    return this.state?.packages.map((item, index) => {
      return (
        <View style={{marginTop: 5 * vh, alignItems: 'center'}}>
          <SubsCard
            item={item}
            success={(itemIndex, item) => {
              this.props.navigation.navigate('Payment', {
                id: item?.id,
                token: this.state.token,
                from: this?.props?.route?.name,
              });
            }}
            index={index}
            activeindex={this.state.activeindex}
          />
          {/* <SubsCard
          item={subscription[index]}
          success={(itemIndex, item) => {
            props.navigation.navigate('Payment', {
              id: subscription[itemIndex]?.id,
              token,
            });
          }}
          index={index}
          activeindex={activeindex}
        /> */}
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
    console.log(
      'end date',
      moment(this.state?.subscription?.end_date, 'YYYY-MM-DD').diff(
        moment(),
        'days',
      ),
    );
    return (
      <View style={styles.container}>
        <ImageBackground
          source={backgrounds.grayBackground}
          style={styles.imgbg}
          resizeMode="cover"
          imageStyle={styles.imgbg}>
          <ScrollView nestedScrollEnabled={true}>
            <View
              style={{
                alignItems: 'flex-end',
                marginRight: 12 * vw,
                marginTop: 2 * vh,
              }}>
              <TouchableHOC
                style={{alignItems: 'flex-end'}}
                onPress={() =>
                  this.props.navigation.navigate('SubscriptionLogs')
                }>
                <OutfitRegularText style={styles.viewmap}>
                  Subscription Logs
                </OutfitRegularText>
              </TouchableHOC>
            </View>

            {this.state.subscription ? (
              <View style={{alignItems: 'center', marginTop: 2 * vh}}>
                {this.rendermyPlan()}
                <View style={styles.locationscroll}>
                  <OutfitRegularText style={styles.scrolltext}>
                    (Package Expires in {''}
                    {/* {moment
                      .duration(
                        moment().diff(
                          moment(
                            this.state.subscription?.end_date,
                            'YYYY-MM-DD',
                          ),
                        ),
                      )
                      .asDays()
                      ?.toFixed(0)}{' '} */}
                    {moment(
                      this.state.subscription?.end_date,
                      'YYYY-MM-DD',
                    ).diff(moment(), 'days')}{' '}
                    Days)
                  </OutfitRegularText>
                </View>
              </View>
            ) : (
              <View style={{alignItems: 'center', marginTop: 2 * vh}}>
                <OutfitSemiBoldText>
                  You don't have any subscribe package
                </OutfitSemiBoldText>
              </View>
            )}

            {this.rendersubscriptions()}
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  // count: state.count,
  token: state.SessionReducer.token,
});
const mapDispatchToProps = dispatch => {
  return {
    // explicitly forwarding arguments
    getMySubscription: () => dispatch(getMySubscription()),
    subPackges: () => dispatch(subPackges()),
    // signup: data => dispatch(userSignup(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MySuscription);
