import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Actions redux
import { createProductAction } from '../actions/productActions';

const NewProduct = () => {

  // local state 
  const [name, saveName] = useState('');
  const [price, savePrice] = useState(0);
  //use dispatch and this new function create 
  const dispatch = useDispatch();

  // call action of productAction 
  const addProduct = (product) => dispatch(createProductAction(product));

  // when user click in add product 
  const submitNewProduct = e => {
    e.preventDefault();
    // validate form
    if(name.trim() === '' || price <= 0) {
      return;
    }
    // if not errors exist
    
    // create new product
    addProduct({
      name, 
      price 
    });
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
                  value={name}
                  onChange={e=> saveName(e.target.value)}
                />
                <label>Precio producto</label> 
                <input 
                  type="number"
                  className="form-control"
                  placeholder="Precio"
                  name="price"
                  value={price}
                  onChange={e=> savePrice(Number(e.target.value))}
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