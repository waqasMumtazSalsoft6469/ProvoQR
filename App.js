import React from 'react';
import {StyleSheet, View, StatusBar, Text} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import LoaderPopup from './src/components/LoaderPopup';
import Navigation from './src/Navigation';
import store, {persistor} from './src/Redux/store';
import AnimatedSplash from 'react-native-animated-splash';

class App extends React.Component {
  componentDidMount() {
    AnimatedSplash.hide();
  }

  render() {
    return (
      // <View style={styles.container}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <StatusBar
            translucent={true}
            backgroundColor="transparent"
            animated={true}
            barStyle="dark-content"
          />
          {/* <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Helllo Testing Blank Screen</Text>
          </View> */}
          <Navigation />
          <LoaderPopup />
        </PersistGate>
      </Provider>
      // </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
});

export default App;
