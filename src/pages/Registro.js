import React from "react";
import NavBar from "../componentes/Navbar";
import Formreg from "../componentes/Formreg";

function Registro() {
  return (
    <div className="App">
      <div className="row">
        <div className="col">
          <NavBar />
          <div />
          <div>
            <Formreg />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registro;
