import React, { useContext, useEffect, useState } from "react"
import FormProduct from "../components/formProduct"
import ProductItem from "../components/productItem"
import { GlobalContext } from '../context/globalContext'

import { update } from '../services/productServices';

const ModalEditar = ({ reloadTriggerFunction, reloadTriggerValue }) => {

  const { price, productName, image, productEdit, changeToastInfo } = useContext(GlobalContext);

  const [product, setProduct] = useState({name: "", price: 0, image: ""})
  useEffect(() => {
    // eslint-disable-next-line no-useless-computed-key
    setProduct({...product, ["name"]: productName})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productName])
  useEffect(() => {
    // eslint-disable-next-line no-useless-computed-key
    setProduct({...product, ["price"]: price})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [price])
  useEffect(() => {
    // eslint-disable-next-line no-useless-computed-key
    setProduct({...product, ["image"]: image})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [image])

  useEffect(() => {
    setProduct({name: productName, price: price, image: image})
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productEdit])

  const handleClick = (e) => {
    e.preventDefault();
    if (!(productName === "" || price === 0 || price == null || isNaN(price) || image === "")) {
      (async () => {
        try {
          const result = await update(productEdit.id, { name: productName, price: price, image: image });
          console.log("PRODUCTO ACTUALIZADO => ", result.data);
        } catch (error) {
          console.log(error);        
        }
      })();
      changeToastInfo(`info-El producto con id ${productEdit.id} ha sido actualizado`);
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
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Editar producto</h5>
              <button className="btn btn-danger close" type="button" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
            </div>
            <div className="modal-body">
              <div className="row d-flex justify-content-around">
                <FormProduct type={"editar"} />
                <ProductItem functionalButtons={false} product={product} />
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
