// Global context

import React from "react";
import { app } from "../firebase.js";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  //createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  //updateProfile,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

const auth = getAuth(app);

export const LoginContext = React.createContext();

//const provider = new GoogleAuthProvider(app);

const LoginProvider = (props) => {
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [esRegistro, setEsRegistro] = React.useState(false);
  const [uidData, setUid] = React.useState("");

  const [message, setMessage] = React.useState("");


  //const history = useHistory()
  let navigate = useNavigate();

  /*  // crear cuenta con contraseña

  const userRegister = (email, password, name) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: name,
          email: user.email,
          uid: user.uid,
        });
        console.log("usuario creado", user);
        setEmail("");
        setPassword("");
        setName("");
        setError(null);
        //history.push('/role')
        navigate("/role");
      })
      .catch((error) => {
        if (error.code === "auth/admin-restricted-operation") {
          setError("Debes ingresar un correo electrónico válido");
        }

        if (error.code === "auth/email-already-in-use") {
          setError("Esta cuenta ya existe");
        }

        // ..
        console.log(error.code);
      });

  }; */

  // login con cuenta ya creada
  const userLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        if (user) {
          console.log(user);
        } else {
          setError("Recuerda validar tu correo.");
        }
        setEmail("");
        setPassword("");
        setName("");
        setError(null);

        /* setUid(user.uid) */
        //history.push("/role")
        navigate("/home");
      })
      .catch((error) => {
        if (error.code === "auth/missing-email") {
          setError("Este correo no está registrado.");
        }
        if (error.code === "auth/user-not-found") {
          setError("Este usuario no está registrado.");
        }
        if (error.code === "auth/wrong-password") {
          setError("La contraseña no es válida.");
        }

        console.log(error.code);
        // console.log(errorCode + errorMessage);
      });
  };

  const [firebaseUser, setFirebaseUser] = React.useState(false);

  React.useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setFirebaseUser(user);
        setUid(uid);

        // ...
      } else {
        setFirebaseUser(null);
        navigate("/");
      }
    });
  }, []);

  const signOff = () => {
    signOut(auth)
      .then(() => {
        console.log("sesión cerrada");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const resetPassword = (email) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log("contraseña actualizada");
        setMessage("Revisa tu correo para actualizar contraseña.");

        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        if (error.code === "auth/missing-email") {
          setError("Este correo no está registrado.");
        }
        if (error.code === "auth/user-not-found") {
          setError("Este correo no está registrado.");
        }

        // ..
      });
  };

  const totalProps = {
    //userRegister,

    userLogin,
    auth,
    email,
    password,
    setError,
    name,
    setEsRegistro,
    esRegistro,
    setName,
    setPassword,
    error,
    setEmail,
    signOff,
    firebaseUser,
    message,
    resetPassword,
    uidData,
  };

  return (
    <LoginContext.Provider value={totalProps}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
