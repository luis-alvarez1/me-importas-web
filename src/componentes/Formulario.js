import React, { useState } from "react";
import { Link } from "react-router-dom";

const Formulario = () => {
  const [recuerdame, setRecuerdame] = useState(false);

  const handleRecuerdameChange = (event) => {
    setRecuerdame(event.target.checked);
  };

  return (
    <div
      className='d-flex align-items-center justify-content-center flex-column bg-primary text-center flex-column p-4 border border-dark'
      style={{
        height: '330px',
        width: '470px',
        marginTop: '-250px',
        transform: 'scale(1.3)',
      }}
    >
      <form action=''>
        <label for='' className='mb-20 p-3'>
          <h4>Ingrese el correo</h4>
          <input type='text' id='email' placeholder='Ingrese el Correo'></input>
        </label>
        <label for=''>
          <h5>Ingrese la contraseña</h5>
          <input type='text' id='password' placeholder='Ingrese la Contraseña'></input>
        </label>
        <div>
          <label>
            <input
              className="m-3"
              type="checkbox"
              checked={recuerdame}
              onChange={handleRecuerdameChange}
              style={{ width: '20px', height: '20px' }}
            />
            Recuérdame
          </label>
        </div>
        <a
          href='#'
          className='text-decoration-none text-black p-4 fw-bold'
          style={{ marginTop: '10px' }}
        >
          ¿Has olvidado tu contraseña? Recuperala
        </a>
        <br></br>
        <button
          id='button'
          className='bg-danger fs-4 fw-bold'
          style={{ width: '100%', height: '40px', marginTop: '10px' }}
        >
          INICIAR SESIÓN
        </button>
        <Link to="registro" className="text-decoration-none text-black fw-bold">
          ¿No tienes cuenta? Registrate
        </Link>
      </form>
    </div>
  );
};

export default Formulario;
