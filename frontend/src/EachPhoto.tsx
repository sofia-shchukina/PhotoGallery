export default function EachPhoto(props:
                                            {
                                                secure_url: string,
                                            }) {


    return (
        <li key={props.secure_url}>
            <img src={props.secure_url} alt={props.secure_url} width="500"/>
        </li>
    )
}