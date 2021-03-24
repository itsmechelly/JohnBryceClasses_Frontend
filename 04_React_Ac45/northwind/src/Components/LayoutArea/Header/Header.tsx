import Logo from "../Logo/Logo";
import "./Header.css";

function Header(): JSX.Element { //JSX.Element = the component UI
    return (
        <div className="Header">
            <Logo></Logo>
            <h1>Northwind Traders</h1>
        </div>
    );
}

export default Header;