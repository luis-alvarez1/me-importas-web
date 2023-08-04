import React from "react";
import '../Styles/Formreg.css';
const Formreg = () => {
    return<div className="reg">
        <form action="" className="formreg">
          <div>
            <label for="">
                <h6 className="btn-1">Ingrese el correo</h6>
                <input className="btn-1" type="text"  id="email" placeholder='Ingrese el Correo' ClassName="space-inp"></input>
            </label>
            <label for="">
                <h6 className="btn-6">Ingrese el Usuario</h6>
                <input className="btn-6" type="text" id="name" placeholder='Ingrese el Usuario'></input>
            </label>
            <br></br>
            <label for="">
                <h6 className="btn-2">Ingresar telefono(opcional) </h6>
                <input className="btn-2" type="text" id="number" placeholder='Ingrese el telefono'></input>
            </label>
            <label for="">
                <h6 className="btn-4">Ingrese la contraseña</h6>
                <input type="text" id="password" placeholder='Ingrese la Contraseña'></input>
            </label>
            <br></br>
            <label for="">
                <h6 className="btn-3">Confirme la contraseña</h6>
                <input className="btn-3" type="text" id="password" placeholder='Confirme la contraseña'></input>
            </label> 
            <label>
            <input type="checkbox"></input>Acepto los términos <br></br>y condiciones</label>
            </div>
            <br></br>
            <button id="button" className="logbutton">CREAR CUENTA</button>
            <a href='Formulario.js' className='relog'>¿Ya tienes una cuenta? Inicia sesion</a>
        </form>
        
    </div>
}

export default Formreg; 
