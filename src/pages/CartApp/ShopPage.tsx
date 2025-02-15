import {ScrollView, View} from 'react-native';
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
      desc: 'lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem veniam possimus maiores repellendus quaerat iste exercitationem! Necessitatibus fuga sapiente non',
    },
    {
      name: 'Apple iPhone',
      price: 3000,
      color: 'Blue',
      image: 'https://placebear.com/250/250',
      desc: 'lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem veniam possimus maiores repellendus quaerat iste exercitationem! Necessitatibus fuga sapiente non',
    },
    {
      name: 'Nokia',
      price: 3000,
      color: 'Blue',
      image: 'https://placebear.com/250/250',
      desc: 'lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem veniam possimus maiores repellendus quaerat iste exercitationem! Necessitatibus fuga sapiente non',
    },
    {
      name: 'One PLus',
      price: 3000,
      color: 'Blue',
      image: 'https://placebear.com/250/250',
      desc: 'lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem veniam possimus maiores repellendus quaerat iste exercitationem! Necessitatibus fuga sapiente non',
    },
    {
      name: 'One PLus',
      price: 3000,
      color: 'Blue',
      image: 'https://placebear.com/250/250',
      desc: 'lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem veniam possimus maiores repellendus quaerat iste exercitationem! Necessitatibus fuga sapiente non',
    },
    {
      name: 'One PLus',
      price: 3000,
      color: 'Blue',
      image: 'https://placebear.com/250/250',
      desc: 'lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem veniam possimus maiores repellendus quaerat iste exercitationem! Necessitatibus fuga sapiente non',
    },
  ];
  return (
    <View className="flex flex-col gap-4">
      <Header />
      <ScrollView>
        <View className="flex flex-col justify-between gap-4">
          {product.map((item, key) => (
            <Products
              key={key}
              name={item.name}
              color={item.color}
              price={item.price}
              image={item.image}
              desc={item.desc}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default ShopPage;

// const styles = StyleSheet.create({
//   container: {
//     padding: 0,
//     display: 'flex',
//     flexDirection: 'column',
//     gap: 10,
//   },
//   cardContainer: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: 14,
//   },
// });
