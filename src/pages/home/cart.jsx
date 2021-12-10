import React, { useContext } from 'react';
import Header from '../../components/header';
import CardCost from '../../components/cardCost'
import ProductCart from '../../components/productsCart'
import { GlobalContext } from "../../context/globalContext";
import emptyCart from '../../assets/empty-cart.png'
import { Link } from 'react-router-dom'

const Cart = () => {

  const { totalItems } = useContext(GlobalContext);

    return (
        <>
            <Header />
            <div className="container" >
                <div className="row text-center" style={{ paddingTop: '4rem' }} >
                    <h1 style={{fontSize: 35}}>SHOPPING CART</h1>
                    <p style={{fontSize: 15}} >This is your shopping cart</p>
                </div>
                <div className="row pt-3" >
                    {totalItems !== 0 ? 
                        <>
                            <ProductCart/>
                            <CardCost/>
                        </>
                    : 
                        <div className="w-100" >
                            <Link to="/products" >
                                <div style={{ width: 150, margin: '50px auto 10px auto'}}>
                                    <img src={emptyCart} alt="cart_empty" width="150" height="150" />
                                </div>
                            </Link>
                            <p className="text-center" style={{ fontSize: '1.5rem'}}>Ups... tu carrito esta vacio</p>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default Cart;
