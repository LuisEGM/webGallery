import React from "react";
import { Link } from 'react-router-dom'
import NameLogo from '../assets/namelogo.svg'

const HeaderTest = () => {
  return (
    <ul className="nav justify-content-between" style={{ width: '100%', left: 0, top: 0, position: 'fixed', height: '4rem', backgroundColor: 'white', paddingTop: '.2rem', zIndex: '100', boxShadow: '0px 3px 0px 2px rgba(236,114,231,1)'}} >
      <li className="nav-item" style={{ marginLeft: '18rem', }}>
        <img className="pb-2" src={NameLogo} alt="logo3" width="200" height="80" />
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/obras">
          <button className="btn btn-primary">Vista de usuario</button>
        </Link>
      </li>
    </ul>
  );
};

export default HeaderTest;
