import React from 'react';
import {
    collection,
    onSnapshot,
  } from "firebase/firestore"

import { db } from "../firebase.js";
//import 'moment/locale/es' // Pasar a español fecha

export const dataContext = React.createContext()

const DataProvider = (props) => {


const [cliente, setCliente] = React.useState()
const [pedido, setPedido] = React.useState([])
const [datos, setDatos] = React.useState([]);
const [stateOrder, setStateOrder] = React.useState(false)
const [error, setError] = React.useState(null)
const [modalActive, setModalActive] = React.useState(false)
const [idAction, setIdAction] = React.useState()

const [status, setStatus] = React.useState(0)
const [event, setEvent] = React.useState([]);



 //----------------------- FireStore ------------------
React.useEffect(() => {
    onSnapshot(
      collection(db, "users"),
      (snapshot) => {
        const users = snapshot.docs.map((user) => {
          return { ...user.data(), id: user.id };
        })
        //console.log(orders)
        setDatos(users);
      }
    )

}, [])

React.useEffect(() => {
  onSnapshot(
    collection(db, "sinister"),
    (snapshot) => {
      const events = snapshot.docs.map((event) => {
        return { ...event.data(), id: event.id };
      })
      //console.log(orders)
      setEvent(events);
    }
  )

}, [])

//console.log(event)

 const totalProps = {
     cliente, 
     setCliente, 
     pedido, 
     setPedido, 
     datos, 
     stateOrder, 
     error, 
     idAction,
     status, 
     modalActive,
     setModalActive,
     event
     
 }


return (
<dataContext.Provider value= {totalProps}>
      {props.children}
  </dataContext.Provider>
)
};

export default DataProvider;
