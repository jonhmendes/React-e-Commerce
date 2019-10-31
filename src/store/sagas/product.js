import api from '~/services/api';
import { call, put } from 'redux-saga/effects';

import { Creators as ProductActions } from '~/store/ducks/product';
import { Creators as ErrorActions } from '~/store/ducks/error';

export function* getProduct(action) {
  try {
    const response = yield call(api.get, `/products/${action.payload.id}`);

    yield put(ProductActions.getProductSuccess(response.data));
  } catch (err) {
    yield put(ErrorActions.setError('Não foi possível obter os detalhes do produto'));
  }
}