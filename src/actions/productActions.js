import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
  ALL_PRODUCTS,
  ALL_PRODUCTS_SUCCESS,
  ALL_PRODUCTS_ERROR 
} from '../types';

import axiosClient from '../config/axios';
import Swal from 'sweetalert2';

// Create product 
export function createProductAction(product) {
  return async (dispatch) => {
    dispatch( addProduct())
    try {
      // insert into api
      await axiosClient.post('productos', product)
      // if everything goes well, the state is updated
      dispatch(addProductSuccess(product))
      // success message
      Swal.fire(
        'Correcto',
        'El producto se agregó exitosamente',
        'success'
        )
    } catch (error) {
      // but if there is an error, the state changes
      dispatch(addProductError(true))
      // error message
      Swal.fire({
        icon: 'error',
        title: 'Hubo un problema',
        text: "Se produjo un error al tratar de guardar el producto."
      })
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

// Download all products of the DB
export function getProductsAction() {
  return async (dispatch) => {
    dispatch( getProducts() )
    try {
      const res = await axiosClient.get('/productos');
      dispatch(getProductsSuccessfully(res.data));
    } catch (error) {
      console.log(error)
      dispatch(getProductsError())
    }
  }
}

const getProducts = () => ({
  type: ALL_PRODUCTS,
  payload: true
})

const getProductsSuccessfully = products => ({
  type: ALL_PRODUCTS_SUCCESS,
  payload: products
})

const getProductsError = () => ({
  type: ALL_PRODUCTS_ERROR,
  payload: true 
})