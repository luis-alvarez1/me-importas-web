import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Menu = () => {
  return (
    <div className="container-fluid bg-primary-subtle border-end border-black vh-100">
      <div className="col my-5 border-bottom border-black">
        <h1>Me importas</h1>
      </div>
      <div className="col-md-4">
        <div className="bg-primary-subtle p-3">
          <button
            className="btn btn-primary mt-3 btn-lg p-3"
            style={{ display: "block", width: "400%" }}
          >
            Inicio
          </button>
          <button
            className="btn btn-primary mt-3 btn-lg p-3"
            style={{ display: "block", width: "400%" }}
          >
            Chat
          </button>
          <button
            className="btn btn-primary mt-3 btn-lg p-3"
            style={{ display: "block", width: "400%" }}
          >
            Grupos
          </button>
          <button
            className="btn btn-primary mt-3 btn-lg p-3"
            style={{ display: "block", width: "400%" }}
          >
            Objetivos
          </button>
          <button
            className="btn btn-primary mt-3 btn-lg p-3"
            style={{ display: "block", width: "400%" }}
          >
            Informes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
