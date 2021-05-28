import Logo from "../Logo/Logo";
import "./Header.css";

function Header(): JSX.Element {
    return (
        <div className="Header">
            <Logo />
            <h1>Northwind Threaders</h1>
        </div>
    );
}

export default Header;