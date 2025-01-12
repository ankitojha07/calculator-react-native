import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

interface ButtonProps {
  value: string;
  customStyle?: object;
}

const Button = ({value}: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={[styles.text]}>{value}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    width: 62,
    height: 60,
    backgroundColor: '#303136',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
  text: {
    fontSize: 20,
    color: '#29A8FF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
