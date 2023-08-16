import React from "react";
import "../Styles/Sidebar.css";

const Homem = () => {
  return (
    <div>
    <div className="sidebar">
  <ul className="menu-list">
          <h3 className="meimportas">Me importas</h3>
    <li className="list1">
      <a href="#" className=" bx bx-building-house">Inicio
      </a>
    </li>
    <li className="list1">
      <a href="#" className="bx bx-message-rounded-dots">Chat
      </a>
    </li>
    <li className="list1">
      <a href="#" className="bx bx-group">Grupos
      </a>
    </li>
    <li className="list1">
      <a href="#" className="bx bxs-heart">Objetivos
      </a>
    </li>
    <li className="list1">
      <a href="#" className="bx bx-football">Metas
      </a>
    </li>
  </ul>
    </div>
    </div>
  );
};

export default Homem;