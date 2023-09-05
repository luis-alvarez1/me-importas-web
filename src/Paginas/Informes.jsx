import React from "react";
import Menu from "../componentes/Menu";

const Informes = () => {
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
                Informes
              </li>
            </ul>
          </nav>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Informes;
