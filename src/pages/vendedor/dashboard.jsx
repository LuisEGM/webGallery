import React, { useEffect, useState, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom'
import { get } from '../../services/usersService'
import { AuthContext } from '../../context/authContext'

const Dashboard = ({ children }) => {

    const history = useHistory();
    const { logout } = useContext(AuthContext);

    const [user, setUser] = useState({});

    const handleClick = e => {
        e.preventDefault();
        if (e.target.name === "cerrar") {
            logout();
            history.push("/home");
        }
        else {

        }
    }

    useEffect(() => {
        if (localStorage.getItem("user") != null) {
            (async () => {
                let id = JSON.parse(localStorage.getItem("user")).id;
                const result = await get(id);
                setUser(result.data) 
            })();
        }
    }, [])

    return (
        <div id="wrapper" class="toggled">
            <div id="sidebar-wrapper">
                <div class="text-center py-4">
                    <div class="user-logo">
                        <div>
                            <img className="border rounded-circle" src={user.avatar} style={{ width: '80px', height: '80px' }} alt="logo" />
                        </div>
                        <h5 className="mt-1">{user.nombres+" "+user.apellidos}</h5>
                    </div>
                </div>
                <ul class="sidebar-nav" style={{ paddingTop: "11rem" }} >
                    <li className="seleccionado">
                        <Link to="/dashboard/view-products" >Obras en catálogo</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/buy-orders" >Ordenes de compra</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/whoami" >Sobre mi</Link>
                    </li>
                    <li>
                        <button onClick={handleClick} name="cerrar" class="btn btn-danger" style={{ marginTop: '200px', width: '83%'}} >Cerrar sesión</button>
                    </li>
                </ul>
            </div>
            <div id="page-content-wrapper">
                <div class="container-fluid">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Dashboard
