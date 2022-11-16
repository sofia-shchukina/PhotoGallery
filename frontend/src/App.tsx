import axios from 'axios';
import React, {useEffect, useState} from 'react';
import './App.css';
import {Photo} from "./Photo";
import PhotoGallery from "./PhotoGallery";


export default function App() {

    const [photo, setPhoto] = useState<Photo>();
    const [imageSelected, setImageSelected] = useState("");
    const [tags, setTags] = useState<string[]>([]);
    const [tag, setTag] = useState<string>("");

    useEffect(() => {
        savePhotoToDatabase();
    }, [photo])

    const savePhotoToDatabase = () => {
        return axios.post("/photo", photo)
            .then(getAllPhotos);
    };

    const uploadImage = () => {
        const formData = new FormData();
        formData.append("file", imageSelected);
        for (let i = 0; i < tags.length; i++) {
            formData.append('tags[]', tags[i]);
        }
        formData.append("upload_preset", "tutfko7a");
        axios.post("https://api.cloudinary.com/v1_1/day8bokpg/image/upload",
            formData)
            .then(response => response.data)
            .then(setPhoto)
        setTags([]);
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
    const onTagAdd = (tag: string) => {
        setTags([...tags, tag]);
        setTag("");
    }
    return (<>
        <input type="file"
               onChange={(event) => { // @ts-ignore
                   setImageSelected(event.target.files[0]);
               }}/>
        <input type="text" value={tag}
               onChange={event => setTag(event.target.value)}
        />
        {tags.join(", ")}
        <button type="submit" onClick={() => onTagAdd(tag)}>Add tag</button>
        <button onClick={uploadImage}>Upload image</button>
        <PhotoGallery photos={photos}/>
    </>)
}