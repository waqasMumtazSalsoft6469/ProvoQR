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

  return (
    <View style={styles.container}>
      <View style={styles.timerBackfround}>
        <OutfitRegularText style={styles.timeLabel}>
          {String(Math.floor(time / 60))[1]
            ? String(Math.floor(time / 60))[0]
            : '0'}
        </OutfitRegularText>
      </View>
      <View style={styles.timerBackfround}>
        <OutfitRegularText style={styles.timeLabel}>
          {String(Math.floor(time / 60))[1]
            ? String(Math.floor(time / 60))[1]
            : String(Math.floor(time / 60))[0]}
        </OutfitRegularText>
      </View>
      <OutfitRegularText style={styles.timeLabel1}>:</OutfitRegularText>
      <View style={styles.timerBackfround}>
        <OutfitRegularText style={styles.timeLabel}>
          {String(time % 60)[1] ? String(time % 60)[0] : '0'}
        </OutfitRegularText>
      </View>
      <View style={styles.timerBackfround}>
        <OutfitRegularText style={styles.timeLabel}>
          {String(time % 60)[1] ? String(time % 60)[1] : String(time % 60)[0]}
        </OutfitRegularText>
      </View>
    </View>
  );
};

export default CountDownTimer;
