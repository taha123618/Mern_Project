import React, { useContext, useState } from 'react';
import Signin from '../Images/SignUp.png';
import { useHistory } from 'react-router';
import { UserContext } from '../App';


const Login = () => {

    const { state, dispatch } = useContext(UserContext);

    const history = useHistory();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    //  fetch into backend
    const LoginUser = async (e) => {
        e.preventDefault();
        const res = await fetch('/signin', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        });
        const data = res.json();

        if (res.status === 400 || !data) {
            window.alert("Invalid Credentials")
        } else {
            dispatch({ type: "USER", payload: true });
            window.alert("Login Successfully")
            history.push("/")
        }





    }

    return (
        <>

            <section className="sign-in">
                <div className="container mt-5">
                    <div className="signin-content">
                        {/* img  */}
                        <div className="signup-image">
                            <figure>
                                <img src={Signin} alt="SignUp" />
                            </figure>
                        </div>

                        <div className="signup-form">
                            <h2 className="form-title"> Login </h2>
                            <form method="POST" className="register-form" id="register-form">


                                <div className="form-group">
                                    <label htmlFor="email">
                                        <i class="zmdi zmdi-email"></i>
                                    </label>
                                    <input type="text" name="email" id="email" autoComplete="off"
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                        }}
                                        placeholder="Enter Your Email" />
                                </div>


                                <div className="form-group">
                                    <label htmlFor="password">
                                        <i class="zmdi zmdi-eye-off"></i>
                                    </label>
                                    <input type="password" name="password" id="password" autoComplete="off"
                                        value={password}
                                        onChange={(e) => {
                                            setPassword(e.target.value);
                                        }}
                                        placeholder="Enter Your Password" />
                                </div>

                                <div className="form-group form-button">
                                    <input type="submit" name="signin" id="signin" className="form-submit"
                                        value="Log In" onClick={LoginUser} />
                                </div>

                            </form>


                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}

export default Login;
