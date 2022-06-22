import { useEffect, useState } from "react";
import { Search } from "../../components/Search";
import { Show } from "../../components/Show";

import "./styles.scss";

export function Home() {
    const [shows, setShows] = useState([]);
    const [search, SetSearch] = useState("");

    useEffect(() => {
        async function getShows() {
            const response = await fetch('https://api.tvmaze.com/shows');
            const data = await response.json();
            setShows(data);
        }
        getShows();
    }, []);

    const filteredShows = shows.filter(show => show.name.toLowerCase().includes(search))

    function getSearchValue(e) {
        e.preventDefault()
        SetSearch(e.target.value.toLowerCase())
    }

    return (
        <main className="home">
            <Search
                search={getSearchValue}
            />
            <div className="container">
                {filteredShows.map(show =>
                    <Show
                        key={show.id}
                        code={show.id}
                        image={show.image.medium}
                        name={show.name}
                    />
                )}
            </div>
        </main>
    )
}