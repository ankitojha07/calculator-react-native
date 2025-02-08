import {View, StyleSheet} from 'react-native';
import React, {useState} from 'react';
// import HomePage from './src/pages/HomePage';
import Splashscreen from './src/pages/static/Splashscreen';
import ShopPage from './src/pages/CartApp/ShopPage';

const App = () => {
  const [loaded, setLoaded] = useState(false);
  setTimeout(() => {
    setLoaded(true);
  }, 2000);
  return (
    <View style={styles.container}>
      {loaded ? <ShopPage /> : <Splashscreen />}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
