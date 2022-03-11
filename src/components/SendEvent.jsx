import React from "react";
import "../styles/newcar.css";
import check from "../images/check-circle.png";
import HeaderBack from "./HeaderBack";
import { Link } from "react-router-dom";
const SendEvent = () => {
  return (
    <section className="newCar ">
      <HeaderBack />
      <div className=" col-auto p-5 text-center ">
        <div className="btn-confirm">
          <img className="logoCheck col-auto " src={check} alt="logo coche" />
          <p>
            ¡Tu solicitud ha sido enviada! <br/>  Puedes comprobar el estado de tu proceso en la sección “Mis eventos”.
          </p>
          <h3>Número de solicitud:{}</h3>
          <div className="btn-send">
            <button type="button" class="btn-h btn btn-dark rounded-pill">
              Compartir
            </button>
            <Link to="/events">
              <button type="button" class="btn-h btn btn-dark rounded-pill">
                Ir a mis eventos
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SendEvent;
