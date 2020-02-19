import React from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

// Redux
import { useDispatch} from 'react-redux';
import { deleteProductAction, getEditProduct } from '../actions/productActions'

const Product = ({product}) => {
  
  const { nombre, precio, id } = product;

  const dispatch = useDispatch();
  const history = useHistory(); // enable history for redirection

  // Delete confirmation 
  const deleteConfirmation = id => {
    // ask the user
    Swal.fire({
      title: 'Estas seguro que quieres eliminar este producto?',
      text: "Esta accion no se puede revertir!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Si Eliminar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        // get to action 
        dispatch(deleteProductAction(id))
      }
    });
    
  }

  // Redirection programming function
  const redirectEdit = product => {
    dispatch(getEditProduct(product))
    history.push(`/products/edit/${product.id}`)
  }

  return ( 
    <tr>
      <td>{nombre}</td>
      <td><span className="font-weight-bold"> $ {precio} </span></td>
      <td className="acciones">
        <button 
          type="button"
          onClick={() => redirectEdit(product)} 
          className="btn btn-primary mr-2">
          Editar
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => deleteConfirmation(id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
   );
}
 
export default Product;