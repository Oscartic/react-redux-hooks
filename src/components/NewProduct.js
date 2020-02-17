import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Actions redux
import { createProductAction } from '../actions/productActions';

const NewProduct = () => {

  //use dispatch and this new function create 
  const dispatch = useDispatch();

  // call action of productAction 
  const addProduct = () => dispatch(createProductAction());

  // when user click in add product 
  const submitNewProduct = e => {
    e.preventDefault();
    // validate form

    // if not errors exist
    
    // create new product
    addProduct();
  }

  return ( 
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Agregar Nuevo Producto
            </h2>

            <form onSubmit={submitNewProduct}>
              <div className="form-group">
                <label>Nombre del producto</label>
                <input 
                  type="text"
                  className="form-control"
                  placeholder="Nombre del producto"
                  name="name"
                />
                <label>Precio producto</label> 
                <input 
                  type="number"
                  className="form-control"
                  placeholder="Precio"
                  name="price"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Agregar Producto
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default NewProduct;