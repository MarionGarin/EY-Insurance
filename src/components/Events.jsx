import React from "react";
import "../styles/events.css";
import HeaderHome from "./HeaderHome.jsx";
//import dataContext from '../context/DataProvider'
import { userContext } from "../context/UserDataProvider";

const Events = () => {
  const { events } = React.useContext(userContext);
  

  return (
    <section className="events">
      <HeaderHome />
      <h1 className="text-center mt-4">Mis Eventos</h1>
      <div className=" containerEvents mt-3 card-body ">
        
       
          {events.map((item, id) => (
            <div className=" car-event mt-2 ms-4 border p-2 rounded border-dark  " key={id}>
              {[item.auto].map((ele, id) => (
                <h2 key={id}>
                  {ele.marca} - {ele.patente} - {ele.modelo}
                </h2>
              ))}
              <p className="h3"> {item.tipo} </p>
             {/*  Fecha de ingreso: {item.fecha}  */}
              <p>Numero de orden: {item.id} </p>
              <p className= "text-success h4">{item.estado}</p>
            </div>
          ))}
       
      </div>
    </section>
  );
};

export default Events;
