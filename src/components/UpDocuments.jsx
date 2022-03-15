import React, {useState} from "react";
import {Link} from "react-router-dom";
import HeaderBack from "./HeaderBack";
import back from '../images/back.png';
import '../styles/upload.css';
// import camera from "../img/icons/camera.png";
import { app, db} from "../firebase"
import { 
    getStorage, 
    ref, 
    uploadString, 
    uploadBytes,
    getDownloadURL } from 'firebase/storage';
import { 
    getFirestore, 
    collection, 
    addDoc,
    getDocs } from "firebase/firestore"
import { LoginContext } from "../context/LoginProvider";

    // Create a root reference
    const storage = getStorage(app);

const UpDocuments = () => {

    const {uidData} = React.useContext(LoginContext)

   // Guardar nombre de imagen en Firestore
    const saveImageRef = async(data)=> {
    try {
        const docRef = await addDoc(collection(db, 'imagen'), data)

        console.log('Document written with ID: ', docRef.id)
    } catch(e) {
        console.log('Error adding document: ', e)
    }
    }

    const upPhoto = async(e) => {
        try {
        // detectar archivo
        const archivoLocal = e.target.files[0];
        console.log(archivoLocal)
        // cargarlo a firebase storage
        const archivoRef = ref(storage, `${archivoLocal.name}`);
        console.log(archivoRef)

        const snapshot = await uploadBytes(archivoRef, archivoLocal )
        let timestamp = Date.now()
        let fileName = `${timestamp}_${archivoLocal.name}`
            saveImageRef({ 
                uidData,
                name: fileName,
                metadata: {
                    contentType: snapshot.metadata.contentType,
                    size: snapshot.metadata.size,
                    created: snapshot.metadata.timeCreated
                }
            })
        
        }
        catch(e) {
            console.log('Error uploading File: ', e)
        }
        
    } 

    /* // Obtener URL de la imagen desde Storage
    const getFileURL = (e)=> {
        console.log("me traje la foto")
        try {
            const archivoLocal = e.target.files[0];
            const reference = ref(storage, `${archivoLocal.name}`)
            const url = getDownloadURL(reference)

            return url
        } catch(e) {
            console.log('Error getting File URL: ', e)
        }
    } */
    // comentario de prueba
    
    
    return (
        <section className="upload-container">
    
        <div className="back-icon">
        < HeaderBack/>
         <Link to ={"/describe"}>
         <img className= "back" src={back} alt="Home icon" />
         </Link>
         </div>
            <div className= "upload-text text-center">
            <h1>Subir Documentos</h1>
            <p>A continuación, adjunta fotografías del incidente y/o los  archivos que sean pertinentes</p>
            </div>
            <div className="col">
                <div className="mb-3 text-center">
                    <label htmlFor="formFile" className="form-label">Formatos permitidos: JPG y PDF (3 mb máx.)</label>
                    <input className="form-control" type="file" id="formFile" placeholder="Añade archivo" onChange={upPhoto}/>
                </div>
                <div>
            
                </div>
                    
            </div>
            <button type="button" className="btn btn-primary">Subir imagen</button>
            <div className="continue-btn">
            <Link to = "/newcar">
          <button type="button" class="btn btn-dark next-btn">Siguiente</button>
          </Link>
          </div>
            
        </section>
    )
    }

export default UpDocuments;
