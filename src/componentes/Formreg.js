import { gql, useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Formreg = () => {
    const navigate = useNavigate();

    const [correo, setCorreo] = useState('');
    const handleCorreo = (e) => {
        setCorreo(e.target.value);
    };

    const [usuario, setUsuario] = useState('');
    const handleUsuario = (e) => {
        setUsuario(e.target.value);
    };

    const [documento, setDocumento] = useState('');
    const handleDocumento = (e) => {
        setDocumento(e.target.value);
    };

    const [contrasena, setContrasena] = useState('');
    const handleContrasena = (e) => {
        setContrasena(e.target.value);
    };

    const [confirmContrasena, setConfirmContrasena] = useState('');
    const handleConfirmContrasena = (e) => {
        setConfirmContrasena(e.target.value);
    };

    const REGISTRO = gql`
        mutation Registro($name: String!, $mail: String!, $document: String!, $password: String!) {
            createUser(
                user: { name: $name, mail: $mail, document: $document, password: $password }
            ) {
                _id
                name
                mail
                document
                password
            }
        }
    `;

    const [registro, { loading }] = useMutation(REGISTRO, {
        variables: {
            name: usuario,
            mail: correo,
            document: documento,
            password: contrasena,
        },
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (confirmContrasena !== contrasena) {
                return Swal.fire(
                    'Contraseñas no coinciden',
                    'Verifica nuevamente e intenta de nuevo',
                    'error',
                );
            }
            await registro();
            Swal.fire('¡Registro completo!', 'Ahora inicia sesión con tus credenciales', 'success');
            navigate('..');
        } catch (error) {
            Swal.fire(
                '¡Información incorrecta!',
                'Asegúrate de que los datos sean correctos',
                'error',
            );
        }
    };

    return (
        <div className="m-0 p-0 bg-primary-subtle d-flex flex-column align-item-center vw-100 vh-100">
            <h1 className="text-center">Registro</h1>
            <form
                action=""
                className="rounded bg-primary d-flex flex-column text-center p-4 border border-dark"
                style={{
                    alignSelf: 'center',
                }}
                onSubmit={handleSubmit}
            >
                <div>
                    <label htmlFor="" className="mb-20 mx-3">
                        <h6 style={{ marginRight: '30px' }}>Ingrese el correo</h6>
                        <input
                            type="email"
                            value={correo}
                            onChange={handleCorreo}
                            id="email"
                            placeholder="Ingrese el Correo"
                            style={{ marginRight: '30px' }}
                        ></input>
                    </label>
                    <label htmlFor="">
                        <h6 style={{ marginLeft: '40px' }}>Ingrese el Usuario</h6>
                        <input
                            style={{ marginLeft: '40px' }}
                            type="text"
                            value={usuario}
                            onChange={handleUsuario}
                            id="name"
                            placeholder="Ingrese el Usuario"
                        ></input>
                    </label>
                    <br></br>
                    <label htmlFor="">
                        <h6 style={{ marginRight: '58px' }}>Ingrese el documento</h6>
                        <input
                            style={{ marginRight: '58px' }}
                            type="text"
                            value={documento}
                            onChange={handleDocumento}
                            id="number"
                            placeholder="Ingrese el documento"
                        ></input>
                    </label>
                    <label htmlFor="">
                        <h6>Ingrese la contraseña</h6>
                        <input
                            type="password"
                            value={contrasena}
                            onChange={handleContrasena}
                            id="password"
                            placeholder="Ingrese la Contraseña"
                        ></input>
                    </label>
                    <br></br>
                    <label htmlFor="">
                        <h6 style={{ marginRight: '80px' }}>Confirme la contraseña</h6>
                        <input
                            style={{ marginRight: '80px' }}
                            type="password"
                            value={confirmContrasena}
                            onChange={handleConfirmContrasena}
                            id="password"
                            placeholder="Confirme la contraseña"
                        ></input>
                    </label>
                    <label>
                        <input type="checkbox"></input>Acepto los términos <br></br>y condiciones
                    </label>
                </div>
                <br></br>
                <button type="submit" className="bg-danger fs-4 fw-bold btn text-white">
                    {!loading ? 'CREAR CUENTA' : 'Cargando...'}
                </button>
                <Link to=".." className="text-decoration-none text-black fw-bold">
                    ¿Ya tienes una cuenta? Inicia sesion
                </Link>
            </form>
        </div>
    );
};

export default Formreg;
