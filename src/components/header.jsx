import React, { useContext } from "react";
import { Link } from 'react-router-dom'
import { GlobalContext } from '../context/globalContext'
import Logo from '../assets/logo.svg'
import NameLogo from '../assets/namelogo.svg'
import CartIcon from '../assets/cart-icon.svg'

const Header = () => {

  const { totalItems } = useContext(GlobalContext) 

  return (

  <nav class="navbar navbar-expand-lg navbar-light bg-secondary" style={{ width: '100%', position: 'fixed', padding: '0', zIndex: '100'}}>
    <div class="container">
      <a class="navbar-brand" href="https://www.unimagdalena.edu.co/">
        <img src={Logo} alt="logo" width="80" height="60" />
      </a>
      {/* <a class="navbar-brand" href="#">WebGallery</a> */}
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" style={{fontSize: '1rem'}} id="navbarColor01">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <a class="nav-link active-custom" href="#">Home
              <span class="visually-hidden">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Obras</a>
          </li>
        </ul>
        <div class="d-flex">
          <ul className="navbar-nav">
            <li class="nav-item">
              {/* <a class="nav-link mt-3" href="#">Cart</a> */}
              <img class="nav-link mt-1" src={CartIcon} alt="logo2" width="70" height="70" />
            </li>
          </ul>
          <img src={NameLogo} alt="logo3" width="200" height="80" />
        </div>
      </div>
    </div>
  </nav>
  );
};

export default Header;

{/* <ul className="nav justify-content-center" style={{ width: '100%', left: 0, top: 0, position: 'fixed', height: '3rem', backgroundColor: 'white', paddingTop: '.2rem', zIndex: '100', boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.15)'}} >
      <li className="nav-item">
        <Link className="nav-link" to="/">Store</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
      </li>
      <li className="nav-item">
        {totalItems !== 0 ? (<Link className="nav-link" to="/cart"> <img alt="carrito" src="https://img.icons8.com/material-rounded/24/000000/shopping-cart.png"/> Cart ({ totalItems })*</Link>)
        : (<Link className="nav-link" to="/cart"> <img alt="carrito" src="https://img.icons8.com/material-rounded/24/000000/shopping-cart.png"/> Cart ({ totalItems })</Link>)}
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/admin/view-products">vista administrador</Link>
      </li>
    </ul> */}
