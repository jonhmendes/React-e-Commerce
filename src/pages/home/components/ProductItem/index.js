import React from 'react';
import PropTypes from 'prop-types';

import CurrencyFormat from 'react-currency-format';

import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';

import styles from './styles';

const ProductItem = ({ product, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <Image style={styles.image} source={{ uri: product.image }} />
    <View style={styles.info}>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.brand}>{product.brand}</Text>
      <CurrencyFormat
        value={product.price}
        displayType="text"
        thousandSeparator="."
        prefix="R$"
        decimalSeparator=","
        decimalScale={2}
        fixedDecimalScale
        renderText={value => <Text style={styles.price}>{value}</Text>}
      />
    </View>
  </TouchableOpacity>
);

ProductItem.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    brand: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  onPress: PropTypes.func.isRequired,
};

export default ProductItem;
