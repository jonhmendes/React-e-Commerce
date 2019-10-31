import React from 'react';
import PropTypes from 'prop-types';

import CurrencyFormat from 'react-currency-format';

import {
  View, Text, Image, TextInput, TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import { colors } from '~/styles';
import styles from './styles';

const CartItem = ({ product, handleUpdate, handleDelete }) => (
  <View style={styles.container}>
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

    <View style={styles.form}>
      <TextInput
        style={styles.input}
        autoCorrect={false}
        autoCapitalize="none"
        underlineColorAndroid="transparent"
        defaultValue={String(product.quantity)}
        maxLength={2}
        keyboardType="numeric"
        onChangeText={(text) => {
          if (/^\d+$/.test(text)) {
            handleUpdate(text);
          }
        }}
      />
    </View>

    <TouchableOpacity onPress={handleDelete} style={styles.delete}>
      <Icon name="times" size={20} color={colors.regular} />
    </TouchableOpacity>
  </View>
);

CartItem.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    brand: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
  }).isRequired,
  handleUpdate: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default CartItem;
