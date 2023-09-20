import React from "react";
import Navinci from "../componentes/Navbar";
import Menu from "../componentes/Menu";
import { Link } from "react-router-dom";

const Chat = () => {
  return (
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
              Chat
            </li>
          </ul>
        </nav>
        <div className="d-flex">
          <div
            className="border border-secondary p-3 overflow-y-auto"
            style={{ width: "200px" }}
          >
            <ul className="menu-list list-unstyled p-1 m-0">
              <li className="list1">
                <a
                  href="#"
                  className="text-decoration-none text-bg-light d-block border border-secondary p-4 text-center cursor-pointer border-dark"
                  style={{ width: "150px" }}
                >
                  David
                </a>
              </li>
              <li className="list1">
                <a
                  href="#"
                  className="text-decoration-none text-bg-light d-block border border-secondary p-4 text-center cursor-pointer border-dark"
                  style={{ width: "150px" }}
                >
                  Cami
                </a>
              </li>
              <li className="list1">
                <a
                  href="#"
                  className="text-decoration-none text-bg-light d-block border border-secondary p-4 text-center cursor-pointer border-dark"
                  style={{ width: "150px" }}
                >
                  Carlos
                </a>
              </li>
              <li className="list1">
                <a
                  href="#"
                  className="text-decoration-none text-bg-light d-block border border-secondary p-4 text-center cursor-pointer border-dark"
                  style={{ width: "150px" }}
                >
                  Sofia
                </a>
              </li>
              <li className="list1">
                <a
                  href="#"
                  className="text-decoration-none text-bg-light d-block border border-secondary p-4 text-center cursor-pointer border-dark"
                  style={{ width: "150px" }}
                >
                  Alejo
                </a>
              </li>
              <li className="list1">
                <a
                  href="#"
                  className="text-decoration-none text-bg-light d-block border border-secondary p-4 text-center cursor-pointer border-dark"
                  style={{ width: "150px" }}
                >
                  Manuel
                </a>
              </li>
              <li className="list1">
                <a
                  href="#"
                  className="text-decoration-none text-bg-light d-block border border-secondary p-4 text-center cursor-pointer border-dark"
                  style={{ width: "150px" }}
                >
                  Danna
                </a>
              </li>
            </ul>
          </div>
          <div className="container mt-5" style={{ marginRight: "-40px" }}>
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <div className="card">
                  <div className="card-header bg-primary text-white">
                    Chat Room
                  </div>
                  <div className="card-body chat-box">
                    <div className="message received mb-3">
                      <p className="h4">Hi there!</p>
                    </div>
                    <div className="message sent mb-3">
                      <p className="h4">Hello!</p>
                    </div>
                    {/* Más mensajes aquí */}
                  </div>
                  <div className="card-footer">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Type your message"
                      />
                      <div className="input-group-append">
                        <button className="btn btn-primary">Send</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
