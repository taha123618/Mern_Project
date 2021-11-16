import React, { useEffect, useState } from 'react';
import SignUp from '../Images/SignUp.png';
import { useHistory } from 'react-router-dom';

function About() {

    // useHistory    
    const history = useHistory();

    //   useState
    const [userData, setUserData] = useState({});

    const callAboutpage = async () => {
        try {
            const res = await fetch('/about', {
                // methods ko define kre ge 
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            // checking in router file 
            const data = await res.json();
            console.log(data);
            setUserData(data);
            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }


        } catch (err) {
            console.log(err);
            history.push('/signin');
        }
    }


    useEffect(() => {
        callAboutpage();
    }, []);


    return (
        <>
            {/* 1 */}
            <div className="container mt-5 emp-porofile">
                <form method="GET">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile-img">
                                <img src={SignUp} alt="about img" />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="profile-head">
                                <h5> {userData.name}</h5>
                                <h6> {userData.work} </h6>
                                <p className="mt-3 mb-5 profile-rating">RANKING : <span>1/10</span></p>
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" id="home-tab" data-toggle="tab" href="#home" role="tab">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" id="profile-tab" data-toggle="tab" href="#profile" role="tab">Time Line</a>
                                    </li>


                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <input type="submit" className="profile-edit-btn" value="Edit profile" name="btnAddMore" />
                        </div>

                        {/* 2 */}
                        <div className="row">
                            {/* left side url */}
                            <div className="col-md-4">
                                <div className="profile-work">
                                    <p> Work LINK </p>
                                    <a href="https://tahaportfolio.herokuapp.com/" target="_taha"> PORTFOLIO</a> <br />
                                    <a href="https://tahaportfolio.herokuapp.com/" target="_taha"> PORTFOLIO</a> <br />
                                    <a href="https://tahaportfolio.herokuapp.com/" target="_taha"> PORTFOLIO</a> <br />
                                </div>
                            </div>

                            {/* right side data toggle  */}
                            <div className="pl-5 col-md-8 about-info">
                                <div className="tab-content profile-tab" id="myTabContent">
                                    <div className="tab-pane fade show active " id="home" role="tabpanel" aria-labelledby="home-tab">

                                        <div className="mt-5 row">
                                            <div className="col-md-6">
                                                <label>User Id</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p> 54515230252 </p>
                                            </div>
                                        </div>

                                        <div className="mt-3 row">
                                            <div className="col-md-6">
                                                <label>{userData.name}</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p> Taha Ahmed </p>
                                            </div>
                                        </div>

                                        <div className="mt-3 row">
                                            <div className="col-md-6">
                                                <label>Name</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p> Taha Ahmed </p>
                                            </div>
                                        </div>


                                        <div className="mt-3 row">
                                            <div className="col-md-6">
                                                <label>Name</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p> Taha Ahmed </p>
                                            </div>
                                        </div>


                                        <div className="mt-3 row">
                                            <div className="col-md-6">
                                                <label>Name</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p> Taha Ahmed </p>
                                            </div>
                                        </div>

                                    </div>
                                </div>


                                {/* timeline */}
                                {/* <div className="tab-pane fade show active " id="profile" role="tabpanel" aria-labelledby="profile-tab"> 
<div className="mt-5 row">
         <div className="col-md-6">
             <label>User Id</label>
         </div>
         <div className="col-md-6">
             <p> 54515230252 </p>
         </div>
     </div>

     <div className="mt-3 row">
         <div className="col-md-6">
             <label>User Id</label>
         </div>
         <div className="col-md-6">
             <p> 54515230252 </p>
         </div>
     </div>

     <div className="mt-3 row">
         <div className="col-md-6">
             <label>User Id</label>
         </div>
         <div className="col-md-6">
             <p> 54515230252 </p>
         </div>
     </div>

</div> */}


                            </div>
                        </div>

                    </div>
                </form>
            </div>
        </>
    )
}

export default About
