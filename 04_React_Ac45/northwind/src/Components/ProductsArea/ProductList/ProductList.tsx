import { AddBox } from "@material-ui/icons";
import axios from "axios";
import { Component } from "react";
import { NavLink } from "react-router-dom";
import ProductModel from "../../../Models/ProductModel";
import globals from "../../../Services/Globals";
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
            // const response = await axios.get<ProductModel[]>("http://localhost:3030/api/products");//הפקודה הזו תמתין אך הדפדפן לא יתקע
            const response = await axios.get<ProductModel[]>(globals.urls.products);//הפקודה הזו תמתין אך הדפדפן לא יתקע
            this.setState({ products: response.data });
        } catch (err) {
            alert("Error: " + err.message);
        }

    }

    public render(): JSX.Element {
        return (
            <div className="ProductList">
                
                <NavLink to="/products/new" exact>
                    <AddBox />
                </NavLink>
                
                {this.state.products.map(p => <ProductCard key={p.id} product={p} />)}

            </div>
        );
    }
}

export default ProductList;
