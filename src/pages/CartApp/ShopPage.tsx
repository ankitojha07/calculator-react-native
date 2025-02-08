import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import Header from '../../components/CartComponents/Header';
import Products from '../../components/CartComponents/Products';

const ShopPage = () => {
  const product = [
    {
      name: 'Samsung Mobile',
      price: 3000,
      color: 'Blue',
      image: 'https://placebear.com/250/250',
    },
    {
      name: 'Apple iPhone',
      price: 3000,
      color: 'Blue',
      image: 'https://placebear.com/250/250',
    },
    {
      name: 'Nokia',
      price: 3000,
      color: 'Blue',
      image: 'https://placebear.com/250/250',
    },
    {
      name: 'One PLus',
      price: 3000,
      color: 'Blue',
      image: 'https://placebear.com/250/250',
    },
    {
      name: 'One PLus',
      price: 3000,
      color: 'Blue',
      image: 'https://placebear.com/250/250',
    },
    {
      name: 'One PLus',
      price: 3000,
      color: 'Blue',
      image: 'https://placebear.com/250/250',
    },
  ];
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.cardContainer}>
        {product.map((item, key) => (
          <Products
            key={key}
            name={item.name}
            color={item.color}
            price={item.price}
            image={item.image}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default ShopPage;

const styles = StyleSheet.create({
  container: {
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 14,
  },
});
