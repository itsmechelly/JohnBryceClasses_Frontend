import { Component } from "react";
import "./Clock.css";

interface ClockState {
	
}

class Clock extends Component<{}, ClockState> {

    // 1st Lifecycle Hooks -> react creates an object from this class
    //usage: init state, send props to super class
    public constructor(props: {}) {
        super(props);
        this.state = {
			
        };
    }

    public render(): JSX.Element {
        return (
            <div className="Clock Box">
				<p>10:00:00</p>
            </div>
        );
    }
}

export default Clock;
