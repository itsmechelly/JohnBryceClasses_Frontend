import axios from "axios";
import { Component, Fragment } from "react";
import { RouteComponentProps } from "react-router";
import { resolveProjectReferencePath } from "typescript";
import ProductModel from "../../../Models/ProductModel";
import "./ProductDetails.css";

//this tells us the params we need for the link 
interface RouteParams {
    id: string;
}

//the props need to extend a generic interface that gets the interface we created above
interface ProductDetailsProps extends RouteComponentProps<RouteParams> {
}

interface ProductDetailsState {
    product: ProductModel;
}

class ProductDetails extends Component<ProductDetailsProps, ProductDetailsState> {

    public constructor(props: ProductDetailsProps) {
        super(props);
        this.state = { product: null };
    }

    //we add this and give it the param id
    //we can see the id in the F12
    public async componentDidMount() {
        try {
            const id = this.props.match.params.id;
            const response = await axios.get<ProductModel>("http://localhost:3030/api/products/" + id);
            this.setState({ product: response.data })
        }
        catch (err) {
            alert("error: " + err.message);
        }
    }

    public render(): JSX.Element {
        return (
            <div className="ProductDetails">

                {/* we do these bellow as conditional rendering - otherwise it's null */}
                {this.state.product &&
                    <Fragment>
                        <h2>Product Details</h2>
                        <h3>Name: {this.state.product.name}</h3>
                        <h3>Price: ${this.state.product.price}</h3>
                        <h3>Stock: {this.state.product.stock}</h3>
                        <img src={"http://localhost:3030/api/products/images/" + this.state.product.imageName} />
                    </Fragment>
                }
            </div>
        );
    }
}

export default ProductDetails;