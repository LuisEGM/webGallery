import React, { useContext, useEffect, useState } from "react";
import FormProduct from "../../components/formProduct";
import ProductItem from "../../components/productItem";
import { GlobalContext } from "../../context/globalContext";
import HeaderTest from "../../components/headerTest";

const AddProduct = () => {
  const { changeProductName, changeImage, changePrice, price, productName, image } = useContext(GlobalContext);
  
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
    changeProductName("")
    changeImage("")
    changePrice(0)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <HeaderTest />
      <div className="row text-center py-5 w-100" style={{ marginTop: '1.5rem' }}>
        <h1 style={{ fontSize: 35 }}>Add product</h1>
        <p style={{ fontSize: 20 }}>
          Complete el formulario para agregar un nuevo producto
        </p>
      </div>
      <div className="row d-flex w-100 justify-content-around">
        <div className="col-md-4 mt-5">
          <FormProduct type={"crear"} />
        </div>
        <div className="col-md-4">
          <ProductItem functionalButtons={false} product={product} />
        </div>
      </div>
    </>
  );
};

export default AddProduct;
