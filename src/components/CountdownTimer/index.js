import React, {useState, useEffect} from 'react';
import {
  Image,
  Modal,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import OutfitRegularText from '../Text/OutfitRegularText';
import {styles} from './styles';
import moment from 'moment';

const CountDownTimer = props => {
  const [time, setTime] = useState(props.time);

  useEffect(() => {
    if (time > 0) {
      const interval = setInterval(() => {
        setTime(time - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [time]);

  // console.log('minnn', String(Math.floor((time % 3600) / 60))[1]);
  // console.log('miiinn', props?.time);
  // console.log('utc min', moment.utc(props?.time).format('mm'));

  return (
    <View style={[styles.container, props?.timerContainerStyle]}>
      <View style={[styles.timerBackfround, props?.timerBgStyle]}>
        <OutfitRegularText style={[styles.timeLabel, props?.textStyle]}>
          {String(Math.floor(time / 3600))[1]
            ? String(Math.floor(time / 3600))[0]
            : '0'}
        </OutfitRegularText>
      </View>
      <View style={[styles.timerBackfround, props?.timerBgStyle]}>
        <OutfitRegularText style={[styles.timeLabel, props?.textStyle]}>
          {String(Math.floor(time / 3600))[1]
            ? String(Math.floor(time / 3600))[1]
            : String(Math.floor(time / 3600))[0]}
        </OutfitRegularText>
      </View>
      <OutfitRegularText style={[styles.timeLabel1, props?.dotStyle]}>
        :
      </OutfitRegularText>
      <View style={[styles.timerBackfround, props?.timerBgStyle]}>
        <OutfitRegularText style={[styles.timeLabel, props?.textStyle]}>
          {String(Math.floor((time % 3600) / 60))[1]
            ? String(Math.floor((time % 3600) / 60))[0]
            : '0'}
        </OutfitRegularText>
      </View>
      <View style={[styles.timerBackfround, props?.timerBgStyle]}>
        <OutfitRegularText style={[styles.timeLabel, props?.textStyle]}>
          {String(Math.floor((time % 3600) / 60))[1]
            ? String(Math.floor((time % 3600) / 60))[1]
            : String(Math.floor((time % 3600) / 60))[0]}
        </OutfitRegularText>
      </View>
      <OutfitRegularText style={[styles.timeLabel1, props?.dotStyle]}>
        :
      </OutfitRegularText>
      <View style={[styles.timerBackfround, props?.timerBgStyle]}>
        <OutfitRegularText style={[styles.timeLabel, props?.textStyle]}>
          {String(time % 60)[1] ? String(time % 60)[0] : '0'}
        </OutfitRegularText>
      </View>
      <View style={[styles.timerBackfround, props?.timerBgStyle]}>
        <OutfitRegularText style={[styles.timeLabel, props?.textStyle]}>
          {String(time % 60)[1] ? String(time % 60)[1] : String(time % 60)[0]}
        </OutfitRegularText>
      </View>
    </View>
  );
};

export default CountDownTimer;
