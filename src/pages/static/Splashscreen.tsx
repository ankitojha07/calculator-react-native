import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Image} from 'react-native-elements';
import logo from '../../../assets/images/logo.png';

const Splashscreen = () => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logoStyle} />
    </View>
  );
};

export default Splashscreen;

const styles = StyleSheet.create({
  logoStyle: {
    width: 300,
    height: 300,
  },
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
