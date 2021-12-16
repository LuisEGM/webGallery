import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom'
import { get } from '../../services/usersService'

const Dashboard = () => {

    const redirectToHome = useRef(null);
    const [user, setUser] = useState({});

    const handleClick = e => {
        e.preventDefault();
        localStorage.removeItem("user");
        redirectToHome.current.click();
    }

    useEffect(() => {
        (async () => {
            let id = JSON.parse(localStorage.getItem("user")).id;
            const result = await get(id);
            setUser(result.data) 
        })();
    }, [])

    return (
        <div>
            <p>
            Dasboar del usuario <strong> {user.nombres} </strong> proveniente de la página login
            </p>
            <img src={user.avatar} alt="avatar" />
            <button className="btn btn-primary" onClick={handleClick} >Salir</button>
            <Link ref={redirectToHome} className="d-none" to="/home"></Link>
        </div>
    )
}

export default Dashboard
