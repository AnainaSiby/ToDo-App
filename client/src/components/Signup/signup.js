import "./signup.css";
import { FaHandPeace } from "react-icons/fa";
import React, { useState } from "react";
import AXIOS from "axios";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e)=>{
    e.preventDefault();
   const url = "http://localhost:9000/api/signup";
    AXIOS.post(url,{fname,lname,email,password}).then((res)=>{
      var stat = res.data.status;
      if(stat){
        alert(res.data.msg)
        setFname("");
      setLname("")
      setEmail("")
      setPassword("")
      navigate('/login')
      }else{
      alert(res.data.msg) 
      }
    })
  };
  return (
    <div className="outer-main container-fluid">
      <div className="row">
        <div className="col-lg-12 main-div">
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
                  <label className="form-label">
                    First Name <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    className="form-control"
                    onChange={(e)=>setFname(e.target.value)}
                    value={fname}
                  ></input>
                </div>
                <div>
                  <label className="form-label">
                    Last Name <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    className="form-control"
                    onChange={(e)=>setLname(e.target.value)}
                    value={lname}
                  ></input>
                </div>
              </div>
              <label className="form-label">
                Email Address <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                onChange={(e)=>setEmail(e.target.value)}
                value={email}
              ></input>
              <label className="form-label">
                Password <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={(e)=>setPassword(e.target.value)}
                value={password}
                required
              ></input>
              <div className="d-grid btn-signin">
                <input type="submit" value="Sign Up" className="btn"></input>
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
