import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Registro from "./pages/Registro";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Grupos from "./pages/Grupos";
import Informes from "./pages/Informes";
import Objetivos from "./pages/Objetivos";
import Perfil from "./pages/Perfil";
import Homem from "./componentes/Homem";

const router = createBrowserRouter([
  {
    index: true,
    path: "/",
    element: <App />,
  },
  {
    path: "Registro",
    element: <Registro />,
  },
  {
    path: "Home",
    element: <Home />,
  },
  {
    path: "Chat",
    element: <Chat />,
  },
  {
    path: "Grupos",
    element: <Grupos />,
  },
  {
    path: "Objetivos",
    element: <Objetivos />,
  },
  {
    path: "Informes",
    element: <Informes />,
  },
  {
    path: "Perfil",
    element: <Perfil />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
