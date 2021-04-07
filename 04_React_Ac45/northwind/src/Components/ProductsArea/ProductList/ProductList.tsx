import axios from "axios";
import { Component } from "react";
import ProductModel from "../../../Models/ProductModel";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";

interface ProductListState {
    products: ProductModel[];
}

class ProductList extends Component<{}, ProductListState> {

    public constructor(props: {}) {
        super(props);
        this.state = { products: [] };
    }

    public async componentDidMount() {
        try {
            const response = await axios.get<ProductModel[]>("http://localhost:3030/api/products");//הפקודה הזו תמתין אך הדפדפן לא יתקע
            this.setState({ products: response.data });
        } catch (err) {
            alert("Error: " + err.message);
        }

    }

    public render(): JSX.Element {
        return (
            <div className="ProductList">

                <h2>Here are our {this.state.products.length}</h2>
                
                    {this.state.products.map(p => <ProductCard key={p.id} product={p} />)}

            </div>
        );
    }
}

export default ProductList;
