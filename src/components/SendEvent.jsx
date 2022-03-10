import React from "react";
import "../styles/newcar.css";
import HeaderHome from "./HeaderHome";
import check from "../images/check-circle.png";

const SendEvent = () => {
  return (
    <section className="newCar">
      <HeaderHome />
      <div className="containerPass">
        <div className="btn-confirm">
          <img className="logoCheck" src={check} alt="logo coche" />
          <h1>Confirmar información</h1>
          <p>
            ¡Tu solicitud ha sido enviada! Puedes comprobar el proceso de tu
            evento en la sección “Mis eventos”.
          </p>
          <h2>numero de solicitud:{}</h2>

          <button type="button" class="btn-h btn btn-dark rounded-pill">
            compartir
          </button>
          <button type="button" class="btn-h btn btn-dark rounded-pill">
            ir a mis eventos
          </button>
        </div>
      </div>
    </section>
  );
};

export default SendEvent;
