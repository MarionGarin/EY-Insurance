import React, {useState} from "react";
import {Link} from "react-router-dom";
import "../styles/date.css";
import HeaderBack from "./HeaderBack";
import { DatePicker } from "@material-ui/pickers";
import back from '../images/back.png';


const SelectDate = () => {

const [dateSelected, changeDate] = useState(new Date());

console.log(dateSelected);

    return ( 
    <section className="date-container">
        
         <div className="back-icon">
         <HeaderBack/>
         <Link to ={"/sinister"}>
         <img className= "back" src={back} alt="Home icon" />
         </Link>
         </div>
            <div className="date-title">
                    <h1>¿Cuándo sucedió?</h1>
                    
                </div>
     
            <div className="date-box">
            <label className="date-text">Selecciona la fecha para cambiarla:</label>
            <div className="date-picker">
            <DatePicker value={dateSelected} onChange={changeDate} format="        dd MMMM yyyy" className="textDate"/>
            </div>
            </div>
       
            <div className="continue-btn">
            <Link to = "/describe">
          <button type="button" class="btn btn-dark next-btn">Siguiente</button>
          </Link>
          </div>
        </section>

     );
}
 
export default SelectDate;

