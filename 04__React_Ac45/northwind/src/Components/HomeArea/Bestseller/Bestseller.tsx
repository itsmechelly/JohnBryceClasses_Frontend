import { Component } from "react";
import "./Bestseller.css";

//goes with....
// interface BestSellerProps{}

interface BestsellerState {
    item: string;
    price: number;
}

//goes with....
//class Bestseller extends Component<{}, BestsellerState> {}

class Bestseller extends Component {

    public render(): JSX.Element {
        return (
            <div className="Bestseller">
				
            </div>
        );
    }
}

export default Bestseller;
