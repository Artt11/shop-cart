import { Link } from "react-router-dom";
import "./navigate.css";

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="links">
                <Link to="/">Shop</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/cart">Basket</Link>
            </div>
        </div>
    )
}