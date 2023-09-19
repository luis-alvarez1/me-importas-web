import React, { useState } from 'react';
import NavBar from './componentes/Navbar';
import Formulario from './componentes/Formulario';

function App() {
  return (
    <div className='App'>
      <div className='row'>
        <div className='col'>
          <NavBar />
        </div>
      </div>
      <div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
          }}
        >
          <Formulario />
        </div>
      </div>
    </div>
  );
}

export default App;
