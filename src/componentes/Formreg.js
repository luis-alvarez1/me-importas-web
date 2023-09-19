import React from "react";
import { Link } from "react-router-dom";

const Formreg = () => {
  return (
    <div className="m-0 p-0 bg-primary-subtle" style={{ minHeight: "100vh", width: "100%" }}>
      <h1 className="text-center">Registro</h1>
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
        <div>
          <label for="" className="p-10" style={{ marginBottom: "20px" }}>
            <h6 style={{ marginRight: "30px" }}>Ingrese el correo</h6>
            <input
              type="text"
              id="email"
              placeholder="Ingrese el Correo"
              style={{ marginRight: "30px" }}
            ></input>
          </label>
          <label for="">
            <h6 style={{ marginLeft: "40px" }}>Ingrese el Usuario</h6>
            <input
              style={{ marginLeft: "40px" }}
              type="text"
              id="name"
              placeholder="Ingrese el Usuario"
            ></input>
          </label>
          <br></br>
          <label for="">
            <h6 style={{ marginRight: "58px" }}>
              Ingresar telefono(opcional){" "}
            </h6>
            <input
              style={{ marginRight: "58px" }}
              type="text"
              id="number"
              placeholder="Ingrese el telefono"
            ></input>
          </label>
          <label for="">
            <h6>Ingrese la contraseña</h6>
            <input
              type="text"
              id="password"
              placeholder="Ingrese la Contraseña"
            ></input>
          </label>
          <br></br>
          <label for="">
            <h6 style={{ marginRight: "80px" }}>Confirme la contraseña</h6>
            <input
              style={{ marginRight: "80px" }}
              type="text"
              id="password"
              placeholder="Confirme la contraseña"
            ></input>
          </label>
          <label>
            <input type="checkbox"></input>Acepto los términos <br></br>y
            condiciones
          </label>
        </div>
        <br></br>
        <button type="button" class="btn btn-danger text-black fw-bold">CREAR CUENTA</button>
        <Link to="/" className="text-black fw-bold mt-auto">
          ¿Ya tienes una cuenta? Inicia sesion
        </Link>
      </form>
    </div>
  );
};

export default Formreg;
