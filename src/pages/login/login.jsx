import React, { useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import HeaderAccess from '../../components/headerAccess'
import Logo from '../../assets/logo.svg'
import Desing1 from '../../assets/desing1.svg'
import { authentication } from '../../services/usersService'
import { ToastContainer, toast } from 'react-toastify'

import { AuthContext } from '../../context/authContext'

const Login = () => {

    const history = useHistory();
    const { userLogin } = useContext(AuthContext)

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleChange = e => {
        if (e.target.name === "email") {
            setEmail(e.target.value);
        }
        if (e.target.name === "password") {
            setPassword(e.target.value);
        }
    }

    const handleClick = e => {
        e.preventDefault();
        if (email === "" || password === "") {
            toast.warn('Asegurate de no dejar campos sin llenar...!', {
                theme: "colored",
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        else {
            (async () => {
                try {
                    const result = await authentication({ email: email, password: password });
                    let user = result.data.datos;
                    user["token"] = result.data.token;
                    userLogin(user);
                    history.push("/dashboard/view-products");
                } catch (error) {
                    if (error.response.data.error.message === "Datos inválidos") {
                        toast.error(`Los datos de email o password son invalidos...!`, {
                            theme: "colored",
                            position: "bottom-right",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                    }
                    console.log(error.response.data);
                }
            })();
        }
    }

    return (
        <>
            <div>
                <HeaderAccess/>
                <div className="container" style={{ zIndex: '100', paddingTop: '7rem' }}>
                    <div className="card card-container mx-auto p-4" style={{ width: '40%', borderBottom: '6px solid #E771E8'}}>
                        <div className="mx-auto">
                            <img style={{ width: '100%'}} className="ml-2" alt="img-logo" src={Logo} height="110" width="110"/>
                            <h4 className="text-center texto-u2">Iniciar sesión</h4>
                        </div>
                        <div className="form-group">
                            <div className="form-floating mb-3">
                                <input onChange={handleChange} type="email" className="form-control" name="email" value={email} placeholder="Emailname@example.com"/>
                                <label htmlFor="floatingInput">Direccion email</label>
                            </div>
                            <div className="form-floating">
                                <input onChange={handleChange} type="password" className="form-control" name="password" value={password} placeholder="Password"/>
                                <label htmlFor="floatingPassword">Contraseña</label>
                            </div>
                        </div>
                        <button onClick={handleClick} className="btn btn-lg btn-primary my-3" type="button">Iniciar</button>
                        <div className="card-footer text-center">
                            <Link to="/forgotPassword" className="forgot-password">
                                ¿Olvidaste tu contraseña?
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="desing1">
                    <img src={Desing1} alt="desing1" height="300" width="300"/>
                </div>
            </div>
            <ToastContainer/>
        </>
    )
}

export default Login
