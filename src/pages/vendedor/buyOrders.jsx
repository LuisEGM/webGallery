import React, { useState, useEffect, useContext, useRef } from 'react'
import Dashboard from './dashboard'
import HeaderTest from '../../components/headerTest'
import { getOrdersByUser, getOrderDetailsByOrden } from '../../services/ordersService'
import BuyOrderDetailModal from '../../components/buyOrderDetailModal'
import { GlobalContext } from '../../context/globalContext'

const BuyOrders = () => {
    
    const modalOrderDetail = useRef(null);
    const { setOrderDetails } = useContext(GlobalContext);
    const [ordenes, setOrdenes] = useState([]);

    const handleClick = (idOrden) => {
        // let finalResult = [];
        // let partialResult = [];
        (async () => {
            try {
                const result = await getOrderDetailsByOrden(idOrden);
                // const partialResult = getOrderDetails(result.data);
                setOrderDetails(result.data);
                modalOrderDetail.current.click();
            } catch (error) {
                console.log(error);
            }
        })();
        
    }
    
    useEffect(() => {
        (async () => {
            try {
                const result = await getOrdersByUser(JSON.parse(localStorage.getItem("user")).id);
                setOrdenes(result.data);
            }
            catch (err) {
                console.log(err);
            }
        })();
    }, [])

    return (
        <Dashboard>
          <HeaderTest />
          <div className="row text-center w-100" style={{ paddingTop: '4rem' }} >
            <h1 className="texto-u2" style={{ fontSize: 35, fontWeight: 'bold' }}>Ordenes de compra</h1>
            <p style={{ fontSize: 20 }}>Estas son las ordenes que estan en proceso de compra</p>
          </div>
            <div className="row text-center w-100" style={{ paddingTop: '1rem' }} >
                <table class="table table-hover table-bordered table-sm w-100">
                    <thead
                    style={{
                        background: "#161616",
                        color: "white",
                        border: "1px solid white",
                    }}
                    >
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">estado</th>
                        <th scope="col">valor</th>
                        <th scope="col">Acciones</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            ordenes.map((element) => (
                                <tr key={element.idOrden}>
                                    <th scope="row">{element.idOrden}</th>
                                    <td>{element.fechaCreacion.split("T")[0]}</td>
                                    <td>
                                        <span class="badge rounded-pill bg-warning">{element.estado}</span>
                                    </td>
                                    <td>{element.valor}</td>
                                    <td>
                                        <button onClick={() => handleClick(element.idOrden)} className="btn btn-sm btn-primary">Detalles</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <BuyOrderDetailModal referencia={modalOrderDetail} />
        </Dashboard>
      );
}

export default BuyOrders
