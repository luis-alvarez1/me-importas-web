import React from 'react';
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navinci = () => {
    const popover = (
        <Popover>
            <Popover.Header as="h2">Perfil</Popover.Header>
            <Popover.Body>
                <div className="container card m-3 mx-1">
                    <div className="row">
                        <div className="col-md-5 mt-5">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSppkoKsaYMuIoNLDH7O8ePOacLPG1mKXtEng&usqp=CAU"
                                className="img-fluid rounded-start"
                                alt="profile"
                            />
                        </div>
                        <div className="col d-flex">
                            <div className="card-body">
                                <p className="card-text">
                                    Estudiante del instituto icolven del grado 10
                                </p>
                                <Link to="Perfil" className="btn btn-primary" type="submit">
                                    Editar
                                </Link>
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
                style={{ backgroundColor: '#012161', width: '1080px' }}
            >
                <ul
                    className="navbar-nav d-flex align-items-center justify-content-end m-0"
                    style={{ height: '5rem' }}
                >
                    <li
                        className="nav-item fw-bold text-white text-uppercase list-unstyled"
                        style={{ letterSpacing: '0.1rem', margin: '0 1rem' }}
                    >
                        Registrar: Pendiente
                    </li>
                </ul>
                <div>
                    <OverlayTrigger trigger="click" placement="bottom-end" overlay={popover}>
                        <Button>Pefil</Button>
                    </OverlayTrigger>
                </div>
            </nav>
        </div>
    );
};

export default Navinci;
