import Details from "../Details/Details";
import Header from "../Header/Header";
import Skills from "../Skills/Skills";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header>
                <Header />
            </header>
            <main>
                <Details />
            </main>
            <main>
                <Skills />
            </main>
        </div>
    );
}

export default App;
