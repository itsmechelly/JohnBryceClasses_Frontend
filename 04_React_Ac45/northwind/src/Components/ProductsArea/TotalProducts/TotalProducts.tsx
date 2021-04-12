import { Component } from "react";
import store from "../../../Redux/Store";
import "./TotalProducts.css";

interface TotalProductsState {
	count: number;
}

class TotalProducts extends Component<{}, TotalProductsState> {

    public constructor(props: {}) {
        super(props);
        this.state = {count: 0 };
    }

    public componentDidMount(): void {
        store.subscribe(()=>{
            this.setState({count: store.getState().ProductsState.products.length});
        });
    }

    public render(): JSX.Element {
        return (
            <div className="TotalProducts">
				<span>Total Products: {this.state.count}</span>
            </div>
        );
    }
}

export default TotalProducts;
