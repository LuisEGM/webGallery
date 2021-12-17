import React, { useContext, useEffect, useState } from "react";
import FormProduct from "../../components/formProduct";
import ProductItem from "../../components/productItem";
import { GlobalContext } from "../../context/globalContext";
import HeaderTest from "../../components/headerTest";
import Dashboard from './dashboard';

const AddProduct = () => {
  const { changeProductName, 
          changeImage, 
          changePrice,
          changeAutor,
          changeDescripcion, 
          price, 
          productName, 
          image, 
          autor, 
          descripcion } = useContext(GlobalContext);
  
  const [product, setProduct] = useState({
    nombre: "", 
    precio: 0, 
    imagen: "",
    autor: "",
    descripcion: ""
  })
  
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
    changeProductName("")
    changeImage("")
    changePrice(0)
    changeAutor("")
    changeDescripcion("")
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Dashboard>
      <HeaderTest />
      <div className="row text-center py-5 w-100" style={{ marginTop: '1.5rem' }}>
        <h1 className="texto-u2" style={{ fontSize: 35 }}>Añadir obra</h1>
        <p style={{ fontSize: 20 }}>
          Complete el formulario para agregar una nueva obra
        </p>
      </div>
      <div className="row d-flex w-100 justify-content-around">
        <div className="col-md-4">
          <FormProduct type={"crear"} />
        </div>
        <div className="col-md-4">
          <ProductItem functionalButtons={false} product={product} />
        </div>
      </div>
    </Dashboard>
  );
};

export default AddProduct;
