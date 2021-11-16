import React, { useState } from 'react';
import SignUp from '../Images/SignUp.png';
import { NavLink, useHistory } from 'react-router-dom';

const Register = () => {

    const history = useHistory();
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        work: "",
        password: "",
        cpassword: ""
    });

    const handleInputs = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        setUser({ ...user, [name]: value });

    }

    // conecting FrontEnd in to Backend 

    // handleInputs ka data ab ham database base ma bhijrhe ha 
    const PostData = async (event) => {
        try {
            event.preventDefault();
            const { name, email, phone, work, password, cpassword } = user;
            // fetch api to backend
            const res = await fetch("/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name, email, phone, work, password, cpassword
                })
            });

            const data = await res.json();
            if (data.status === 422 || !data) {
                console.log("Invalid registration")
            } else {
                window.alert("registration Successfully")
                console.log("registration Successfully")
            }
            history.pushState("/register")

        } catch (err) {
            console.log(err)
        }
    }




    return (
        <>

            <section className="signup">
                <div className="container mt-5">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title"> Sign Up </h2>
                            <form method="POST" className="register-form" id="register-form">

                                <div className="form-group">
                                    <label htmlFor="name">
                                        <i class="zmdi zmdi-assignment-account"></i>
                                    </label>
                                    <input type="text" name="name" id="name" autoComplete="off"
                                        value={user.name} onChange={handleInputs} placeholder="your name" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">
                                        <i class="zmdi zmdi-email"></i>
                                    </label>
                                    <input type="text" name="email" id="email" autoComplete="off"
                                        value={user.emai} onChange={handleInputs} placeholder="your name" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">
                                        <i class="zmdi zmdi-phone-in-talk"></i>
                                    </label>
                                    <input type="Number" name="phone" id="phone" autoComplete="off"
                                        value={user.phone} onChange={handleInputs} placeholder=" Enter your Number" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="work">
                                        <i class="zmdi zmdi-slideshow"></i>
                                    </label>
                                    <input type="text" name="work" id="work" autoComplete="off"
                                        value={user.work} onChange={handleInputs} placeholder="Enter your Work" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password">
                                        <i class="zmdi zmdi-Lock"></i>
                                    </label>
                                    <input type="password" name="password" id="password" autoComplete="off"
                                        value={user.password} onChange={handleInputs} placeholder="Enter Your Password" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="cpassword">
                                        <i class="zmdi zmdi-Lock"></i>
                                    </label>
                                    <input type="cpassword" name="cpassword" id="cpassword" autoComplete="off"
                                        value={user.cpassword} onChange={handleInputs} placeholder=" Confirm Password" />
                                </div><br />
                                <div className="form-group form-button ">
                                    <input type="submit" name="signup" id="signup" className="form-submit"
                                        value="register" onClick={PostData} />
                                </div>

                            </form>

                            {/* img  */}
                            <div className="signup-image">
                                <figure>
                                    <img src={SignUp} alt="SignUp" />
                                </figure>
                                <NavLink to="/signin" className="signup-image-link"> I am already register</NavLink>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}

export default Register;
