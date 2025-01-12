import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface DisplayProps {
  expression: string;
  result: string;
}

const Display: React.FC<DisplayProps> = ({expression, result}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.expression}>{expression}</Text>
      <Text style={styles.result}>= {result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '65%',
    backgroundColor: '#ffffff',
    borderRadius: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  expression: {
    fontSize: 24,
    color: '#9e9e9e',
  },
  result: {
    fontSize: 36,
    color: '#000000',
    fontWeight: 'bold',
  },
});

export default Display;
