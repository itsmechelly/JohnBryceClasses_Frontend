import axios from "axios";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import ProductModel from "../../../Models/ProductModel";
import globals from "../../../Services/Globals";
import "./AddProduct.css";

function AddProduct(): JSX.Element {

    //ES6
    // const obj = useForm<ProductModel>();
    // const register = obj.register;
    // const handleSubmit = obj.handleSubmit;
    const { register, handleSubmit } = useForm<ProductModel>();
    const history = useHistory();

    async function send(product: ProductModel) {
        try {
            
            //Convert ProductModel to FormData in order to send text + image to the backend:
            const myFormData = new FormData();
            myFormData.append("name", product.name);
            myFormData.append("price", product.price.toString());
            myFormData.append("stock", product.stock.toString());
            myFormData.append("image", product.image.item(0));

            const response = await axios.post<ProductModel>(globals.urls.products, myFormData);
            const addedProduct = response.data;
            alert("Product has been added! id: " + addedProduct.id);
        
            history.push("/products");
        } catch (error) {
            alert("Error...");
        }
    }

    return (
        <div className="AddProduct">
			
            <h2>Add Product</h2>

            <form onSubmit={handleSubmit(send)}>

                <label>Name: </label>
                <br />
                <input type="text" name="name" ref={register} />
                <br />
                <br />

                <label>Price: </label>
                <br />
                <input type="number" step="0.01" name="price" ref={register} />
                <br />
                <br />

                <label>Stock: </label>
                <br />
                <input type="number" name="stock" ref={register} />
                <br />
                <br />

                <label>Image: </label>
                <br />
                <input type="file" name="image" ref={register} accept="image/*" />
                <br />
                <br />

                <button>Add</button>

                <br />
                <br />

            </form>
        </div>
    );
}

export default AddProduct;
