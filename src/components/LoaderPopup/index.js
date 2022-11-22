import {BlurView} from '@react-native-community/blur';
import React from 'react';
import {View, Text, Modal, ActivityIndicator, Platform} from 'react-native';
import {useSelector} from 'react-redux';
import ThemeColors from '../../Utils/ThemeColors';
import styles from './styles';

const LoaderPopup = () => {
  const loading = useSelector(state => state.GeneralReducer.loading);
  return (
    <Modal
      animationType="fade"
      visible={loading}
      transparent={true}
      style={styles.modal}>
      <View style={styles.modalContainer}>
        <View style={styles.blurBackground}>
          <BlurView
            style={styles.blurView}
            blurType="light"
            blurAmount={6}
            reducedTransparencyFallbackColor="white"
          />
        </View>
        <ActivityIndicator size="large" color={ThemeColors.primary} />
      </View>
    </Modal>
  );
};

export default LoaderPopup;
