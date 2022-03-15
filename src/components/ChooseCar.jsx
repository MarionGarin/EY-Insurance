import React from "react";
import {Link} from "react-router-dom";
import { userContext } from "../context/UserDataProvider";
import car from "../images/car.png";
import "../styles/chooseCar.css";
import HeaderBack from "./HeaderBack";



const ChooseCar = () => {
  const { nombre, auto, poliza, agregarAuto, insurance, agregarPoliza, agregarFire } = React.useContext(userContext);

  console.log(insurance);

  return (
    <section className='selectCar'>
 <HeaderBack/>
  

   <div className='containerSelectcar'>
  

        {/*  style="max-width: 540px" */}
        
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={car}
                className="img-fluid rounded-start mt-4 ms-4"
                alt="auto"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                {
                
                [auto.auto1].map((item, id) => (
                  <button
                  key={id}
                onClick={() => {
                  agregarAuto(item);
                }}
              >
                  <h2 >
                    {" "}
                    {item.modelo} {item.marca} {item.patente}{" "}
                  </h2>
                  </button>
                ))}

                {
                [poliza.poliza1].map((item, id) => (
                  <button
                  key={id}
                  onClick={() => {
                    agregarPoliza(item);
                  }}>

                  <div >
                    <p className="card-text">
                      {" "}
                      Poliza: {item.codigo} Vigencia: {item.vigencia}{" "}
                    </p>
                    <p className=" h5 text-info card-text">{item.estado}</p>
                  </div>
                  </button>
                
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <button type="button" class="btn btn-primary btn-lg" onClick={agregarFire}> Siguiente </button>
    </section>
  );
};

export default ChooseCar;
