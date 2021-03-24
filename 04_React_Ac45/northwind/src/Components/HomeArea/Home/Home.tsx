import Desserts from "../Desserts/Desserts";
import Discount from "../Discount/Discount";
import Sales from "../Sales/Sales";
import Specials from "../Specials/Specials";
import "./Home.css";

function Home(): JSX.Element {
    return (
        <div className="Home">

            <p>This is Home...</p>
            
            {/* Interpolation */}
			<Discount></Discount>

            {/* Conditional Rendering */}
            <Specials></Specials>

            {/* Displaying Lists */}
            <Desserts></Desserts>

            {/* Props */}
            <Sales category="Beverages" percent={20}></Sales>
            <Sales category="Fruits" percent={5}></Sales>
            <Sales percent={10}></Sales>

        </div>
    );
}

export default Home;
