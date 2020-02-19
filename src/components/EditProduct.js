import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editProductAction } from '../actions/productActions';
import { useHistory } from 'react-router-dom';

const EditProduct = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  //new product state 
  const [product, saveProduct] = useState({
    id: 0,
    nombre: '',
    precio: ''
  })
  
  //Product to edit 
  const productEdit = useSelector(state => state.products.editProduct)

  // automatic write state
  useEffect( () => {
    saveProduct({
      id: productEdit.id,
      nombre: productEdit.nombre,
      precio: productEdit.precio
    });
  }, [productEdit]) 

  // read data form
  const onChangeEditForm = e => {
    saveProduct({
      ...product,
      [e.target.name] : e.target.value
    })
  }
  
  const submitEditProduct = e => {
    e.preventDefault();
    dispatch(editProductAction(product));
    history.push('/')
  }

  return ( 
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Editar Producto
            </h2>

            <form 
              onSubmit={submitEditProduct}
            >
              <div className="form-group">
                <label>Nombre del producto</label>
                <input 
                  type="text"
                  className="form-control"
                  placeholder="Nombre del producto"
                  name="nombre"
                  value={product.nombre}
                  onChange={onChangeEditForm}
                />
                <label>Precio producto</label> 
                <input 
                  type="number"
                  className="form-control"
                  placeholder="Precio"
                  name="precio"
                  value={product.precio}
                  onChange={onChangeEditForm}
                  
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Guardar Producto
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default EditProduct;