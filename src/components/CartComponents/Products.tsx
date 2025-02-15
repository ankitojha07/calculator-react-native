import {Image, Text, View} from 'react-native';
import React from 'react';
import {Button} from 'react-native-elements';
import {addToCart} from '../../redux/action';
import {useDispatch} from 'react-redux';

// import samsungImage from '../../../assets/images/products/samsung-mobile.jpeg';

interface productProps {
  name: string;
  price: number;
  color: string;
  image: any;
  desc: string;
}

const Products = ({name, price, color, image, desc}: productProps) => {
  const item = {name, price, color, image, desc};
  const dispatch = useDispatch();

  const handleAddToCart = (product: productProps) => {
    console.warn('Add to cart', product);
    dispatch(addToCart(product));
  };

  return (
    <View className="border p-4 rounded-3xl gap-4 flex flex-col">
      <Text className="text-2xl font-bold">{name}</Text>
      <View className="flex flex-row justify-between items-start">
        <View className="flex flex-col justify-start items-start h-full w-6/12">
          <Text className="text-md">{desc}</Text>
          <Text className="text-lg font-semibold">Price: {price}</Text>
          <Text className="text-md">Color: {color}</Text>
        </View>
        <Image source={image} className="rounded-3xl h-56 w-52" />
      </View>
      <Button
        title="Add to cart"
        className="bg-blue-300"
        onPress={() => {
          handleAddToCart(item);
        }}
      />
    </View>
  );
};

export default Products;
