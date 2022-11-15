import axios from 'axios';
import React, {useState} from 'react';
import './App.css';
import {Photo} from "./Photo";

export default function App() {

   const [photo, setPhoto] = useState<Photo>();


    const [imageSelected, setImageSelected] = useState("");
    const uploadImage = () => {
            const formData = new FormData();
            formData.append("file", imageSelected);
            formData.append("upload_preset", "tutfko7a");
            axios.post("https://api.cloudinary.com/v1_1/day8bokpg/image/upload",
                formData)
                .then((response) => {
                    setPhoto( response.data)
                });
            return axios.post("/photo", photo);
    };


  return (
      <>
   <input type="file"
         onChange={(event) => { // @ts-ignore
             setImageSelected(event.target.files[0]);
         }}/>
          <button onClick={uploadImage}>Upload image</button>
      </>
  );
}

