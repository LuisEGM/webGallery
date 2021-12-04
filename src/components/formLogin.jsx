import React , {useState} from 'react'
import "./formLogin.css"
import LogoUsuario from '../img/LogoUsuario.png';

const FormLogin = () => {

    const [inputPassword, cambiarInputPassword] = useState('');
	const [inputCorreo, cambiarInputCorreo] = useState('');

    const handleSubmit = (e) => {
		e.preventDefault();

		console.log('Formulario Enviado!');
	}

	const handleInputPassword = (e) => {
		cambiarInputPassword(e.target.value);
	}
	
	const handleInputCorreo = (e) => {
		cambiarInputCorreo(e.target.value);
	}


    return (
        <div>
            <form action="" onSubmit={handleSubmit} className="formulario">
				<img src={LogoUsuario} alt="LogoUsuario" className="logoUser"/>

				<div>
					<label htmlFor="correo">Correo</label>
					<input
						type="text"
						name="correo"
						placeholder="Correo"
						id="correo"
						value={inputCorreo}
						onChange={handleInputCorreo}
					/>
				</div>

                <div>
					<label htmlFor="password">Contraseña</label>
					<input
						type="text"
						name="password"
						placeholder="Contraseña"
						id="password"
                        type="password"
						value={inputPassword}
						onChange={handleInputPassword}
					/>
				</div>

				<button type="submit">INICIAR</button>
			</form>
        </div>
    );
}

export default FormLogin