import "./Discount.css";

function Discount(): JSX.Element {
    const percent = 10;
    return (
        <div className="Discount Box">
			<p>Only now - {percent}% discount</p>
        </div>
    );
}

export default Discount;
