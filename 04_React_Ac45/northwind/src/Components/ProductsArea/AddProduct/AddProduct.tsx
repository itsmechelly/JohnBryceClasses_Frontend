import "./AddProduct.css";

function AddProduct(): JSX.Element {
    return (
        <div className="AddProduct">
			
            <h2>Add Product</h2>

            <form>

                <label>Name: </label>
                <br />
                <input type="text" name="name" />
                <br />
                <br />

                <label>Price: </label>
                <br />
                <input type="number" name="price" />
                <br />
                <br />

                <label>Stock: </label>
                <br />
                <input type="number" name="stock" />
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
