// index.js
import { combineReducers } from 'redux';
import productReducer from './productReducer';
import shopReducer from './shopReducer';

// hợp nhất trạng thái thành 1 , sử dụng thư viện combineReducers
const rootReducer = combineReducers({
  products: productReducer,
  shop: shopReducer,
});

export default rootReducer;
