import React from 'react'
import {Link} from 'react-router-dom'
import NameLogo from '../assets/namelogo.svg'

const HeaderAccess = () => {
    return (
        <nav style={{ width: '100%', position: 'fixed', padding: '0', boxShadow: '0px 3px 0px 2px rgba(236,114,231,1)'}}>
            <div className="container">
                <div className="d-flex justify-content-between">
                    <div className="d-flex">
                        <img src={NameLogo} alt="logo3" width="200" height="80" />
                    </div>
                    <Link to="/home">
                        <button type="button" className="btn btn-primary mt-3" style={{ borderRadius: "1rem" }} >{"<- Volver a inicio"}</button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default HeaderAccess
