import React ,{useState} from 'react'

import NavAccess from '../components/navAccess'
import FormLogin from '../components/formLogin'

const Login = () => {


    return (
        <div>
            <NavAccess/>
            <div className="contenedor">
            <FormLogin/>
            </div>
            
            
            
        </div>
    )
}

export default Login
