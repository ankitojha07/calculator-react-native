import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Keypad = () => {
  return (
    <View style={styles.keypad}>
      <Text>Keypad</Text>
    </View>
  );
};

export default Keypad;

const styles = StyleSheet.create({
  keypad: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
