import Immutable from 'seamless-immutable';

/**
 * Types
 */
export const Types = {
  GET_REQUEST: 'category_products/GET_REQUEST',
  GET_SUCCESS: 'category_products/GET_SUCCESS',
};

/**
 * Reducer
 */
const intialState = Immutable({
  id: null,
  data: [],
  loading: false,
});

export default function categoryProducts(state = intialState, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.GET_SUCCESS:
      return {
        id: action.payload.id,
        data: action.payload.data,
        loading: false,
      };
    case Types.GET_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}

/**
 * Actions
 */
export const Creators = {
  getCategoryProductsRequest: categoryId => ({
    type: Types.GET_REQUEST,
    payload: { categoryId },
  }),

  getCategoryProductsSuccess: (id, data) => ({
    type: Types.GET_SUCCESS,
    payload: { id, data },
  }),
};
