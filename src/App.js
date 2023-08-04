import React, { useState } from "react";
import NavBar from "./componentes/Navbar";
import Formulario from "./componentes/Formulario";
import Registro from "./Registro";

function App() {
  const [isLoginPage, setIsLoginPage] = useState(true);

  return (
    <div className="App">
      <div className="row">
        <div className="col">
          <NavBar />
        </div>
      </div>
      <div>
        <center>
          <h1>{isLoginPage ? "Inicio de sesión" : "Registro"}</h1>
        </center>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
          }}
        >
          {isLoginPage ? <Formulario /> : <Registro />}
        </div>
      </div>
      <button onClick={() => setIsLoginPage((prev) => !prev)}>
        {isLoginPage ? "Ir a Registro" : "Ir a Inicio de sesión"}
      </button>
    </div>
  );
}

export default App;
