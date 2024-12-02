import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView, Button} from 'react-native';

const ProductDetailScreen = ({
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
}) => {
  return (
    <ScrollView style={styles.container}>
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
            {color: stockStatus === 'IN STOCK' ? 'green' : 'red'},
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
        {/* Purchase Button */}
        <View style={styles.buttonContainer}>
          <Button title="Add to Cart" color="#007BFF" onPress={() => {}} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  content: {
    padding: 15,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  brand: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    color: '#555',
    marginVertical: 5,
  },
  value: {
    fontWeight: 'bold',
    color: '#333',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007BFF',
    marginVertical: 10,
  },
  stockStatus: {
    fontSize: 16,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#777',
    marginTop: 10,
    lineHeight: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default ProductDetailScreen;
