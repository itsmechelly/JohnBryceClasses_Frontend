import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
            <nav>
                <a href="#">Home</a>
                <a href="#">Products</a>
                <a href="#">About</a>
            </nav>
        </div>
    );
}

export default Menu;