import {StyleSheet, View} from 'react-native';
import React from 'react';
import Button from '../components/Button';
import IconButton from '../components/IconButton';
import Display from '../components/Display';

const CalculatorScreen = () => {
  return (
    <View style={styles.container}>
      <Display result="4" key={1} expression="78" />
      <View style={styles.keypad}>
        <Button value="AC" />
        <Button value="/" />
        <IconButton name="backspace" />
        <Button value="*" />
      </View>
      <View style={styles.keypad}>
        <Button value="7" />
        <Button value="8" />
        <Button value="9" />
        <Button value="-" />
      </View>
      <View style={styles.keypad}>
        <Button value="4" />
        <Button value="5" />
        <Button value="6" />
        <Button value="+" />
      </View>
      <View style={styles.keypad}>
        <Button value="0" />
        <Button value="." />
        <Button value="=" />
      </View>
    </View>
  );
};

export default CalculatorScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  keypad: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
