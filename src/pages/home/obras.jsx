import React, { useEffect, useContext, useState } from 'react';
import Header from '../../components/header';
import Products from '../../components/products';
import { GlobalContext } from '../../context/globalContext';
import { getAll } from '../../services/obrasServices';
import Loader from '../../components/loader';
import ViewObraModal from '../../components/viewObraModal';

const Obras = () => {

    const { loadProducts } = useContext(GlobalContext);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const result = await getAll();
                setLoader(false)
                loadProducts(result.data);
                console.log("Data fetch", result.data);
            } catch (error) {
                console.log(error);            
            }
        })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <>
            <Header location={"OBRAS"} />
            <div className="container">
                <div className="row text-center mb-3">
                    <h1 className="texto" style={{fontSize: 40, paddingTop: '2rem', fontWeight: "bold"}}>Catálogo de obras</h1>
                    <p style={{fontSize: 20}} >Encuentra aquí lo que buscas y agregalo a tu carrio.</p>
                </div>
                { loader ? <Loader /> : <Products/> }
            </div>
            <ViewObraModal/>
        </>
    )
}

export default Obras;
