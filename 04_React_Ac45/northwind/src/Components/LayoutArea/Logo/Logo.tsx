import "./Logo.css";
import logoImage from "../../../Assets/Images/logo.jpg";
import { Component } from "react";

// function Logo(): JSX.Element {
//     return (
//         <div className="Logo">
// 			<img src={logoImage}/>
//         </div>
//     );
// }

    class Logo extends Component {
        public render(): JSX.Element {
            return (
                <div className="Logo">
		        	<img src={logoImage}/>
                </div>
            );
        }
    }

export default Logo;
