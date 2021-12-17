import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { GlobalContext } from "../context/globalContext";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { create, agregarDetalles } from '../services/ordersService';

const CardCost = () => {

    const history = useHistory();
    const { totalPagar, totalItems, carrito, deleteProductToCarrito } = useContext(GlobalContext);

    const isAutoCompra = () => {
      const myIdUser = JSON.parse(localStorage.getItem("user")).id
      for (let i=0; i < carrito.length; i++) {
        if (carrito[i].idUser === myIdUser) {
          return true
        }
      }
      return false;
    }

    const handleClick = () => {
      if (!isAutoCompra()) {
        (async () => {
          try {
            const tiempoTranscurrido = Date.now();
            const hoy = new Date(tiempoTranscurrido);
            const data = {
              fechaCreacion: hoy.toISOString(),
              estado: "EN ESPERA DE PAGO",
              valor: totalPagar,
              idUser: JSON.parse(localStorage.getItem("user")).id
            }
            const result = await create(data);
            agregarDetalles(result.data.idOrden, carrito);
  
            toast.success('Gracias por finalizar su compra, estamos creando su pedido, por favor espere...!', {
              theme: "colored",
              position: "bottom-left",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            
            setTimeout(() => {
              carrito.forEach(element => {
                deleteProductToCarrito(element.idObra)
              })
              history.push("/obras")
            }, 5000)
            
          } catch (error) {
            console.log(error);
          }
        })();
      }
      else {
        toast.error('No permitimos autocomprar obras...!', {
          theme: "colored",
          position: "bottom-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }

    return (
        <div className="col-md-4" style={{ minHeight: '65vh'}} >
            <div className="card text-white bg-primary mb-3" style={{maxWidth: '20rem'}}>
            <h3 className="card-header pt-4" style={{ fontWeight: 'bold', color: 'white' }}>Check out</h3>
            <div className="card-body pt-4">
                <h5 className="card-title">Total de productos</h5>
                <p style={{ fontSize: '2rem' }} className="card-text">{ totalItems }</p>
                <span aria-hidden="true"></span>
                <h5 className="card-title">Total a pagar</h5>
                <p style={{ fontSize: '2rem' }} className="card-text">$ { totalPagar }</p>
            </div>
            <div className="card-footer">
                  <button onClick={handleClick} data-dismiss="modal" type="button" className="btn btn-success" style={{width: '100%', marginBottom: 10}}>
                    Finalizar compra
                  </button>
                <ToastContainer/>
            </div>
            </div>
        </div>
    )
}

export default CardCost
