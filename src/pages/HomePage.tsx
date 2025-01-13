import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomePage = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.headingText}>Using Icons in React Native</Text>
        <Text>
          It's not that easy to user Icons in recat native! But trust me not
          that difficult either.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Click Me"
          icon={{
            name: 'menu',
            color: 'white',
          }}
          onPress={() => console.log('Button Clicked')}
        />
        <Icon name="home" color="#fff" style={styles.homeIconStyle} />
      </View>

      <View>
        <Icon name="delete" size={50} />
        <Icon name="toggle-on" size={50} />
        <Icon name="delete" size={50} />
        <Icon name="delete" size={50} />
      </View>
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },
  container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  homeIconStyle: {
    backgroundColor: '#000',
    borderRadius: 24,
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
