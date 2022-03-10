import React from "react";
import { LoginContext } from "../context/LoginProvider";
import { Link } from "react-router-dom";
import "../styles/login.css";
import white_logo from "../images/white_logo.png";

const Login = () => {

  const {
    email,
    setError,
    password,
    userLogin,
    setPassword,
    error,
    setEmail,
    message,
  } = React.useContext(LoginContext);


    const loginCount = (e) => {
        e.preventDefault();
        if (!email.trim() || !password.trim()) {
        console.log("Debe ingresar el email");
        setError("Debe ingresar el email");
        return;
        }
        if (!password.trim()) {
        console.log("Datos vacíos pass!");
        setError("Datos vacíos pass!");
        return;
        }
        if (password.length < 6) {
        console.log("6 o más carácteres");
        setError("La contraseña debe tener como mínimo 6 caracteres");
        return;
        }
        // console.log("Registro exitoso");
        setError(null);
        userLogin(email, password);
    };

  return (
    <section className="login-container">
      <div className="whiteLogo">
        <img
          className="white_logo"
          src={white_logo}
          alt="EY logo in white color"
        />
      </div>
      <div className="mt-5">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-8 col-md-6 col-xl-4">
            <form onSubmit={loginCount} className="login-box">
              {message ? (
                <div className="alert alert-danger">{message}</div>
              ) : null}

              {error ? <div className="alert alert-danger">{error}</div> : null}
              <input
                type="email"
                className="form-control mb-2 email-input"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <input
                type="password"
                className="form-control mb-2 password-input"
                placeholder="Contraseña"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <div className="text-center">
                <button
                  className="btn btn-lg btn-dark btn-block btn-session"
                  type="submit"
                >
                  Iniciar sesión
                </button>
              </div>
              <Link to={`/reset`}>
                <p
                  type="button"
                  className="text-center mt-3 get-password get-password"
                >
                  Recuperar Contraseña
                </p>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
