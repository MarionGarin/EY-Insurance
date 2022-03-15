import React from "react";
import { dataContext } from "./DataProvider";
import { LoginContext } from "./LoginProvider";
import {
  addDoc,
  collection,
} from "firebase/firestore"

import { db } from "../firebase";
export const userContext = React.createContext();

const UserDataProvider = (props) => {

  const { datos } = React.useContext(dataContext);
  const { uidData, setError } = React.useContext(LoginContext);
  
  const [nombre, setName] = React.useState("");
  const [apellidos, setApellidos] = React.useState("");
  const [auto, setAuto] = React.useState([]);
  const [poliza, setPoliza] = React.useState([]);
  const [siniestro, setSiniestro] = React.useState([]);


  // filter para obtener solo datos del usuario (uid)
  
  const user = datos.filter((e) => e.id === uidData)
  console.log(user)



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


/*  React.useEffect(() => {
    user.map((item) => (
        [item.poliza].map((ele) => (
            setPoliza(ele.poliza1)
        ))
    ))
   }, [user]) */

  console.log(auto)
  console.log(poliza)
  console.log(siniestro)


  // siniestro

  const [insurance, setInsurance] = React.useState([]);

  const agregarAuto = (item) => {
    const autoInfo = {
      modelo: item.modelo,
      marca: item.marca,
      patente: item.patente
    }

    setInsurance([...insurance, autoInfo])

  }

  const agregarPoliza = (item) => {
    const polizaInfo = {
      codigo: item.codigo,
    }

    setInsurance([...insurance, polizaInfo])

  }

  console.log(insurance)

  const agregarFire = async (e) => {
    e.preventDefault();
    const date = new Date();
   /*  const day = moment(date).format('D-MMM-YY'); */
   if (insurance.length === 0){
     // console.log("El pedido está vacío");
     // setError("El pedido está vacío")
      return;
      
    }
    try {
        const docRef = await addDoc(collection(db, 'users'),{
            date: date,
            seguro: insurance,
            uid: uidData,
        })
        setError(null)
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
    agregarAuto,
    agregarPoliza,
    agregarFire
    
  };

  // datos usuarios por uid
  return (
    <userContext.Provider value={totalProps}>
      {props.children}
    </userContext.Provider>
  );
};

export default UserDataProvider;

