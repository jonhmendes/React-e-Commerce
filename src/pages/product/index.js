import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CurrencyFormat from 'react-currency-format';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ProductActions } from '~/store/ducks/product';
import { Creators as CartActions } from '~/store/ducks/cart';

import {
  View, Text, Image, TouchableOpacity, ActivityIndicator,
} from 'react-native';

import styles from './styles';

class Product extends Component {
  static navigationOptions = {
    title: 'Detalhe do produto',
  };

  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
    }).isRequired,
    product: PropTypes.shape({
      data: PropTypes.shape({
        image: PropTypes.string,
        name: PropTypes.string,
        brand: PropTypes.string,
        price: PropTypes.number,
      }),
    }).isRequired,
    getProductRequest: PropTypes.func.isRequired,
    addProduct: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { navigation, getProductRequest } = this.props;
    const productId = navigation.getParam('productId');

    getProductRequest(productId);
  }

  addToCart = (product) => {
    const { navigation, addProduct } = this.props;

    addProduct(product);
    navigation.navigate('Cart');
  };

  render() {
    const { product } = this.props;

    return (
      <View style={styles.container}>
        {product.loading ? (
          <ActivityIndicator size="small" color="#C0C0C0" />
        ) : (
          <View style={styles.box}>
            <Image style={styles.image} source={{ uri: product.data.image }} />
            <View style={styles.info}>
              <View style={styles.detail}>
                <Text style={styles.name}>{product.data.name}</Text>
                <Text style={styles.brand}>{product.data.brand}</Text>
              </View>
              <CurrencyFormat
                value={product.data.price}
                displayType="text"
                thousandSeparator="."
                prefix="R$"
                decimalSeparator=","
                decimalScale={2}
                fixedDecimalScale
                renderText={value => <Text style={styles.price}>{value}</Text>}
              />
            </View>
            <TouchableOpacity
              onPress={() => {
                this.addToCart(product.data);
              }}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Adicionar ao carrinho</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  product: state.product,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...ProductActions, ...CartActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Product);
