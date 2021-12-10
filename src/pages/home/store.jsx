import React, { useEffect, useContext, useState } from 'react';
import Header from '../../components/header';
import Products from '../../components/products';
import { GlobalContext } from '../../context/globalContext';
import { getAll } from '../../services/productServices';
import Loader from '../../components/loader';

const Store = () => {

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
            <Header />
            <div className="container">
                <div className="row text-center" style={{ paddingTop: '4rem' }} >
                    <h1 style={{fontSize: 45}}>STORE</h1>
                    <p style={{fontSize: 20}} >This is the product catalog</p>
                </div>
                { loader ? <Loader /> : <Products/> }
            </div>
        </>
    )
}

export default Store;
