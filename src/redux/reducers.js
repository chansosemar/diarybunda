import {combineReducers} from 'redux';

const initialState = {
  theme: '',
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'dark': {
      return {
        ...state,
        theme: 'on',
      };
    }
    case 'light': {
      return {
        ...state,
        theme: 'off',
      };
    }
    case 'auto': {
      return {
        ...state,
        theme: '',
      };
    }
    default:
      return state;
  }
};

export default combineReducers({
    themeReducer,
  });