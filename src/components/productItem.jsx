import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from '../context/globalContext'
import { get } from '../services/obrasServices';

const ProductItem = ({ product, functionalButtons }) => {

    const { carrito, addProductToCarrito, updateQuantityProductInCarrito, setObraView, setPropietarioObraView } = useContext(GlobalContext)
    const [activeButtons, setActiveButtons] = useState("")

    useEffect(() => {
        functionalButtons ? setActiveButtons("button-enable") : setActiveButtons("button-disable")
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    const wasAddedToCart = () => {
        return carrito.find(p => p.idObra === product.idObra) != null ? false : true
    }

    const handleClick = (e) => {
        if (e.target.name === "button-enable") {
            if (e.target.id === "add") {
                addProductToCarrito(product)
            }
            if (e.target.id === "increment") {
                updateQuantityProductInCarrito(product.idObra, "incrementar")
            }
            if (e.target.id === "view") {
                (async () => {
                    try {
                        const result = await get(product.idObra);
                        setPropietarioObraView(result.data.propietario);
                        delete result.data.propietario;
                        console.log(result.data);
                        setObraView(result.data);
                    } catch (error) {
                        console.log(error);        
                    }
                })();
            }
        }
    }

  return (
    <>
        <div className="modal-dialog" style={{ minWidth: '100%' }} role="document">
            <div className="modal-content">
                <div className="modal-header pb-0 border-0">
                    <p className="mb-0" style={{ fontSize: '1.8rem', fontWeight: 'bold' }} >{product.nombre || "Nombre de prueba"}</p>
                </div>
                <div className="modal-body pt-0" >
                    <p style={{ fontSize: '1.5rem'}} className="modal-title">$ {product.precio || "000000"}</p>
                    <img className="card-img-top" style={{ objectFit: 'cover', objectPosition: 'center' }} src={product.imagen || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Sgaglb-AfOqGPKS8iW0qSUk99iflqqneNw&usqp=CAU"} height="350" alt="img"/>
                </div>
                <div className="modal-footer border-0">
                    <button style={{ border: '3px solid black'}}  onClick={handleClick} type="button" id="view" name={activeButtons} data-toggle="modal" data-target=".bd-example-modal-lg" className="btn btn-secondary"> <img alt="view" width="24" height="24" src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/50/000000/external-view-multimedia-kiranshastry-lineal-kiranshastry.png"/> Detalles</button>
                    {wasAddedToCart() ? 
                        <button style={{ border: '3px solid black'}}  onClick={handleClick} type="button" id="add" name={activeButtons} className="btn btn-secondary"> <img width="24" height="24" src="https://img.icons8.com/windows/32/000000/shopping-cart.png" alt="carrito" /> Agregar</button>
                        :
                        <button style={{ border: '3px dotted black'}} onClick={handleClick} type="button" id="increment" name={activeButtons} className="btn btn-secondary"> <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/000000/add-shopping-cart.png" alt="carrito" /> Add more</button>
                    }
                </div>
            </div>
        </div>
    </>
    );
};

export default ProductItem;
