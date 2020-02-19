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
  EDIT_PRODUCT_START,
  EDITED_PRODUCT_SUCCESS,
  EDITED_PRODUCT_ERROR,
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
// Select and Delete product 
export function deleteProductAction(id) {
  return async (dispatch) => {
    dispatch(deleteProduct(id));

    try {
      await axiosClient.delete(`/productos/${id}`);
      dispatch(deleteProductSuccess());
      // id delete 
      Swal.fire(
        'Eliminado',
        'El producto se elimino',
        'success'
      )
    } catch (error) {
      console.log(error)
      dispatch(deleteProductError());
    }

  }
}

const deleteProduct = (id) => ({
  type: DELETE_PRODUCT,
  payload: id
})

const deleteProductSuccess = () => ({
  type: DELETE_PRODUCT_SUCCESS
})

const deleteProductError = () => ({
  type: DELETE_PRODUCT_ERROR,
  payload: true 
})

//put product in edit state 
export function getEditProduct(product) {
  return(dispatch) => {
    dispatch(getEditProductAction(product))
  }
}

const getEditProductAction = product => ({
  type: EDIT_PRODUCT,
  payload: product
})

// edit one api and state record
export function editProductAction(product) {
  return async (dispatch) => {
    dispatch(editProduct())
    try {
      const res = await axiosClient.put(`/productos/${product.id}`, product);
      dispatch(editProductSuccess(product))
    } catch (error) {
      
    }
  }
}

const editProduct = () => ({
  type: EDIT_PRODUCT_START
})

const editProductSuccess = product => ({
  type: EDITED_PRODUCT_SUCCESS,
  payload: product
})