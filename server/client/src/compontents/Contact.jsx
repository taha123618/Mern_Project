import React, { useState, useEffect } from 'react'

function Contact() {
  //   useState
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const UserContact = async () => {
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
      setUserData({
        ...userData,
        name: data.name,
        email: data.email,
        phone: data.phone
      });

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }


    } catch (err) {
      console.log(err);
      // history.push('/signin');
    }
  }


  useEffect(() => {
    UserContact();
  }, []);


  // we are storing data in states 

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
  }

  setUserData({ ...userData, name: 'value' })


  // send the data to backend 

  const contactform = async (e) => {
    e.preventDefault();

    const { name, email, phone, message } = userData;

    // ab data backend ma bhijna ha 
    // call the fetch api
    const res = await fetch('/contact', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, phone, message
      })

    });

    const data = await res.json();

    if (!data) {
      console.log("message not send");
    } else {
      alert("Message Send");
      setUserData({ ...userData, message: "" })
    }

  }



  return (
    <>
      <h1 className="mt-4 text-center">Get in Touch</h1>

      <div className="container">
        <form method="POST" id="contact_form">
          <div className="form-group">
            <label for="exampleInputEmail1">Your Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={userData.name}
              name="name"
              onChange={handleInput}
              placeholder="Enter Your Name"
            />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={userData.email}
              name="email"
              onChange={handleInput}
              placeholder=" Enter Your Email"
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Your Phone</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              value={userData.phone}
              name="phone"
              onChange={handleInput}
              placeholder=" Enter Your Phone No"
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Your Message</label>
            <textarea
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Message"
              // value={userData.}
              name="message"
            ></textarea>
          </div>

          <div className="text-center">
            <button type="submit" className="m-4 btn btn-primary" onClick={contactform}>
              Send Message
            </button>
          </div>
        </form>
      </div>

    </>
  )
}

export default Contact
