import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from '../context/globalContext'

const ProductItem = ({ product, functionalButtons }) => {

    const { carrito, addProductToCarrito, updateQuantityProductInCarrito } = useContext(GlobalContext)
    const [activeButtons, setActiveButtons] = useState("")

    useEffect(() => {
        functionalButtons ? setActiveButtons("button-enable") : setActiveButtons("button-disable")
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    const wasAddedToCart = () => {
        return carrito.find(p => p.id === product.id) != null ? false : true
    }

    const handleClick = (e) => {
        if (e.target.name === "button-enable") {
            if (e.target.id === "add") {
                addProductToCarrito(product)
            }
            if (e.target.id === "increment") {
                updateQuantityProductInCarrito(product.id, "incrementar")
            }
        }
    }

  return (
    <div className="modal-dialog" style={{ minWidth: '100%' }} role="document">
        <div className="modal-content">
            <div className="modal-header pb-0 border-0">
                <p>{product.name || "Nombre de prueba"}</p>
            </div>
            <div className="modal-body pt-0" >
                <h2 className="modal-title">$ {product.price || "000000"}</h2>
                <img className="card-img-top" style={{ objectFit: 'cover', objectPosition: 'center' }} src={product.image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Sgaglb-AfOqGPKS8iW0qSUk99iflqqneNw&usqp=CAU"} height="350" alt="img"/>
            </div>
            <div className="modal-footer border-0">
                {wasAddedToCart() ? 
                    <button style={{ border: '3px solid black'}}  onClick={handleClick} type="button" id="add" name={activeButtons} className="btn btn-secondary"> <img src="https://img.icons8.com/windows/32/000000/shopping-cart.png" alt="carrito" /> Add to car</button>
                    :
                    <button style={{ border: '3px dotted black'}} onClick={handleClick} type="button" id="increment" name={activeButtons} className="btn btn-secondary"> <img src="https://img.icons8.com/material-rounded/24/000000/add-shopping-cart.png" alt="carrito" /> Add more</button>
                }
            </div>
        </div>
    </div>
    );
};

export default ProductItem;
