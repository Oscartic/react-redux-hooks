import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR 
} from '../types';

// Create product 

export function createProductAction() {
  return () => {
    console.log('desde action')
  }
}