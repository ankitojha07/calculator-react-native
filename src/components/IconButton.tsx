import {StyleSheet, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface IconButtonProps {
  name: string;
}

const IconButton = ({name}: IconButtonProps) => {
  return (
    <View style={styles.button}>
      <Icon name={name} style={styles.icon} />
    </View>
  );
};

export default IconButton;

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
  icon: {
    fontSize: 20,
    textAlignVertical: 'center',
    color: '#29A8FF',
    fontWeight: 'bold',
    textAlign: 'center',
    height: 30,
  },
});
