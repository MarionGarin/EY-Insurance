import React from "react";
import "../styles/home.css";
import { Link } from "react-router-dom";
import HeaderLogo from "./HeaderLogo";

const Home = () => {
  return (
    <section className="sectionHome">
      <HeaderLogo />
      <div className="containerHome">
        {/*icon EY y boton cerrar sesion*/}
        <div className="orderColumn">
          {/*icono y usuario*/}
          <div className="containerUser">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="33"
              fill="currentColor"
              class="bi bi-person-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg>
            <h1 className="title">Hola </h1>
          </div>
          {/*botones del menu*/}
          <div className=" homeButton ">
            <Link to="/selectcar">
              <button type="button" class="btn-h btn btn-dark rounded-pill ">
                Ingresar nuevo siniestro
              </button>
            </Link>
            <Link to="/policies">
              <button type="button" class="btn-h btn btn-dark rounded-pill">
                Mis pólizas{" "}
              </button>
            </Link>
            <Link to="/events">
              <button
                type="button"
                class="btn-h btn btn-dark rounded-pill btn-lg col-7"
              >
                Mis eventos
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
