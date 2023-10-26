import React from 'react';
import Navinci from './Navinci';
import Menu from './Menu';
import PendientesList from './Pendientes/PendientesList';
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
                <PendientesList />
            </div>
        </div>
    );
};

export default Homem;
