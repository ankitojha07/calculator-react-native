import {View} from 'react-native';
import React from 'react';
import {Image} from 'react-native-elements';
import logo from '../../../assets/images/logo.png';
import styles from '../../Stylesheets/Mainstyle.tsx';

const Splashscreen = () => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logoStyle} />
    </View>
  );
};

export default Splashscreen;
