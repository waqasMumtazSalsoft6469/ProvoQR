import React from 'react';
import {Modal, TouchableOpacity, View} from 'react-native';
import TouchableHOC from '../../Buttons/TouchableHOC';
import OutfitRegularText from '../../Text/OutfitRegularText';
import styles from './styles';
const ImagePickerModal = props => {
  return (
    <Modal visible={props.visible} animationType={'slide'} transparent={true}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.backdropContainer}
          activeOpacity={0.9}
          onPress={props.hide}
        />
        <View style={styles.modal}>
          {props.choices.map((item, index) => {
            return (
              <>
                <TouchableHOC onPress={item?.onClick} style={styles.btnStyle}>
                  <OutfitRegularText style={styles.btnText}>
                    {item?.name}
                  </OutfitRegularText>
                </TouchableHOC>
                {index < props.choices.length - 1 && (
                  <View style={styles.line} />
                )}
              </>
            );
          })}
        </View>
      </View>
    </Modal>
  );
};

export default ImagePickerModal;
