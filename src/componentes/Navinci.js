import React from "react";
import { Button, OverlayTrigger, Popover, Card } from "react-bootstrap";

const Navinci = () => {
  const popover = (
    <Popover>
      <Popover.Header as="h2">Perfil</Popover.Header>
      <Popover.Body>
        <div className="card m-3 mx-5" style={{ maxWidth: "540px" }}>
          <div className="row">
            <div className="col-md-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSppkoKsaYMuIoNLDH7O8ePOacLPG1mKXtEng&usqp=CAU"
                className="img-fluid rounded-start"
              />
            </div>
            <div className="d-flex">
              <div className="card-body">
                <h5 className="card-title">Name</h5>
                <p className="card-text">
                  Estudiante del instituto icolven del grado 10
                </p>
                <button class="btn btn-primary" type="submit">
                  editar perfil
                </button>
              </div>
            </div>
          </div>
        </div>
      </Popover.Body>
    </Popover>
  );
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg d-flex align-items-center"
        style={{ backgroundColor: "#012161", width: "1080px" }}
      >
        <ul
          className="navbar-nav d-flex align-items-center justify-content-end m-0"
          style={{ height: "5rem" }}
        >
          <li
            className="nav-item fw-bold text-white text-uppercase list-unstyled"
            style={{ letterSpacing: "0.1rem", margin: "0 1rem" }}
          >
            Registrar: Pendiente
          </li>
        </ul>
        <div>
          <OverlayTrigger
            trigger="click"
            placement="bottom-end"
            overlay={popover}
          >
            <Button>Pefil</Button>
          </OverlayTrigger>
        </div>
      </nav>
    </div>
  );
};

export default Navinci;