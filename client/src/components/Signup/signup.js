import "./signup.css";
import { FaHandPeace } from "react-icons/fa";
import React, { useState } from "react";
import AXIOS from "axios";

export default function SignUp() {
     const [fname,setFname]=useState('');
     const [lname,setLname] = useState('')
     const [email,setEmail] = useState('')
     const [password,setPassword] = useState ('')
 const handleSubmit = (e) => {
    e.preventDefault();
    const url="http://localhost:9000/api/signup"
    AXIOS.post(url,{fname,lname,email,password})
  };

  return (
    <div className="outer-main container-fluid">
      <div className="row">
        <div className="col-lg-12 main">
          <h2> Sign Up </h2>
          <p>
            to make your time productive{" "}
            <span style={{ color: "#e0900f" }}>
              <FaHandPeace />
            </span>
          </p>
          <div className="form-div">
            <form className="form-group" onSubmit={handleSubmit}> 
              <div className="f-names">
                <div style={{ marginRight: "5px" }}>
                  <label for="first-name" className="form-label">
                    First Name <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    className="form-control"
                    onChange={(e)=>setFname(e.target.value)}
                    required
                  ></input>
                </div>
                <div>
                  <label for="last-name" className="form-label">
                    Last Name <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    className="form-control"
                    onChange={(e)=>setLname(e.target.value)}
                    required
                  ></input>
                </div>
              </div>
              <label for="email" className="form-label">
                Email Address <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                onChange={(e)=>setEmail(e.target.value)}
                required
              ></input>
              <label for="password" className="form-label">
                Password <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={(e)=>setPassword(e.target.value)}
                required
              ></input>
              <div className="d-grid btn-signin">
                <input type="submit" value="Sign In" className="btn"></input>
              </div>
              <p>
                Already a user? <a href="/login">Login</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
