import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="./">
                <button className="homeButton btn btn-primary">Home</button>
            </Link>
            <div>
                <img src="" alt="" />
            </div>
            <Link to="./favorites">
                <button className="favoritesButton btn btn-primary">Favorites</button>
            </Link>
        </div>
    )
};