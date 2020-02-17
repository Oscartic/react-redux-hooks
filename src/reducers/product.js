import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
  ALL_PRODUCTS,
  ALL_PRODUCTS_SUCCESS,
  ALL_PRODUCTS_ERROR 
} from '../types'
// each reducer has it's own state
const initialState = {
  products: [],
  error: null,
  loading: false
}

export default function (state = initialState, action) {
  switch(action.type) {
    case ALL_PRODUCTS:
    case ADD_PRODUCT: 
      return {
        ...state, 
        loading: true
      }
    case ADD_PRODUCT_SUCCESS: 
      return {
        ...state, 
        loading: false, 
        error: null,
        products: [...state.products, action.payload]
      }
    case ADD_PRODUCT_ERROR:
      return {
        ...state, 
        loading: false, 
        error: action.payload
      }
    case ALL_PRODUCTS_SUCCESS:
      return {
        ...state, 
        loading: false,
        error: null,
        products: action.payload 
      }
    case ALL_PRODUCTS_ERROR:
      return {
        ...state, 
        loading: false, 
        error: action.payload
      }
    default:
      return state; 
  }
}