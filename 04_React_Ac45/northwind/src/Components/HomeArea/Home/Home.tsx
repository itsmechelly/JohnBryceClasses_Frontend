import Desserts from "../Desserts/Desserts";
import Discount from "../Discount/Discount";
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

        </div>
    );
}

export default Home;
