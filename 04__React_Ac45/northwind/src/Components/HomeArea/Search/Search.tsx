import { Component } from "react";
import "./Search.css";

interface SearchState {

}

class Search extends Component<{}, SearchState> {

    public constructor(props: {}) {
        super(props);
        this.state = {

        };
    }

    public render(): JSX.Element {
        return (
            <div className="Search">
                <input type="text" />
            </div>
        );
    }
}

export default Search;
