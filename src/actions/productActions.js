import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR 
} from '../types';

import axiosClient from '../config/axios'


// Create product 
export function createProductAction(product) {
  return async (dispatch) => {
    dispatch( addProduct())
    try {
      // insert into api
      await axiosClient.post('productos', product)
      // if everything goes well, the state is updated
      dispatch(addProductSuccess(product))
    } catch (error) {
      // but if there is an error, the state changes
      dispatch(addProductError(true))
    }
  }
}

const addProduct = () => ({
  type: ADD_PRODUCT,
})

//if the product is saved
const addProductSuccess = (product) => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: product
})
// if not saved 
const addProductError = (state) => ({
  type: ADD_PRODUCT_ERROR,
  payload: state
})