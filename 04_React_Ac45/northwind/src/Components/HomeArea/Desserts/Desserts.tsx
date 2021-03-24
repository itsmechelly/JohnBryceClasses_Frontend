import "./Desserts.css";

function Desserts(): JSX.Element {

    const items = ["Ice Cream", "Pavlova", "Eclair", "Apple Pie"];

    return (
        <div className="Desserts Box">
            <p>
                Our Desserts:
                { items.map(item => <span> {item} | </span>) }
            </p>
			
        </div>
    );
}

export default Desserts;
