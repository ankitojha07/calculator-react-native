import {View, StyleSheet} from 'react-native';
import React from 'react';
import HomePage from './src/pages/HomePage';

const App = () => {
  return (
    <View style={styles.container}>
      <HomePage />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
