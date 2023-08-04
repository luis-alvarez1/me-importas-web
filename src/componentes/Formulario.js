import React, { useState } from 'react';
import '../Styles/Formulario.css'

const Formulario = () => {

    const [recuerdame, setRecuerdame] = useState(false);

    const handleRecuerdameChange = (event) => {
      setRecuerdame(event.target.checked);
    };

    return <div className="form">
        <form action="" >
            <label for="">
                <h4>Ingrese el correo</h4>
                <input type="text" id="email" placeholder='Ingrese el Correo'></input>
            </label>
            <label for="">
                <h5>Ingrese la contraseña</h5>
                <input type="text" id="password" placeholder='Ingrese la Contraseña'></input>
            </label>
            <div>
          <label>
            <input
              type="checkbox" checked={recuerdame} onChange={handleRecuerdameChange} className='remeber'/>
            Recuérdame
          </label>
        </div>
            <a href="#" className="forgotpas">¿Has olvidado tu contraseña? Recuperala</a>
            <br></br>
            <button id="button" className="logbutton">INICIAR SESIÓN</button>
            <a href='' className='forgotpas'>¿No tienes cuenta? Registrate</a>
        </form>
    </div>
}

export default Formulario; 