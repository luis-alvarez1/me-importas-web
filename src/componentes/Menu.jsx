import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="container-fluid bg-primary-subtle border-end border-black vh-100">
      <div className="col my-5 border-bottom border-black">
        <h1>Me importas</h1>
      </div>
      <div className="col-md-4">
        <div className="bg-primary-subtle p-3">
          <Link
            to="/Home"
            className="btn btn-primary mt-3 btn-lg p-3"
            style={{ display: "block", width: "400%" }}
          >
            Inicio
          </Link>
          <Link
            to="/Chat"
            className="btn btn-primary mt-3 btn-lg p-3"
            style={{ display: "block", width: "400%" }}
          >
            Chat
          </Link>
          <Link
            to="/Grupos"
            className="btn btn-primary mt-3 btn-lg p-3"
            style={{ display: "block", width: "400%" }}
          >
            Grupos
          </Link>
          <Link
            to="/Objetivos"
            className="btn btn-primary mt-3 btn-lg p-3"
            style={{ display: "block", width: "400%" }}
          >
            Objetivos
          </Link>
          <Link
            to="/Informes"
            className="btn btn-primary mt-3 btn-lg p-3"
            style={{ display: "block", width: "400%" }}
          >
            Informes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
