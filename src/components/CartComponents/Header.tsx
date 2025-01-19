import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

const Header = () => {
  const cartData = useSelector((state: any) => state.reducer);
  const [cartItems, setCartItems] = useState(0);
  useEffect(() => {
    setCartItems(cartData.length);
  }, [cartData]);
  console.warn(cartData);
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Product Count</Text>
      <Text style={styles.textStyle}>{cartItems}</Text>
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
