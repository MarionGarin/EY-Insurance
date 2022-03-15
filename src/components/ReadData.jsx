import React from "react";
import { dataContext } from "../context/DataProvider";
import { LoginContext } from "../context/LoginProvider";
import { Link } from "react-router-dom";

const ReadData = () => {
  const { datos } = React.useContext(dataContext);
  const { uidData } = React.useContext(LoginContext);
  //console.log(datos)
  console.log(uidData)

  return (
    <div className="mt-5">
      <h1> ReadData </h1>

      {
      datos.filter((e) => e.uid === uidData)
      .map((item, id) => (
        <p key={id} className="mt-3">
          {" "}
          {item.nombre} {item.apellidos}{" "}
        </p>

      ))}

      <Link to={`/`}>
        <p type="button" className="text-center mt-3">
          Volver
        </p>
      </Link>
    </div>
  );
};

export default ReadData;
