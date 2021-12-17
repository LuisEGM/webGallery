import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import HeaderAccess from '../../components/headerAccess'
import Logo from '../../assets/logo.svg'
import Desing1 from '../../assets/desing1.svg'
import { changePassword } from '../../services/usersService'
import { ToastContainer, toast } from 'react-toastify'

const ForgotPassword = () => {

    const [email, setEmail] = useState("");
    const reditectionToLogin = useRef(null);

    const handleChange = e => {
        setEmail(e.target.value);
    }

    const handleClick = e => {
        e.preventDefault();

        if (email === "") {
            toast.warn('Si deseas recuperar tu contraseña asegurate de ingresar el correo con el que te registraste...!', {
                theme: "colored",
                position: "bottom-right",
                autoClose: 5000,
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
                    await changePassword({ email: email, password: "" });
                    document.getElementById("boton").classList.add("d-none");
                    toast.info('Se envio una notificación con las nuevas credenciales de acceso, por favor revise su correo.', {
                        theme: "colored",
                        position: "top-right",
                        autoClose: 6000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    setTimeout(() => {
                        reditectionToLogin.current.click();
                    }, 6000);
                } catch (error) {
                        toast.error(error.response.data.error.message, {
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
                            <h5 className="text-center texto-u2">Ingresa tu correo electronico aquí</h5>
                        </div>
                        <div className="form-group">
                            <div className="form-floating mb-3">
                                <input onChange={handleChange} type="email" className="form-control" name="email" value={email} placeholder="Emailname@example.com"/>
                                <label htmlFor="floatingInput">Direccion email</label>
                            </div>
                        </div>
                        <button onClick={handleClick} id="boton" className="btn btn-primary my-3" type="button">Recuperar contraseña</button>
                    </div>
                </div>
                <div className="desing1">
                    <img src={Desing1} alt="desing1" height="300" width="300"/>
                </div>
                <Link to="/login" ref={reditectionToLogin} className="d-none">
                    ¿Olvidaste tu contraseña?
                </Link>
            </div>
            <ToastContainer/>
        </>
    )
}

export default ForgotPassword
