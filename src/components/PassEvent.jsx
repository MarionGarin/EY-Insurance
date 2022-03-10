import React from "react";
import "../styles/newcar.css";
import HeaderHome from "./HeaderHome";

const PassEvent= () => {
  return (
    <section className="newCar">
      <HeaderHome />
      <div className="containerPass">
      <div className="btn-confirm">
        <h1>Confirmar información</h1>
     <div>datos a confirmar</div>
      
      <button type="button" class="btn-h btn btn-dark rounded-pill">
                Enviar
              </button>
      </div>
      </div>
    </section>
  );
};

export default PassEvent;