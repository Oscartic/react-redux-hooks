import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
  ALL_PRODUCTS,
  ALL_PRODUCTS_SUCCESS,
  ALL_PRODUCTS_ERROR,
  DELETE_PRODUCT,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_ERROR,
  EDIT_PRODUCT,
  EDITED_PRODUCT_SUCCESS,
  EDITED_PRODUCT_ERROR,
} from '../types'
// each reducer has it's own state
const initialState = {
  products: [],
  error: null,
  loading: false,
  deleteProduct: null,
  editProduct: null
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
    case ALL_PRODUCTS_ERROR:  
    case DELETE_PRODUCT_ERROR:
    case EDITED_PRODUCT_ERROR:  
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
    case DELETE_PRODUCT: 
      return {
        ...state,
        deleteProduct: action.payload
      }
    case DELETE_PRODUCT_SUCCESS: 
      return {
        ...state, 
        products: state.products.filter(product => product.id !== state.deleteProduct),
        deleteProduct: null,
      }
    case EDIT_PRODUCT: 
      return {
        ...state,
        editProduct: action.payload
      }
    case EDITED_PRODUCT_SUCCESS: 
      return {
        ...state, 
        editProduct: null,
        products: state.products.map(product => product.id === action.payload.id ? product = action.payload : product)
      }
    default:
      return state; 
  }
}