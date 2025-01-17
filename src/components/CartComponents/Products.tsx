import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from 'react-native-elements';

interface productProps {
  name: string;
  price: number;
  color: string;
  image: string;
}

const Products = ({name, price, color, image}: productProps) => {
  return (
    <View style={styles.card}>
      <Text style={styles.textStyle}>{name}</Text>
      <View style={styles.columnView}>
        <View>
          <Text style={styles.textStyle}>{price}</Text>
          <Text style={styles.textStyle}>{color}</Text>
        </View>
        <Image style={styles.imageStyle} source={{uri: image}} />
      </View>
      <Button title="Add to cart" style={styles.button} />
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  card: {
    borderWidth: 2,
    padding: 4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  textStyle: {
    fontSize: 24,
  },
  button: {
    borderRadius: 34,
    width: '100%',
  },
  imageStyle: {
    height: 100,
    width: 100,
  },
  columnView: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 14,
  },
});
