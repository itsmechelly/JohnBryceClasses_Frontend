import ContactUs from "../../ContactUsArea/ContactUs/ContactUs";
import Home from "../../HomeArea/Home/Home";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import "./Layout.css";

function Layout(): JSX.Element { //JSX.Element = the component UI
    return (
        <div className="Layout">

            <header>
                <Header></Header>
            </header>

            <aside>
                <Menu></Menu>
            </aside>

            <main>
                {/* <Home></Home> */}
                <ContactUs></ContactUs>
            </main>

            <footer>
                <Footer></Footer>
            </footer>

        </div>
    );
}

export default Layout;