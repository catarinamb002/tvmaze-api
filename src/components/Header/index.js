import { Link } from "react-router-dom";
import "./styles.scss";

export function Header() {
    return (
        <header>
            <div className="logo">
                <Link to="/">
                    Shows
                </Link>
            </div>
        </header>
    )
}