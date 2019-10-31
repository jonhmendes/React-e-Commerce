import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  View, FlatList, TouchableOpacity, Text, ActivityIndicator,
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as CategoriesActions } from '~/store/ducks/categories';
import { Creators as CategoryProductActions } from '~/store/ducks/categoryProducts';

import ProductItem from './components/ProductItem';

import styles from './styles';

class Home extends Component {
  static navigationOptions = {
    title: 'GoCommerce',
  };

  categoriesLoaded = false;

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    getCategoriesRequest: PropTypes.func.isRequired,
    categories: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
        }),
      ),
      loading: PropTypes.bool,
    }).isRequired,
    getCategoryProductsRequest: PropTypes.func.isRequired,
    categoryProducts: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
        }),
      ),
      loading: PropTypes.bool,
    }).isRequired,
  };

  componentDidMount() {
    const { getCategoriesRequest } = this.props;

    getCategoriesRequest();
  }

  componentDidUpdate(prevProps) {
    if (!this.categoriesLoaded) {
      const { categories } = this.props;

      if (categories.data.length > 0) {
        this.categoriesLoaded = true;

        const { getCategoryProductsRequest } = prevProps;

        getCategoryProductsRequest(categories.data[0].id);
      }
    }
  }

  render() {
    const {
      categories, categoryProducts, navigation, getCategoryProductsRequest,
    } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.categoryBar}>
          {!categories.loading && (
            <FlatList
              style={styles.categoryList}
              data={categories.data}
              extraData={categoryProducts.id}
              keyExtractor={category => String(category.id)}
              showsHorizontalScrollIndicator={false}
              horizontal
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    getCategoryProductsRequest(item.id);
                  }}
                  style={
                    categoryProducts.id === item.id
                      ? [styles.category, styles.activeCategory]
                      : styles.category
                  }
                >
                  <Text
                    style={
                      categoryProducts.id === item.id
                        ? [styles.categoryText, styles.activeCategoryText]
                        : styles.categoryText
                    }
                  >
                    {item.title}
                  </Text>
                </TouchableOpacity>
              )}
            />
          )}
        </View>

        {(categories.loading || categoryProducts.loading) && (
          <ActivityIndicator size="small" color="#C0C0C0" style={styles.loading} />
        )}

        {!categoryProducts.loading && (
          <FlatList
            data={categoryProducts.data}
            keyExtractor={product => String(product.id)}
            numColumns={2}
            columnWrapperStyle={styles.columnContainer}
            contentContainerStyle={styles.productList}
            renderItem={({ item }) => (
              <ProductItem
                onPress={() => {
                  navigation.navigate('Product', { productId: item.id });
                }}
                product={item}
              />
            )}
          />
        )}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  categoryProducts: state.categoryProducts,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...CategoriesActions, ...CategoryProductActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
