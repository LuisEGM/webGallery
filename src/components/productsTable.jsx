import React, { useContext } from "react"
import { VscAdd } from "react-icons/vsc"
import { Link } from "react-router-dom"
import { GlobalContext } from "../context/globalContext"
import ModalEditar from './modalEditar'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { remove } from '../services/productServices';
import storeEmpty from '../assets/store-empty.png';

const ProductsTable = ({ reloadTriggerFunction, reloadTriggerValue }) => {
  
  const { products, setProductEdit } = useContext(GlobalContext);
  const handleDelete = (id) => {
    // deleteProduct(id)
    (async () => {
      try {
        const result = await remove(id);
        console.log("DELETE PRODUCT => ", result.data);
        
        toast.error(`El producto con id <${id}> fue eliminado`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        
        reloadTriggerFunction(!reloadTriggerValue)
      } catch (error) {
        console.log(error)
      }
    })();
  }

  const handleClick = (p) => {
    const buttonCloseToast = document.querySelector(".Toastify__close-button.Toastify__close-button--light");
    if (buttonCloseToast != null) {
      buttonCloseToast.click();
    }
    setProductEdit(p);
  }

  return (
    <>
      <div className="container" style={{ padding: "0 5rem" }}>
        <div className="row py-3 d-flex justify-content-between">
          <div className="col-3 p-0">Tiene {products.length} en inventario</div>
          <div className="col-3 p-0">
            <Link to="/admin/add-product">
              <button type="button" class="btn btn-success">
                Agregar producto
                <VscAdd />
              </button>
            </Link>
          </div>
        </div>
        {
          products.length > 0 ? (<table class="table table-hover table-bordered table-sm w-100">
            <thead
              style={{
                background: "#161616",
                color: "white",
                border: "1px solid white",
              }}
            >
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nombre</th>
                <th scope="col">Image</th>
                <th scope="col">Precio</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {
                products.map((p) => (
                  <tr key={p.id}>
                    <th scope="row">{p.id}</th>
                    <td>{p.name || "Nombre de prueba"}</td>
                    <td>
                      <img src={p.image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Sgaglb-AfOqGPKS8iW0qSUk99iflqqneNw&usqp=CAU"} height="100%" width="40" alt="img" />
                    </td>
                    <td>$ {p.price}</td>
                    <td>
                      <button onClick={() => handleClick(p)} name="editar" data-toggle="modal" data-target="#myModal" type="button" className="btn btn-info btn-sm m-1">
                        Editar
                      </button>
                      <button onClick={() => handleDelete(p.id)} name="eliminar" type="button" className="btn btn-danger btn-sm m-1">
                        Eliminar
                      </button>
                      {/* <ToastContainer/> */}
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table> ) :
          (
            <div className="w-100" >
                <div style={{ width: 150, margin: '50px auto 10px auto'}}>
                    <img src={storeEmpty} alt="cart_empty" width="150" height="150" />
                </div>
                <p className="text-center" style={{ fontSize: '1.5rem'}}>Sin productos en el inventario...!</p>
            </div>
          )
        }
      </div>
      <ModalEditar reloadTriggerFunction={reloadTriggerFunction} reloadTriggerValue={reloadTriggerValue} />
    </>
  );
};

export default ProductsTable;