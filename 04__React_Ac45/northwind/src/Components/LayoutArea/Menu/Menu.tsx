import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
            <nav>
                <NavLink to="/home" exact>Home</NavLink>
                <NavLink to="/products" exact>products</NavLink>
                <NavLink to="/about" exact>about</NavLink>
                <NavLink to="/contact-us" exact>contact-us</NavLink>
            </nav>
        </div>
    );
}

export default Menu;