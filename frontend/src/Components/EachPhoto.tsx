import './EachPhoto.css';
export default function EachPhoto(props:
                                            {
                                                secure_url: string,
                                                tags: string[],
                                            }) {

    return (
        <li key={props.secure_url} className="container">
            <img src={props.secure_url} alt={props.secure_url}/>
            {props.tags!==null? <div className="bottom-left">{props.tags.join(", ")}</div>: <></>}
        </li>
    )
}