import { useForm } from "react-hook-form";
import UserModel from "../../../Models/UserModel";
import "./Register.css";

function Register(): JSX.Element {

    const { register, handleSubmit } = useForm<UserModel>();

    function send(user: UserModel) {
        console.log(user);
    }

    return (
        <div className="Register Box">
            <form onSubmit={handleSubmit(send)}>

                <h2>Register</h2>
                
                <label>First Name: </label><br />
                <input type="text" name="firstName" ref={register} /><br /><br />

                <label>Last Name: </label><br />
                <input type="text" name="lastName" ref={register} /><br /><br />

                <label>UserName: </label><br />
                <input type="text" name="username" ref={register} /><br /><br />

                <label>Password: </label><br />
                <input type="password" name="password" ref={register} /><br /><br />

                <button>Register</button>

            </form>
        </div>
    );
}

export default Register;
