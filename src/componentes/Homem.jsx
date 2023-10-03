import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navinci from './Navinci';
import Menu from './Menu';

const Homem = () => {
    return (
        <div className="d-flex">
            <Menu />
            <div>
                <Navinci />
                <div className="border my-2 d-flex">
                    <form action="" className="p-4">
                        <label htmlFor="" className="d-flex">
                            <h5 className="mx-5">Pendiente</h5>
                            <input type="text" className="rounded" />
                        </label>
                        <br />
                        <label htmlFor="" className="d-flex">
                            <h5 className="mx-5">Fecha</h5>
                            <input type="date" className="rounded" />
                        </label>
                        <br />
                        <br />
                        <button className="btn btn-primary mx-5" type="submit">
                            Registrar
                        </button>
                    </form>
                </div>
                <div>
                    <table className="table">
                        <tbody>
                            <tr>
                                <th>Pendiente #1</th>
                                <td>Resolver taller de matemáticas</td>
                                <td>Agoste 1, Martes</td>
                                <td>
                                    <button type="button" className="btn">
                                        Terminado
                                    </button>{' '}
                                    <button type="button" className="btn">
                                        Editar
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <th>Pendiente #2</th>
                                <td>Leer libro para la clase de español</td>
                                <td>Octubre 30, Lunes</td>
                                <td>
                                    <button type="button" className="btn">
                                        Terminado
                                    </button>{' '}
                                    <button type="button" className="btn">
                                        Editar
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <th>Pendiente #3</th>
                                <td colspan="2"></td>
                                <td>
                                    <button type="button" className="btn">
                                        Terminado
                                    </button>{' '}
                                    <button type="button" className="btn">
                                        Editar
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Homem;
