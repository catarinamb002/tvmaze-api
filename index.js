import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import './styles.scss';


export function Show() {
    const { id } = useParams();

    const [show, setShow] = useState([]);

    useEffect(() => {
        async function getShows() {
            const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
            const data = await response.json();
            console.log(data);
            setShow(data);
        }
        getShows();
    }, [show])

    return (
        <>
            <article className="show-container">
                <div className="show-images">
                    <div className="show-image">
                        <img src={show?.image?.medium} />
                    </div>
                </div>
                <div className="show-detail">
                    <div className="show-detail-title">
                        {show.name}
                    </div>
                    <div className="show-detail-subtitle">
                        Summary
                    </div>
                    <div className="show-detail-info">
                        <div>{show?.summary}</div>
                    </div>
                    <div className="show-detail-subtitle">
                        Language
                    </div>
                    <div className="show-detail-info">
                        <div>{show?.language}</div>
                    </div>
                    <div className="show-detail-subtitle">
                        Genres
                    </div>
                    <div className="show-info">
                        <div>{show?.genres}</div>
                    </div>
                    <div className="show-detail-subtitle">
                        Network Name
                    </div>
                    <div className="show-info">
                        <div>{show?.network?.name}</div>
                    </div>
                    <div className="show-detail-subtitle">
                        Status
                    </div>
                    <div className="show-info">
                        <div>{show?.status}</div>
                    </div>
                    <div className="show-detail-subtitle">
                        Premiered
                    </div>
                    <div className="show-info">
                        <div>{show?.premiered}</div>
                    </div>
                    <div className="show-detail-subtitle">
                        Ended
                    </div>
                    <div className="show-info">
                        <div>{show?.ended}</div>
                    </div>
                    <div className="show-detail-subtitle">
                        Average Rating
                    </div>
                    <div className="show-info">
                        <div>{show?.rating?.average}</div>
                    </div>
                    <button>
                        <a href={show?.url}>
                            Find On TVMAZE
                        </a>
                    </button>
                </div>
            </article>
        </>
    )
}