import React from 'react';

const EditProduct = () => {
  return ( 
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Editar Producto
            </h2>

            <form>
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