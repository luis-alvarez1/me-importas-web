import React from "react";
import Navinci from "../componentes/Navbar";
import Menu from "../componentes/Menu";

const Grupos = () => {
  return (
    <div>
      <div className="d-flex">
        <Menu />
        <div>
          <nav
            className="navbar navbar-expand-lg d-flex"
            style={{ backgroundColor: "#012161", width: "1080px" }}
          >
            <ul
              className="navbar-nav d-flex align-items-center m-0"
              style={{ height: "5rem" }}
            >
              <li
                className="nav-item fw-bold text-white text-uppercase list-unstyled"
                style={{ letterSpacing: "0.1rem", margin: "0 1rem" }}
              >
                Objetivos
              </li>
            </ul>
          </nav>
          <div>
            <br />
            <div className="d-flex mx-3">
              <h3 className="">Nombre del grupo:</h3>
              <input type="text" className="mx-3" />
            </div>
            <br />
            <div className="d-flex mx-3">
              <h3>Silenciar grupo</h3>
              <input
                type="checkbox"
                className="mx-3"
                style={{ width: "12%" }}
              />
            </div>
            <br />
            <div className="d-flex mx-3">
              <h3>Correo electronico</h3>
              <input type="email" className="mx-3" />
            </div>
            <button style={{ marginInline: "100px", marginTop: "50px" }}>
              Añadir participantes
            </button>
            <div className="border border-black my-3">Participantes</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grupos;
