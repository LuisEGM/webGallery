import React, { useEffect, useContext, useState } from "react";
import ProductsTable from "../../components/productsTable";
import HeaderTest from "../../components/headerTest";
import { GlobalContext } from '../../context/globalContext';
import { getByUser } from '../../services/obrasServices';
import Loader from '../../components/loader';
import { ToastContainer, toast } from 'react-toastify';
import Dashboard from '../vendedor/dashboard'

const ViewProducts = () => {
  
  const { loadProducts, toastInfo, changeToastInfo } = useContext(GlobalContext);
  const [loader, setLoader] = useState(true);
  const [reloadTrigger, setReloadTrigger] = useState(true);

  //Para ejecucion del toast
  useEffect(() => {
    if (toastInfo !== "") {
      let info = toastInfo.split("-");
      // eslint-disable-next-line default-case
      switch (info[0]) {
        case "info":
          toast.info(info[1], {
            theme: "colored",
            position: "bottom-left",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
          break;
        case "warn":
          toast.warn(info[1], {
            theme: "colored",
            position: "bottom-left",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
          break;
      }  
      changeToastInfo("");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[toastInfo]);

  useEffect(() => {
      (async () => {
          try {
              const result = await getByUser(JSON.parse(localStorage.getItem("user")).id);
              setLoader(false)
              loadProducts(result.data);
              console.log("Data fetch admin", result.data);
          } catch (error) {
              console.log(error);            
          }
      })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[reloadTrigger])
  
  return (
    <Dashboard>
      <HeaderTest />
      <div className="row text-center w-100" style={{ paddingTop: '4rem' }} >
        <h1 className="texto-u2" style={{ fontSize: 35 }}>Obras en catálogo</h1>
        <p style={{ fontSize: 20 }}>Desde aquí podras gestionar las obras que quieres vender</p>
      </div>
      { !loader ? (
        <div className="row text-center w-100" style={{ paddingTop: '1rem' }} >
          <ProductsTable reloadTriggerFunction={setReloadTrigger} reloadTriggerValue={reloadTrigger}  />
        </div>
      ) : (<Loader />)}
      <ToastContainer/>
    </Dashboard>
  );
};

export default ViewProducts
