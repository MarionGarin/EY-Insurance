import React from 'react'
import HeaderBack from './HeaderBack'
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
  getDocs,
  doc,
  updateDoc } from "firebase/firestore"
  import { app, db} from "../firebase"

const DescribeSinister = () => {

  const [describe, setDescribe] = React.useState('')

  // Función para crear la colección post
  const addPost = async (variable) => {
  try {
    const docRef = await addDoc(collection(db, 'users'), {
      describe: variable,
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}; 

const idDoc = 'fM4M8KWzCqQw7ID5hZTTkxVEBeJ3'
const statusChange = async (variable) => {
  const postEdit = doc(db, 'users', idDoc);
  await updateDoc(postEdit, {
      describe: variable,
  });
};


  return (
    <div>
      < HeaderBack/>
    
      <div className="container mt-3">
  <h2>Describe el suceso</h2>
  <p> Escribe un breve relato de los hechos, empleando un máximo de 154 caracteres. </p>
  <form action="/action_page.php">
    <div className="mb-3 mt-3">
      <textarea className="form-control" rows="5" id="comment" name="text" value = {describe} onChange= {(e)=> setDescribe( e.target.value)}></textarea>
    </div>
    <button type="button" className="btn btn-primary" onClick={(e) => statusChange(describe)}>Siguiente</button>
  </form>
</div>
    
    </div>
  )
}

export default DescribeSinister