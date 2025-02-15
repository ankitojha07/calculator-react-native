import {Image, Text, View} from 'react-native';
import React from 'react';
import {Button} from 'react-native-elements';
import {addToCart} from '../../redux/action';
import {useDispatch} from 'react-redux';

interface productProps {
  name: string;
  price: number;
  color: string;
  image: string;
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
        <Image
          height={200}
          width={200}
          source={{uri: image}}
          className="rounded-3xl"
        />
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

// const styles = StyleSheet.create({
//   card: {
//     borderWidth: 2,
//     padding: 4,
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: '100%',
//   },
//   textStyle: {
//     fontSize: 24,
//   },
//   button: {
//     borderRadius: 34,
//     width: '100%',
//   },
//   imageStyle: {
//     height: 100,
//     width: 100,
//   },
//   columnView: {
//     width: '100%',
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     flexDirection: 'row',
//     gap: 14,
//   },
// });
