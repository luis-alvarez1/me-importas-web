import React from 'react';
import Navinci from '../componentes/Navbar';
import Menu from '../componentes/Menu';

const Objetivos = () => {
    return (
        <div>
            <div className="d-flex">
                <Menu />
                <div>
                    <nav
                        className="navbar navbar-expand-lg d-flex"
                        style={{ backgroundColor: '#012161', width: '1080px' }}
                    >
                        <ul
                            className="navbar-nav d-flex align-items-center m-0"
                            style={{ height: '5rem' }}
                        >
                            <li
                                className="nav-item fw-bold text-white text-uppercase list-unstyled"
                                style={{ letterSpacing: '0.1rem', margin: '0 1rem' }}
                            >
                                Grupos
                            </li>
                        </ul>
                    </nav>
                    <div className="p-4 mx-3">
                        <h2>Registrador de objetivos</h2>
                        <br />
                        <div className="d-flex">
                            <h3>Objetivos Nuevos</h3>
                            <input type="text" className="mx-3" />
                        </div>
                        <div className="d-flex">
                            <h3>Fecha</h3>
                            <input type="date" className="mx-3" />
                        </div>
                    </div>
                    <div className="border border-black" style={{ marginTop: '160px' }}>
                        <table className="table">
                            <thead>
                                <tr className="text-center fw-bold">
                                    <th scope="col">Fecha</th>
                                    <th scope="col">Objetivo</th>
                                    <th scope="col">Estado</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="text-center">
                                    <td className="text-danger">8 de septiembre</td>
                                    <td className="fw-bold">Beber 8 vasos al día</td>
                                    <td>
                                        <button type="button" className="btn btn-success">
                                            Realizado
                                        </button>{' '}
                                        <button type="button" className="btn btn-danger">
                                            Cancelar
                                        </button>
                                    </td>
                                </tr>
                                <tr className="text-center">
                                    <td className="text-danger">4 de noviembre</td>
                                    <td className="fw-bold">
                                        Dejar el celular 2 horas antes de dormir
                                    </td>
                                    <td>
                                        <button type="button" className="btn btn-success">
                                            Realizado
                                        </button>{' '}
                                        <button type="button" className="btn btn-danger">
                                            Cancelar
                                        </button>
                                    </td>
                                </tr>
                                <tr className="text-center">
                                    <td className="text-danger">14 de octubre</td>
                                    <td className="fw-bold">ir al parque y despejar la mente</td>
                                    <td>
                                        <button type="button" className="btn btn-success">
                                            Realizado
                                        </button>{' '}
                                        <button type="button" className="btn btn-danger">
                                            Cancelar
                                        </button>
                                    </td>
                                </tr>
                                <tr className="text-center">
                                    <td className="text-danger">5 de enero</td>
                                    <td className="fw-bold">trotar</td>
                                    <td>
                                        <button type="button" className="btn btn-success">
                                            Realizado
                                        </button>{' '}
                                        <button type="button" className="btn btn-danger">
                                            Cancelar
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Objetivos;
