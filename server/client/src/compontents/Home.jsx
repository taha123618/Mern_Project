import React, { useState, useEffect } from 'react';
const Home = () => {

    //   useState
    const [username, setUsername] = useState('');
    const [show, setShow] = useState(false);

    const UserHomePage = async () => {
        try {
            const res = await fetch('/getdata', {
                // methods ko define kre ge 
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            // checking in router file 
            const data = await res.json();
            console.log(data);
            setUsername(data.name);
            setShow(true);

        } catch (err) {
            console.log(err);
            // history.push('/signin');
        }
    }


    useEffect(() => {
        UserHomePage();
    }, [])

    return (
        <>
            <div class="mt-5 containerfluid">
                <div class="row">
                    <div class="mx-auto col-md-10 col-12">
                        <div class="row">
                            {/* {{!-- 6-6 gap  --}} */}
                            {/* {{!-- left side  --}} */}
                            <h2> {show ? 'Happy to see You back' : 'We Are The MERN Developers'}</h2>
                            <div class="order-1 col-md-6 col-12 hero-text order-md-0 d-flex justify-content-cenetr align-items-start flex-column">
                                <h1> We Will Help You To</h1>
                                <h1> Grow Your Business </h1>
                                <p> We are the team of <span class="bold-style"> professional Developer 👍</span></p>
                                <button class="btn-style"> Read-More</button>
                            </div>
                            {/* {{!-- right side  --}} */}
                            <div class="order-0 col-md-6 col-12 hero-text order-md-1">
                                <figure>
                                    <img src="images/growth.svg" alt="hero-section" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home;
