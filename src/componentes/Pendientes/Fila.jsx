import React from 'react';

const Fila = ({ user, descripcion, state }) => {
    return (
        <tr>
            <td>{descripcion}</td>
            <td>{state ? "Completado" : "No completado"}</td>
            <td>{user.name}</td>
        </tr>
    )
}

export default Fila