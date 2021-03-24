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

class Bestseller extends Component<{}, BestsellerState> {

    public constructor(props: {}) {
        super(props);
        this.state = { item: "" , price: 0}; //Initializing the state - can be done only here!
    }

    private showItem = () => {
        //setState here is a-synchronic!
        this.setState({ item: "Irish Coffee", price: 22 });
    }

    public render(): JSX.Element {
        return (
            <div className="Bestseller Box">
                <button onClick={this.showItem}>Bestseller Product</button>
                <span>{this.state.item}, price: {this.state.price}</span>
            </div>
        );
    }
}

export default Bestseller;
