import EachPhoto from "./EachPhoto";
import {Photo} from "./Photo";
import './PhotoGallery.css';

export default function PhotoGallery(props:
                                             {
                                                 photos: Photo[],
                                             }) {

        return (
                <ul>
                    {props.photos.map(photo =>
                        <EachPhoto key={photo.secure_url}
                                   secure_url={photo.secure_url}/>)}
                        </ul>
    );
}

