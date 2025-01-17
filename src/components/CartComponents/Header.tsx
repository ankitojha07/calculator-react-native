import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Product Count</Text>
      <Text style={styles.textStyle}>0</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: 0,
    width: '100%',
    backgroundColor: '#885566',
    borderRadius: 12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 32,
    color: '#fff',
    padding: 12,
  },
});
