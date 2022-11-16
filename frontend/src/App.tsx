import axios from 'axios';
import React, {useEffect, useState} from 'react';
import './App.css';
import {Photo} from "./Photo";
import PhotoGallery from "./Components/PhotoGallery";
import {Button, TextField} from "@mui/material";


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
        <section className="inputsAndButtons">
        <TextField type="file" variant="outlined"
               onChange={(event) => { // @ts-ignore
                   setImageSelected(event.target.files[0]);
               }}/>
        <TextField type="text" value={tag} label="tags" variant="outlined"
               onChange={event => setTag(event.target.value)}
        />
        {tags.join(", ")}
        <Button variant="contained" type="submit" onClick={() => onTagAdd(tag)}>Add tag</Button>
        <Button variant="contained" component="label" onClick={uploadImage}>
            Upload image
        </Button>
    </section>
        <PhotoGallery photos={photos}/>
        </>
    )
}