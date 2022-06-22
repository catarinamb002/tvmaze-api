import './styles.scss';

export function Search({search}) {
    return (
        <div className="search">
            <form className="search-form">
                <input
                    placeholder="search"
                    type="text"
                    onChange={search}
                />
            </form>
        </div>
    )
}
