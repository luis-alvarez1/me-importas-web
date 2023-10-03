import React from 'react';
import Menu from '../componentes/Menu';

const Perfil = () => {
    return (
        <div>
            <nav
                className="navbar navbar-expand-lg d-flex vw-100"
                style={{ backgroundColor: '#012161' }}
            >
                <ul className="navbar-nav d-flex align-items-center m-0" style={{ height: '5rem' }}>
                    <li
                        className="nav-item fw-bold text-white text-uppercase list-unstyled"
                        style={{ letterSpacing: '0.1rem', margin: '0 1rem' }}
                    >
                        Editar perfil
                    </li>
                </ul>
            </nav>
            <div className="container d-flex justify-content-center align-items-center m-5">
                <div className="card">
                    <div className="text-center">
                        <h2 className="">Perfil</h2>
                    </div>
                    <div className="card-body d-flex align-items-center">
                        <div className="col">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSppkoKsaYMuIoNLDH7O8ePOacLPG1mKXtEng&usqp=CAU"
                                className="card-img-top img-fluid" /* Agrega la clase img-fluid aquí */
                                alt="Imagen de perfil"
                            />
                        </div>
                        <div className="col d-flex flex-column justify-items-center align-items-center">
                            <button className="btn btn-primary ms-3 w-50 m-2">
                                Cambiar perfil
                            </button>
                            <button className="btn btn-danger ms-3 w-50 m-2">Cancelar</button>
                        </div>
                    </div>
                    <br />
                    <form>
                        <div className="col d-flex justify-items-center">
                            <div className="container m-4">
                                <label htmlFor="name" className="form-label">
                                    Nombre completo
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    placeholder="Tu nombre completo"
                                />
                            </div>
                            <div className="container m-4">
                                <label htmlFor="exampleFormControlInput1" className="form-label">
                                    Correo
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="name@example.com"
                                />
                            </div>
                        </div>
                        <div className="container m-4">
                            <label htmlFor="description" className="form-label">
                                Descripción
                            </label>
                            <input
                                type="text"
                                className="form-control w-75"
                                id="description"
                                placeholder="Describete"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Perfil;
