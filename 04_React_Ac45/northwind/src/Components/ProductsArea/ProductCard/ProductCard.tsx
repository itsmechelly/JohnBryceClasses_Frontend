import ProductModel from "../../../Models/ProductModel";
import "./ProductCard.css";

interface ProductCardProps {
	product: ProductModel;
}

function ProductCard(props: ProductCardProps): JSX.Element {
    return (
        <div className="ProductCard Box">
			
            <div>
                {props.product.name} <br />
                Price: ${props.product.price} <br />
                Stock: ${props.product.stock}
            </div>

            <div>
                <img src={"http://localhost:3030/api/products/images/" + props.product.imageName} />
            </div>

        </div>
    );
}

export default ProductCard;
