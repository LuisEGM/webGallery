import React from 'react';

const Footer = () => (
    <div className="footer">
        <div className="footer__left">
            <h2>Web Gallery Project</h2>
            <p>Objetivo: Implementar los modelos arquitectonicos seleccionados para construir la plantilla propuesta en el segundo seguimiento.</p>
            <p>Misión: Darle interactividad a la plataforma WEB-GALLERY.</p>
            <p>Arquitectura de software</p>
            <p>Universidad del magdalena</p>
            <p>
                © 2020 Web Gallery Project, Inc.
                Todos los derechos reservados
            </p>
        </div>
        <div className="footer__right">
            <div className="footer__right__autores">
                <h3>Creadores</h3>
                <p>...........</p>
                <p>...........</p>
                <p>Jorge Alberto Silva Zambrano</p>
                <p>Sebastian Troncoso Correa</p>
                <p>Luis Eduardo Gamez Maldonado</p>
            </div>
            <div className="footer__right__profesor">
                <h3>Profesor</h3>
                <p>Johan Alberto Robles Solano</p>
            </div>
        </div>
    </div> 
);

export default Footer;