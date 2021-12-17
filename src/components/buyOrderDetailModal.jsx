import React, { useContext, useEffect, useState, useRef } from 'react'
import { GlobalContext } from '../context/globalContext'
import {  getOrderDetail } from '../services/ordersService'

const BuyOrderDetailModal = ({ referencia }) => {
    
    // const modalOrderDetail = useRef(null);
    const { orderDetails } = useContext(GlobalContext);
    const [details, setDetails] = useState([]);

    useEffect(() => {
        // console.log(orderDetails);
        //  const result = getOrderDetails(orderDetails);
        // console.log("RESULTTTTT => ", result);
        console.log(orderDetails);
        let vector = [];
        for (let i = 0; i < orderDetails.length; i++) {
            (async () => {
                const partialResult = await getOrderDetail(orderDetails[i].idOrdenDetail);
                vector.push(partialResult.data);
            })();
        }
        console.log(">>>>>>>>>>>>>>",vector);
        setDetails(orderDetails)
        // modalOrderDetail.current.click();
    }, [orderDetails])

    return (
        <>
            <button ref={referencia} data-toggle="modal" data-target="#buyOrderDetail" className="d-none"></button>
            <div
                className="modal fade"
                id="buyOrderDetail"
                tabindex="-1"
                role="dialog"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title">Detalles de orden</h5>
                    <button className="btn btn-danger close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                    <div className="modal-body">
                    <div className="row d-flex justify-content-around">
                        <div className="col-md-12">
                        <table class="table table-hover table-bordered table-sm w-100">
                            <thead
                            style={{
                                background: "#161616",
                                color: "white",
                                border: "1px solid white",
                            }}
                            >
                            <tr>
                                {/* <th scope="col">ID</th> */}
                                {/* <th scope="col">Nombre</th>
                                <th scope="col">Imagen</th> */}
                                <th scope="col">Cantidad</th>
                                <th scope="col">Valor</th>
                                <th scope="col">Total</th>
                            </tr>
                            </thead>
                            <tbody>
                                {
                                    details.map((element, i) => (
                                        <tr key={i}>
                                            {/* <th scope="row">{element.obra.nombre}</th>
                                            <td>
                                                <img src={element.obra.imagen} alt="detail" />
                                            </td> */}
                                            <td>{element.quantity}</td>
                                            <td>{element.price}</td>
                                            <td>{element.quantity * element.price}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default BuyOrderDetailModal
