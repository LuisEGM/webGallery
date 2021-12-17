import React, { useContext, useEffect, useState } from "react"
import FormProduct from "../components/formProduct"
import ProductItem from "../components/productItem"
import { GlobalContext } from '../context/globalContext'

import { update } from '../services/obrasServices';

const ModalEditar = ({ reloadTriggerFunction, reloadTriggerValue }) => {

  const { price, productName, image, autor, descripcion, productEdit, changeToastInfo } = useContext(GlobalContext);

  const [product, setProduct] = useState({nombre: "", precio: 0, imagen: "", autor: "", descripcion: "" })
  useEffect(() => {
    // eslint-disable-next-line no-useless-computed-key
    setProduct({...product, ["nombre"]: productName})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productName])
  useEffect(() => {
    // eslint-disable-next-line no-useless-computed-key
    setProduct({...product, ["precio"]: price})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [price])
  useEffect(() => {
    // eslint-disable-next-line no-useless-computed-key
    setProduct({...product, ["imagen"]: image})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [image])
  useEffect(() => {
    // eslint-disable-next-line no-useless-computed-key
    setProduct({...product, ["autor"]: autor})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autor])
  useEffect(() => {
    // eslint-disable-next-line no-useless-computed-key
    setProduct({...product, ["descripcion"]: descripcion})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [descripcion])

  useEffect(() => {
    setProduct({
      nombre: productName, 
      precio: price, 
      imagen: image,
      autor: autor, 
      descripcion: descripcion
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productEdit])

  const handleClick = (e) => {
    e.preventDefault();
    if (!(productName === "" || price === 0 || price == null || isNaN(price) || image === "" || autor === "" || descripcion === "")) {
      (async () => {
        try {
          const data = { 
            idObra: productEdit.idObra,
            nombre: productName, 
            precio: price, 
            imagen: image,
            autor: autor,
            descripcion: descripcion,
            estado: productEdit.estado,
            fechaCreacion: productEdit.fechaCreacion,
            idUser: productEdit.idUser
          }
          console.log(">>>>>>>>< ACTUALIZAR", data);
          const result = await update(productEdit.idObra, data);
          console.log("PRODUCTO ACTUALIZADO => ", result.data);
        } catch (error) {
          console.log(error);        
        }
      })();
      changeToastInfo(`info-La obra con id ${productEdit.id} ha sido actualizada`);
      reloadTriggerFunction(!reloadTriggerValue);
    }
    else {
      changeToastInfo('warn-Recuerda no dejar campos sin valor al intentar editar...!');
    }
  }

  return (
    <>
      <div
        className="modal fade"
        id="myModal"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Editar producto</h5>
              <button className="btn btn-danger close" type="button" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row d-flex justify-content-around">
                <div className="col-md-6">
                  <FormProduct type={"editar"} />
                </div>
                <div className="col-md-6">
                  <ProductItem functionalButtons={false} product={product} />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button onClick={handleClick} data-dismiss="modal" type="button" className="btn btn-info" style={{width: '100%'}}>
                Guardar cambios
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalEditar;
