import React from "react";
import { dataContext } from "./DataProvider";
import { LoginContext } from "./LoginProvider";
import {
  addDoc,
  collection,
} from "firebase/firestore"
import { useNavigate } from "react-router-dom";

import { db } from "../firebase";
export const userContext = React.createContext();



const UserDataProvider = (props) => {

  const { datos, event } = React.useContext(dataContext);
  const { uidData, setError } = React.useContext(LoginContext);
  const [nombre, setName] = React.useState("");
  const [apellidos, setApellidos] = React.useState("");
  const [auto, setAuto] = React.useState([]);
  const [poliza, setPoliza] = React.useState([]);
 const [siniestro, setSiniestro] = React.useState([]);
  
 let navigate = useNavigate();

  // estados de ingreso nuevo siniestro

  const [typeSinister, setTypeSinister] = React.useState("");
  const [carSinister, setCarSinister] = React.useState([]);


  // filter para obtener solo datos del usuario (uid)
  
  const user = datos.filter((e) => e.id === uidData)
  const events = event.filter((e) => e.uid === uidData)

  //console.log(events) 
  //console.log(user)



// map para obtener los datos del objeto 

  React.useEffect(() => {
    user.map((item) => (
            setName(item.nombre),
            setApellidos(item.apellidos),
            setAuto(item.auto), 
            setPoliza(item.poliza),
            setSiniestro(item.siniestro)
    ))
  }, [user])
 

  const agregarFire = async (e) => {
    e.preventDefault();
    const date = new Date();
   /*  const day = moment(date).format('D-MMM-YY'); */

    try {
        const docRef = await addDoc(collection(db, 'sinister'),{
            date: date,
            auto: carSinister,
            uid: uidData,
            estado: "Solicitud ingresada",
            tipo: typeSinister,
            
        })
        setError(null)
        console.log('funciona :)')
        navigate("/sendevent");

        return docRef
        

    } catch(error){
        console.log(error)
    }
  }; 
  

  const totalProps = {
    //datos user
    nombre,
    apellidos,
    auto,
    poliza,
    events,
    agregarFire,
    setTypeSinister,
    setCarSinister,
    

    
  };

  // datos usuarios por uid
  return (
    <userContext.Provider value={totalProps}>
      {props.children}
    </userContext.Provider>
  );
};

export default UserDataProvider;
