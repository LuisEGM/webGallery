import React, { useContext } from 'react'
import { GlobalContext } from '../context/globalContext'

const ViewObraModal = () => {

const { obraView, propietarioObraView } = useContext(GlobalContext);

return (
<div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
    aria-hidden="true">
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

                    <div className="row g-0">
                        <div className="col-md-6">
                            <img className="card-img-center border border-5 border-dark" style={{ objectFit: 'cover', objectPosition: 'center' } }
                                src={obraView.imagen} height="450" width="400" alt="img" />
                        </div>
                        <div className="col-md-5 offset-md-1">
                            <p className='text-dark fs-3'>{obraView.autor}</p>
                            <p className='texto-u2 fs-1' style={{ fontWeight: 'bold'}} >{obraView.nombre}</p>
                            <p>{obraView.descripcion}</p>
                            <p className='texto-u2 fs-3' style={{ fontWeight: 'bold'}} >$ {obraView.precio}</p>
                            <p className='text-dark'>{`${propietarioObraView.nombres} ${propietarioObraView.apellidos}`}</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
)
}

export default ViewObraModal;