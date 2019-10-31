import Immutable from 'seamless-immutable';

/**
 * Types
 */
export const Types = {
  SET: 'error/SET',
  HIDE: 'error/HIDE',
};

/**
 * Reducer
 */
const initialState = Immutable({
  visible: false,
  message: null,
});

export default function error(state = initialState, action) {
  switch (action.type) {
    case Types.SET:
      return { ...state, visible: true, message: action.payload.message };
    case Types.HIDE:
      return { ...state, visible: false };
    default:
      return state;
  }
}

/**
 * Actions
 */
export const Creators = {
  setError: message => ({
    type: Types.SET,
    payload: { message },
  }),

  hideError: () => ({ type: Types.HIDE }),
};
