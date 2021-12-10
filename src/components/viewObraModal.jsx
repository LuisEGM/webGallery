import React, { useContext } from 'react'
import { GlobalContext } from '../context/globalContext'

const ViewObraModal = () => {
    
    const { obraView, propietarioObraView } = useContext(GlobalContext);
    
    return (
        <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <p className="modal-title"></p>
                        <button className="btn btn-danger close" type="button" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-6">
                                    <img className="card-img-top" style={{ objectFit: 'cover', objectPosition: 'center' }} src={obraView.imagen} height="450" alt="img"/>
                                </div>
                                <div className="col-md-6">
                                    <p>{obraView.nombre}</p>
                                    <p>{obraView.precio}</p>
                                    <p>{obraView.autor}</p>
                                    <p>{obraView.descripcion}</p>
                                    <p>{`${propietarioObraView.nombres} ${propietarioObraView.apellidos}`}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewObraModal
