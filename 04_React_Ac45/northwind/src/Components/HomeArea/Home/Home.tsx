import Bestseller from "../Bestseller/Bestseller";
import Clock from "../Clock/Clock";
import Desserts from "../Desserts/Desserts";
import Discount from "../Discount/Discount";
import Recommended from "../Recommended/Recommended";
import Sales from "../Sales/Sales";
import Search from "../Search/Search";
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
            <Sales percent={10}></Sales> {/*Sales.tsx -> category?: string;  ? = optional argument*/}

            {/* Events */}
            <Recommended></Recommended>

            {/* State */}
            <Bestseller></Bestseller>

            {/* Two Ways Binding */}
            <Search></Search>

            {/* Lifecycle Hooks */}
            <Clock></Clock>
        </div>
    );
}

export default Home;
