import React from "react";
import "../styles/newcar.css";
import HeaderHome from "./HeaderHome";
import coche from "../images/coche.png";

const NewCar = () => {
  return (
    <section className="newCar">
      <HeaderHome />
      <div className="containerNewCar">
        <div className="containerLogo-C">
        <h1>¿Deseas un automóvil de reemplazo?</h1>
          <img className="logoCoche" src={coche} alt="logo coche" />
          <button type="button" class="btn-N btn btn-dark rounded-pill ">
            si
          </button>
          <button type="button" class="btn-NE btn btn-dark rounded-pill ">
            no
          </button>
        
        <input
          type="checkbox"
          class="form-check-input"
          id="exampleCheck1"
        ></input>
        <div className="checkLabel">
        <label className="form-check-label" for="exampleCheck1">
          <p>
            acepto
            <button type="button" class="btn btn-link">
              terminos y condiciones
            </button>
          </p>
        </label>
        </div>
        </div>
      </div>
    </section>
  );
};

export default NewCar;
