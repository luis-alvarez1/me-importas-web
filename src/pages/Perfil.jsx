import React from "react";

const Perfil = () => {
  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="card border border-black">
        <h2>perfil</h2>
        <div className="card-body d-flex align-items-center border border-black">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSppkoKsaYMuIoNLDH7O8ePOacLPG1mKXtEng&usqp=CAU"
            className="card-img-top img-fluid" /* Agrega la clase img-fluid aquí */
            alt="Imagen de perfil"
          />
          <button className="btn btn-primary ms-3">Cambiar perfil</button>
        </div>
        <br />
        <form>
          <div className="mb-3 d-flex">
            <label className="form-label">Nombre</label>
            <input type="text" className="form-control border mx-3 border-black" />
          </div>
          <div className="mb-3 d-flex">
            <label className="form-label">Apellidos</label>
            <input type="text" className="form-control border mx-3 border-black" />
          </div>
          <div className="mb-3 d-flex">
            <label className="form-label">Correo</label>
            <input type="text" className="form-control border mx-3 border-black" />
          </div>
          <div className="mb-3 d-flex">
            <label className="form-label">Descripción</label>
            <input type="text" className="form-control border mx-3 border-black" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Perfil;
