import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Menu = () => {
  return (
  <div>
    <div
      className="bg-light border border-end-0-black p-3 overflow-y-auto"
      style={{ width: "300px" }}
    >
      <ul className="menu-list list-unstyled p-1 m-0">
        <h3 className="border border-2 border-black text-center p-3">
          Me importas
        </h3>
        <li className="list1">
          <a
            href="#"
            className="d-block border border-secondary p-5 text-center cursor-pointer border-dark p-5"
            style={{ width: "250px" }}
          >
            Inicio
          </a>
        </li>
        <li className="list1">
          <a
            href="#"
            className="d-block border border-secondary p-5 text-center cursor-pointer border-dark p-5"
            style={{ width: "250px" }}
          >
            Chat
          </a>
        </li>
        <li className="list1">
          <a
            href="#"
            className="d-block border border-secondary p-5 text-center cursor-pointer border-dark p-5"
            style={{ width: "250px" }}
          >
            Grupos
          </a>
        </li>
        <li className="list1">
          <a
            href="#"
            className="d-block border border-secondary p-5 text-center cursor-pointer border-dark p-5"
            style={{ width: "250px" }}
          >
            Objetivos
          </a>
        </li>
        <li className="list1">
          <a
            href="#"
            className="d-block border border-secondary p-5 text-center cursor-pointer border-dark p-5"
            style={{ width: "250px" }}
          >
            Informes
          </a>
        </li>
      </ul>
    </div>
  </div>
  );
};

export default Menu;
