import React from "react";
import {Link} from "react-router-dom";
import "../styles/newcar.css";
import coche from "../images/coche.png";
import HeaderBack from "./HeaderBack";
import back from '../images/back.png';
import { userContext } from "../context/UserDataProvider";

const NewCar = () => {

  const {agregarFire} =  React.useContext(userContext);
  /* const saveValue = (e) => {
    console.log(e.target.value); 
   
} */

  return (
    <section className="newCar">
     <div className="back-icon">
     <HeaderBack />
     <Link to ={"/selectcar"}>
     <img className= "back" src={back} alt="Home icon" />
     </Link>
     </div>
      <div className="col-auto p-4 text-center">
        <div className="text-question">
       <h1>¿Deseas un automóvil de reemplazo?</h1>
        </div>
        <div className="containerLogo-C">
        
          <div className= "car-container">
          <img className="logoCoche" src={coche} alt="logo coche" />
          </div>
          <Link to = "/sendevent">
          <button type="button" value="sí" onClick={agregarFire} class="btn-N btn btn-dark rounded-pill ">
            Sí
          </button>
          <button type="button"  value="no" onClick={agregarFire} class="btn-N btn btn-dark rounded-pill ">
            No
          </button>
          </Link>
          <div className="checkLabel check-section">
            <input
              type="checkbox"
              className="formCheck form-check-input"
              id="exampleCheck1"
            ></input>

            <label className="form-check-label" for="exampleCheck1">
        
              
                <Link to={`/reset`}>
                <p
                  type="button"
                  className="text-center mt-3 conditions"
                >
                    Acepto los términos y condiciones
                </p>
              </Link>
            
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewCar;
