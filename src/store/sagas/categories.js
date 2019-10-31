import api from '~/services/api';
import { call, put } from 'redux-saga/effects';

import { Creators as CategoriesActions } from '~/store/ducks/categories';
import { Creators as ErrorActions } from '~/store/ducks/error';

export function* getCategories() {
  try {
    const response = yield call(api.get, '/categories');

    yield put(CategoriesActions.getCategoriesSuccess(response.data));
  } catch (err) {
    yield put(ErrorActions.setError('Não foi possível obter as categorias'));
  }
}
