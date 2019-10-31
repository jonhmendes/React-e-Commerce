import { all, takeLatest } from 'redux-saga/effects';

import { Types as CategoriesTypes } from '~/store/ducks/categories';
import { Types as CategoryProductsTypes } from '~/store/ducks/categoryProducts';
import { Types as ProductTypes } from '~/store/ducks/product';

import { getCategories } from './categories';
import { getCategoryProducts } from './categoryProducts';
import { getProduct } from './product';

export default function* rootSaga() {
  return yield all([
    takeLatest(CategoriesTypes.GET_REQUEST, getCategories),
    takeLatest(CategoryProductsTypes.GET_REQUEST, getCategoryProducts),
    takeLatest(ProductTypes.GET_REQUEST, getProduct),
  ]);
}
