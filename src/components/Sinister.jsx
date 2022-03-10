import React from "react";
import "../styles/sinister.css";
import HeaderBack from "./HeaderBack";


const Sinister = () => {

    const saveValue = (e) => {
        console.log(e.target.value); 
       
   }

  return (
    <section className="sinister-container">
      <HeaderBack />
      <div className="containerHome">
        <div className="orderColumn">
          <div className="sinister-title">    
          <h1 className="title">¿Cuál es la situación?</h1>
          </div>
     
          <div className="sinister-buttons">
    
              <button type="sinister-btn" value="choque" onClick={saveValue} class="btn-h btn btn-dark rounded-pill btn-lg">
                Choque
              </button>
          
        
              <button type="sinister-btn" value="robo" onClick={saveValue} class="btn-h btn btn-dark rounded-pill btn-lg">
                Robo
              </button>
       
         
              <button type="sinister-btn" value="asistencia en ruta" onClick={saveValue} class="btn-h btn btn-dark rounded-pill btn-lg">
                Asistencia en ruta
              </button>
           
          </div>
          <div className="continue-btn">
          <button type="button" class="btn btn-primary next-btn">Siguiente</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sinister;
