import { Component } from "react";
import "./Search.css";

interface SearchState {
	textToSearch: string;
}

class Search extends Component<{}, SearchState> {

    public constructor(props: {}) {
        super(props);
        this.state = { textToSearch: "" };
    }

    private setValue = () => {
        alert("test");
    }
    
    public render(): JSX.Element {
        return (
            <div className="Search Box">
				<input type="text" placeholder="search something..."
                    onChange={this.setValue}
                />
            </div>
        );
    }
}

export default Search;
