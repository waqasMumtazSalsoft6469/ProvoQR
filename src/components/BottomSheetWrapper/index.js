import React from 'react';
import {
  Image,
  Modal,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {styles} from './styles';

const BottomSheetWrapper = props => {
  return (
    <Modal animationType={'slide'} transparent={true} visible={props.visible}>
      {props?.noBackDrop && (
        <TouchableOpacity
          activeOpacity={0}
          style={styles.absolute}
          onPress={props.setVisible && props.setVisible}
        />
      )}

      <View style={styles.modalInnerContainer}>
        <View style={styles.backOpacity} />

        <View style={styles.horizontalLine} />
        {props.children}
      </View>
    </Modal>
  );
};

export default BottomSheetWrapper;
