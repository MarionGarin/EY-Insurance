import React from "react";
import { LoginContext } from "../context/LoginProvider";
import grey_logo from '../images/grey_logo.png'
import '../styles/reset.css';

const ResetPassword = () => {
  const [email, setEmail] = React.useState("");

  const { resetPassword, error, setError, message } = React.useContext(LoginContext);

  const procesarDatos = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      console.log("Debe ingresar el email");
      setError("Debe ingresar el email");
      return;
    }
    setError(null);

    resetPassword(email);
  };

  return (
    
    <div className="reset-container">
       <div className="greyLogo">
      <img className= "grey_logo" src={grey_logo} alt="EY logo in grey color" />
      </div>
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-xl-4">
        
          <form onSubmit={procesarDatos} className="recover-box">
            {error ? <div className="alert alert-danger">{error}</div> : null}
            <input
              type="email"
              className="form-control mb-2 recover-input"
              placeholder="Ingrese Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <button className="btn btn-lg btn-dark btn-block btn-recover" type="submit">
              Recuperar Contraseña
            </button>

          </form>
        </div>
      </div>
    </div>
 
  );
};

export default ResetPassword;
