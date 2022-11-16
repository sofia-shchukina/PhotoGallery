import EachPhoto from "./EachPhoto";
import {Photo} from "../Photo";
import './PhotoGallery.css';

export default function PhotoGallery(props:
                                             {
                                                 photos: Photo[],
                                             }) {

        return (
                <ul className="gallery">
                    {props.photos.map(photo =>
                        <EachPhoto key={photo.secure_url}
                                   tags={photo.tags}
                                   secure_url={photo.secure_url}/>)}
                        </ul>
    );
}

