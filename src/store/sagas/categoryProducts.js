import api from '~/services/api';
import { call, put } from 'redux-saga/effects';

import { Creators as CategoryProductActions } from '~/store/ducks/categoryProducts';
import { Creators as ErrorActions } from '~/store/ducks/error';

export function* getCategoryProducts(action) {
  try {
    const response = yield call(api.get, `/category_products/${action.payload.categoryId}`);

    yield put(
      CategoryProductActions.getCategoryProductsSuccess(response.data.id, response.data.products),
    );
  } catch (err) {
    yield put(ErrorActions.setError('Não foi possível obter os produtos'));
  }
}
