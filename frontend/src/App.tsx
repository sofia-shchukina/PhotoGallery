import axios from 'axios';
import React, {useEffect, useState} from 'react';
import './App.css';
import {Photo} from "./Photo";
import PhotoGallery from "./PhotoGallery";


export default function App() {

    const [photo, setPhoto] = useState<Photo>();
    const [imageSelected, setImageSelected] = useState("");

    useEffect(() => {
        savePhotoToDatabase()
    }, [photo])

    const savePhotoToDatabase = () => {
        return axios.post("/photo", photo)
            .then(getAllPhotos);
    };

    const uploadImage = () => {
        const formData = new FormData();
        formData.append("file", imageSelected);
        formData.append("upload_preset", "tutfko7a");
        axios.post("https://api.cloudinary.com/v1_1/day8bokpg/image/upload",
            formData)
            .then(response => response.data)
            .then(setPhoto);
    };

    useEffect(() => {
        getAllPhotos()
    }, [])
    const [photos, setPhotos] = useState<Photo[]>([]);

    const getAllPhotos = () => {
        axios.get("/photo")
            .then(response => response.data)
            .then(setPhotos)
    }
    return (
        <>
            <input type="file"
                   onChange={(event) => { // @ts-ignore
                       setImageSelected(event.target.files[0]);
                   }}/>
            <button onClick={uploadImage}>Upload image</button>
            <PhotoGallery photos={photos}/>
        </>
    );
}

