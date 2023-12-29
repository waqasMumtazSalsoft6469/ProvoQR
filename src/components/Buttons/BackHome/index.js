// BackToHome.js
import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ThemeColors from '../../../Utils/ThemeColors';

const BackToHome = ({_style}) => {
  const navigation = useNavigation();

  const handlePress = () => {
    // Reset the navigation stack to the Home screen
    navigation.reset({
      index: 0,
      routes: [{name: 'MainNavigator'}],
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress} style={styles.btn}>
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  btn: {
    margin: 10,
    borderBottomWidth: 1.5,
    borderBottomColor: ThemeColors.primary,
    marginBottom: 15,
  },
  buttonText: {
    // textDecorationLine: 'underline',
    color: ThemeColors.primary,
    fontWeight: 'bold',
    // Add other styles as needed
  },
});

export default BackToHome;
