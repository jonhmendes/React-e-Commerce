import { combineReducers } from 'redux';

import categories from './categories';
import categoryProducts from './categoryProducts';
import product from './product';
import cart from './cart';
import error from './error';

export default combineReducers({
  categories,
  categoryProducts,
  product,
  cart,
  error,
});
