import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Navigation from './src/Navigation';
import store, {persistor} from './src/Redux/store';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <StatusBar
              translucent={true}
              backgroundColor="transparent"
              animated={true}
              barStyle="light-content"
            />
            <Navigation />
          </PersistGate>
        </Provider>
      </View>
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
