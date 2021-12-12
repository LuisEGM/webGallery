import React, { useContext, useEffect } from "react";
import { Link } from 'react-router-dom'
import { GlobalContext } from '../context/globalContext'
import Logo from '../assets/logo.svg'
import NameLogo from '../assets/namelogo.svg'

const Header = ({ location }) => {

  useEffect(() => {
      let anclas = document.querySelectorAll(".ancla");
      for (let i = 0; i < anclas.length; i++) {
        if (anclas[i].classList.contains("active-custom")) {
          anclas[i].classList.remove("active-custom");
        }
      }
      // eslint-disable-next-line default-case
      switch (location) {
        case "HOME":
          document.querySelector(".home").classList.add("active-custom");
          break;
        case "ABOUT":
            document.querySelector(".about").classList.add("active-custom");
            break;
        case "OBRAS":
          document.querySelector(".obras").classList.add("active-custom");
          break;
        case "CART":
          document.querySelector(".cart").classList.add("active-custom");
          break;
      }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const { totalItems } = useContext(GlobalContext) 

  return (

  <nav className="navbar navbar-expand-lg navbar-light bg-secondary" style={{ width: '100%', position: 'fixed', padding: '0', zIndex: '100', boxShadow: '0px 3px 0px 2px rgba(236,114,231,1)'}}>
    <div className="container">
      <Link to="/home" className="navbar-brand">
        <img src={Logo} alt="logo" width="80" height="60" />
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" style={{fontSize: '1rem'}} id="navbarColor01">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link to="/home" className="nav-link home ancla">Inicio
              <span className="visually-hidden">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/obras" className="nav-link obras ancla">Obras</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link about ancla">Acerca de</Link>
          </li>
        </ul>
        <div className="d-flex">
          <ul className="navbar-nav">
            <li className="nav-item mt-3">
              {totalItems !== 0 ? (<Link className="nav-link cart ancla" to="/cart"> <img alt="carrito" src="https://img.icons8.com/material-rounded/24/000000/shopping-cart.png"/> Carrito ({ totalItems })*</Link>)
              : (<Link className="nav-link cart ancla" to="/cart"> <img alt="carrito" src="https://img.icons8.com/material-rounded/24/000000/shopping-cart.png"/> Carrito ({ totalItems })</Link>)}
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