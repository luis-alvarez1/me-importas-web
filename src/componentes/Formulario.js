import React, { useState } from "react";
import { Link } from "react-router-dom";

const Formulario = () => {
  const [recuerdame, setRecuerdame] = useState(false);

  const handleRecuerdameChange = (event) => {
    setRecuerdame(event.target.checked);
  };

  return (
    <div  className="m-0 p-0 bg-primary-subtle" style={{ minHeight: "100vh", width: "100%" }}>
            <h1 className="text-center">Inicio de sesion</h1>
            <form
        action=""
        className="rounded bg-primary d-flex flex-column text-center p-4 border border-dark border"
        style={{
          maxWidth: "500px",
          maxHeight: "1900px",
          height: "350px",
          width: "500px",
          marginLeft: "30%",
          marginTop: "90px",
          transform: "scale(1.3)",
        }}
      >
        <div className="d-flex">
        <label for='' className='mb-20 mx-3'>
          <h5>Ingrese el correo</h5>
          <input type='text' id='email' placeholder='Ingrese el Correo'></input>
        </label>
        <label for='' className='mb-20 mx-3'>
          <h5>Ingrese la contraseña</h5>
          <input type='text' id='password' placeholder='Ingrese la Contraseña'></input>
        </label>
        </div>
        <div>
          <label>
            <input
              className="m-3 my-4"
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
          className='text-decoration-none text-black fw-bold my-3'
        >
          ¿Has olvidado tu contraseña? Recuperala
        </a>
        <br/>
        <button type="button" class="btn btn-danger text-black fw-bold my-2">INICIAR SESION</button>
        <Link to="registro" className="text-decoration-none text-black fw-bold my-3">
          ¿No tienes cuenta? Registrate
        </Link>
      </form>
    </div>
  );
};

export default Formulario;
