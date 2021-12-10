import React, { useContext, useState, useEffect } from "react";
import ProductItem from "./productItem";
import { GlobalContext } from '../context/globalContext';
import storeEmpty from '../assets/store-empty.png';

const Products = () => {

  const [busqueda, setBusqueda] = useState(false)
  const [match, setMatch] = useState("")
  const { products, productsFilter, updateProductList } = useContext(GlobalContext)
  const [productsToList, setProductsToList] = useState([])

  const handleChange = e => {
    setMatch(e.target.value)
    updateProductList(e.target.value)
    setBusqueda(e.target.value !== "")
  }

  useEffect(() => {
    setProductsToList(productsFilter)      
  }, [products, productsFilter])
  
  useEffect(() => {
    console.log("Render de products", products);
    setProductsToList(products)      
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function mostrarResultadoDeBusqueda() {
    console.log(busqueda);
    if (busqueda && productsFilter.length === 0) {
      return <p className="pt-3">Resultados de la busqueda: {productsFilter.length} </p>;
    }
    else if (busqueda && productsFilter.length !== 0) {
      return <p className="pt-3">Resultados de la busqueda: {productsFilter.length} </p>;

    }
    else {
      return <p className="pt-3">{products.length} productos en catálogo </p>;
    }
  }

  return (
    <>
      <div className="row justify-content-between">
        <div className="col-md-4">
          {mostrarResultadoDeBusqueda()}
        </div>
        <div className="col-md-4">
          <form className="">
            <input
              className="form-control me-sm-2"
              type="text"
              placeholder="Search"
              onChange={handleChange}
              value={match}
            />
          </form>
        </div>
      </div>
      <div className="row px-3">
        {
          productsToList.length > 0 ? (
            productsToList.map((p, i) => (
              <div key={i} className="col-md-4">
                  <ProductItem functionalButtons={true} product={p} />
              </div>
            ))
          ) :
          (
            <div className="w-100" >
                <div style={{ width: 150, margin: '50px auto 10px auto'}}>
                    <img src={storeEmpty} alt="cart_empty" width="150" height="150" />
                </div>
                <p className="text-center" style={{ fontSize: '1.5rem'}}>Sin productos en el catálogo...!</p>
            </div>
          )
        }
        </div>
    </>
  );
};

export default Products;
