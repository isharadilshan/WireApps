import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const ProductCard = ({product, onPressProduct}) => {
  const {
    sku = '1210',
    name = 'Nike Air Relentless 4 Mens Running Shoes',
    brand = 'Nike',
    image = 'https://s3-eu-west-1.amazonaws.com/api.themeshplatform.com/media/7e386191b2ee40b290886a05d3e10e24_nike-air-relentless-a.jpg',
    price = '45.00',
    currency = 'GBP',
    sizes = ['8', '9', '10', '11'],
    stockStatus = 'IN STOCK',
    color = 'blue',
    description = 'Hit the tracks in these Nike Air Relentless 4 featuring flexible forefoot sole and Reslon midsole underfoot cushioning for superior comfort at each step. The ridged outsole ensures excellent traction while the cushioned ankle collar and the anatomically shaped insole guarantee great support for the whole foot. The mesh upper panels provide breathability and airflow within the shoe.',
  } = product;

  return (
    <TouchableOpacity style={styles.card} onPress={onPressProduct}>
      {/* Product Image */}
      <Image source={{uri: image}} style={styles.image} />
      <View style={styles.content}>
        {/* Product Name */}
        <Text style={styles.name}>{name}</Text>
        {/* Brand */}
        <Text style={styles.brand}>Brand: {brand}</Text>
        {/* SKU */}
        <Text style={styles.label}>
          SKU: <Text style={styles.value}>{sku}</Text>
        </Text>
        {/* Price */}
        <Text style={styles.price}>
          Price: {currency} {price}
        </Text>
        {/* Sizes */}
        <Text style={styles.label}>
          Sizes: <Text style={styles.value}>{sizes.join(', ')}</Text>
        </Text>
        {/* Stock Status */}
        <Text
          style={[
            styles.stockStatus,
            {color: stockStatus === 'In Stock' ? 'green' : 'red'},
          ]}>
          {stockStatus}
        </Text>
        {/* Color */}
        <Text style={styles.label}>
          Color: <Text style={styles.value}>{color}</Text>
        </Text>
        {/* Description */}
        <Text style={styles.label}>
          Description: <Text style={styles.description}>{description}</Text>
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  content: {
    flex: 1,
    padding: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  brand: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  label: {
    fontSize: 14,
    color: '#555',
  },
  value: {
    fontWeight: 'bold',
    color: '#333',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007BFF',
    marginVertical: 5,
  },
  stockStatus: {
    fontSize: 14,
    marginVertical: 5,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 12,
    color: '#777',
  },
});

export default ProductCard;
