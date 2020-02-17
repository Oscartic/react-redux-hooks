import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR 
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