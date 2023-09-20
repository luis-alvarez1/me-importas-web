import { gql, useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LocalStorage } from '../constants';
import Swal from 'sweetalert2';

const Formulario = () => {
  const navigate = useNavigate();
  const [recuerdame, setRecuerdame] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRecuerdameChange = (event) => {
    setRecuerdame(event.target.checked);
  };

  const LOGIN = gql`
    mutation Login($mail: String!, $password: String!) {
      login(user: { mail: $mail, password: $password }) {
        token
      }
    }
  `;

  const [login, { loading }] = useMutation(LOGIN, {
    variables: {
      mail: email,
      password: password,
    },
  });

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const { data } = await login();

      localStorage.setItem(LocalStorage.user_token, JSON.stringify(data.login.token));

      Swal.fire({
        title: 'Login exitoso',
        icon: 'success',
      });

      navigate('/Home');
    } catch (error) {
      Swal.fire({ icon: 'error', title: 'Infomación incorrecta' });
    }
  };

  return (
    <div className="m-0 p-0 bg-primary-subtle" style={{ minHeight: '100vh', width: '100%' }}>
      <h1 className="text-center">Inicio de sesion</h1>
      <form
        onSubmit={handleSubmit}
        className="rounded bg-primary d-flex flex-column text-center p-4 border border-dark border"
        style={{
          maxWidth: '500px',
          maxHeight: '1900px',
          height: '350px',
          width: '500px',
          marginLeft: '30%',
          marginTop: '90px',
          transform: 'scale(1.3)',
        }}
      >
        <div className="d-flex">
          <label htmlFor="" className="mb-20 mx-3">
            <h5>Ingrese el correo</h5>
            <input
              value={email}
              onChange={handleEmailChange}
              type="email"
              id="email"
              placeholder="Ingrese el Correo"
            />
          </label>
          <label htmlFor="" className="mb-20 mx-3">
            <h5>Ingrese la contraseña</h5>
            <input
              value={password}
              onChange={handlePasswordChange}
              type="password"
              id="password"
              placeholder="Ingrese la Contraseña"
            />
          </label>
        </div>
        <div>
          <label>Recuérdame</label>
          <input
            className="m-3 my-4"
            type="checkbox"
            checked={recuerdame}
            onChange={handleRecuerdameChange}
            style={{ width: '20px', height: '20px' }}
          />
        </div>
        <button
          className="btn text-decoration-none text-black p-4 fw-bold"
          style={{ marginTop: '10px' }}
        >
          ¿Has olvidado tu contraseña? Recuperala
        </button>
        <br></br>
        <button
          id="button"
          type="submit"
          className="bg-danger fs-4 fw-bold"
          style={{ width: '100%', height: '40px', marginTop: '10px' }}
        >
          {loading ? 'Cargando...' : 'INICIAR SESIÓN'}
        </button>
        <Link to="registro" className="text-decoration-none text-black fw-bold">
          ¿No tienes cuenta? Registrate
        </Link>
      </form>
    </div>
  );
};

export default Formulario;
