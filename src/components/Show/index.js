import { Link } from "react-router-dom";

import "./styles.scss";

export function Show({ code, image, name }) {
    return (
        <article className="card">
            <Link to={`/show/${code}`}>
                <div className="card-image"><img src={image} alt={name} /></div>
            </Link>
            <div className="card-title">{name}</div>
        </article>
    )
}