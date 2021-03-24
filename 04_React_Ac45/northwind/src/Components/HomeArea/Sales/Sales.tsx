import { isPropertySignature } from "typescript";
import "./Sales.css";

interface SalesProps { 
    category?: string; // ? = optional argument
    percent: number;
}

function Sales(props: SalesProps): JSX.Element {
    return (
        <div className="Sales Box">
            <p>

                {/* Conditional Rendering */}
                Sale: {props.percent}% discount on all {props.category || "products"}!

                {/* Ternary Operator */}
                {/* Sale: {props.percent}% discount on all {props.category ? props.category : "products"}! */}
           
            </p>
        </div>
    );
}

export default Sales;
