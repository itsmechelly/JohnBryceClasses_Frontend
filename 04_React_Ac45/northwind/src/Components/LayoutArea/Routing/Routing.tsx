import { Redirect, Route, Switch } from "react-router-dom";
import About from "../../AboutArea/About/About";
import ContactUs from "../../ContactUsArea/ContactUs/ContactUs";
import Home from "../../HomeArea/Home/Home";
import ProductList from "../../ProductsArea/ProductList/ProductList";
import Page404 from "../../SharedArea/Page404/Page404";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<Switch>
                <Redirect path="/" to="/home" exact/>
                <Route path="/home" component={Home} exact/>
                <Route path="/products" component={ProductList} exact/>
                <Route path="/about" component={About} exact/>
                <Route path="/contact-us" component={ContactUs} exact/>
                <Route component={Page404}/> {/* Must be last */}
            </Switch>
        </div>
    );
}

export default Routing;
