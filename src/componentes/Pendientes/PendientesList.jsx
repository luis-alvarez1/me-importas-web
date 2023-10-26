import React from 'react';
import { gql, useQuery } from '@apollo/client';
import Fila from './Fila';
import { LocalStorage } from '../../constants';


const PendientesList = () => {
    const user = JSON.parse(localStorage.getItem(LocalStorage.user_object))
    const PENDIENTES_BY_USER = gql`
    query pendientesByUser($_id:ID!){
        pendientesByUser(user: {_id:$_id}) {
          _id
          user {
            _id
            name
            mail
            document
            password
          }
          descripcion
          state
        }
      }
    `;
    const {data} = useQuery(PENDIENTES_BY_USER,{
        variables:{
            _id: user._id
        }
    })
    
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Descripción</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Usuario</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.pendientesByUser?.map((pendiente) => {
                        return (<Fila user={pendiente.user} descripcion={pendiente.descripcion} state={pendiente.state}/>) 
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default PendientesList