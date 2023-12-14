import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Modal,
  TouchableOpacity,
  Button,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {backgrounds} from '../../assets/images';
import {vh} from '../../Utils/Units';

const CustomModal = ({children, visible, onClose}) => {
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleTransfer = () => {
    if (inputValue.trim() === '') {
      setErrorMessage('Input cannot be empty');
    } else {
      // Handle your transfer logic here
      // For now, just close the modal
      onClose();
    }
  };

  return (
    <Modal visible={visible} transparent={false} animationType="slide">
      <ImageBackground
        source={backgrounds.grayBackground}
        style={{flex: 1}}
        resizeMode="cover">
        <View style={styles.container}>
          <View style={styles.modalContainer}>{children}</View>
        </View>
      </ImageBackground>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    height: vh * 50,
    backgroundColor: 'white',
    padding: 20,
    // justifyContent: 'center',
    borderRadius: 10, // Add border radius
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Add shadow
  },
  heading: {
    fontSize: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  errorMessage: {
    color: 'red',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  transferButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});
