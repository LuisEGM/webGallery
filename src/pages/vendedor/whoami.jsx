import React, { useEffect, useState } from 'react'
import Dashboard from './dashboard'
import HeaderTest from '../../components/headerTest'
import { get } from '../../services/usersService'

const Whoami = () => {

    const [user, setUser] = useState({});

    useEffect(() => {
        (async () => {
            try {
                const result = await get(JSON.parse(localStorage.getItem("user")).id);
                setUser(result.data);
            }
            catch (err) {
                console.log(err);
            }
        })();
    }, [])

    return (
        <Dashboard>
          <HeaderTest />
          <div className="row text-center w-100" style={{ paddingTop: '4rem' }} >
            <h1 className="texto-u2" style={{ fontSize: 35, fontWeight: 'bold' }}>Sobre mi</h1>
            <p style={{ fontSize: 20 }}>Los datos que aquí encuentras no seran expuestos</p>
          </div>
            <div className="row text-center w-100" style={{ paddingTop: '1rem' }} >
                <table class="table table-hover table-bordered table-sm w-100">
                    <thead
                    style={{
                        background: "#161616",
                        color: "white",
                        border: "1px solid white",
                    }}
                    >
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Avatar</th>
                        <th scope="col">Nombres</th>
                        <th scope="col">Apellidos</th>
                        <th scope="col">Documento</th>
                        <th scope="col">Teléfono</th>
                        <th scope="col">Dirección</th>
                        <th scope="col">Email</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">{user.idUser}</th>
                            <td>
                                <img src={user.avatar} alt="avatar1" />
                            </td>
                            <td>{user.nombres}</td>
                            <td>{user.apellidos}</td>
                            <td>{user.documento}</td>
                            <td>{user.telefono}</td>
                            <td>{user.direccion}</td>
                            <td>{user.email}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Dashboard>
      );
}

export default Whoami
