import {ScrollView, View} from 'react-native';
import React from 'react';
import Header from '../../components/CartComponents/Header';
import Products from '../../components/CartComponents/Products';

import samsungImage from '../../../assets/images/products/samsung-mobile.jpeg';
import oneplus from '../../../assets/images/products/iphone.jpg';
import iphone from '../../../assets/images/products/iphone.jpg';
import iphone2 from '../../../assets/images/products/iphone-2.jpg';

const ShopPage = () => {
  const product = [
    {
      name: 'Samsung Mobile',
      price: 3000,
      color: 'Blue',
      image: samsungImage,
      desc: 'lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem veniam possimus maiores repellendus quaerat iste exercitationem! Necessitatibus fuga sapiente non',
    },
    {
      name: 'Apple iPhone',
      price: 3000,
      color: 'Blue',
      image: oneplus,
      desc: 'lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem veniam possimus maiores repellendus quaerat iste exercitationem! Necessitatibus fuga sapiente non',
    },
    {
      name: 'Nokia',
      price: 3000,
      color: 'Blue',
      image: iphone2,
      desc: 'lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem veniam possimus maiores repellendus quaerat iste exercitationem! Necessitatibus fuga sapiente non',
    },
    {
      name: 'One PLus',
      price: 3000,
      color: 'Blue',
      image: iphone,
      desc: 'lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem veniam possimus maiores repellendus quaerat iste exercitationem! Necessitatibus fuga sapiente non',
    },
    {
      name: 'One PLus',
      price: 3000,
      color: 'Blue',
      image: samsungImage,
      desc: 'lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem veniam possimus maiores repellendus quaerat iste exercitationem! Necessitatibus fuga sapiente non',
    },
    {
      name: 'One PLus',
      price: 3000,
      color: 'Blue',
      image: samsungImage,
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
