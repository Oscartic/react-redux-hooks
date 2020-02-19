import { combineReducers } from 'redux';
import productsReducer from './product';
import alertReducer from './alertReducer';


export default combineReducers({
  products: productsReducer,
  alert: alertReducer
})
