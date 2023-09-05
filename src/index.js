import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Registro from './Registro';
import Grupos from './Paginas/Grupos.jsx'
import Objetivos from './Paginas/Objetivos.jsx'
import Home from './Paginas/Home';
import Chat from './Paginas/Chat.jsx'
import Perfil from './Paginas/Perfil.jsx'
import Informes from './Paginas/Informes'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Informes />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
