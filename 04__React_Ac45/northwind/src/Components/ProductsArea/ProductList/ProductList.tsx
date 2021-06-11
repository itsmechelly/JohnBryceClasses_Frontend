import { Component } from "react";
import "./ProductList.css";

interface ProductListState {
	
}

class ProductList extends Component<{}, ProductListState> {

    public constructor(props: {}) {
        super(props);
        this.state = {
			
        };
    }

    public render(): JSX.Element {
        return (
            <div className="ProductList">
				
            </div>
        );
    }
}

export default ProductList;
