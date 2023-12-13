import "./signup.css";
import { FaHandPeace } from "react-icons/fa";
import React from "react";

export default function SignUp() {
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
            <form className="form-group">
              <div className="f-names">
                <div style={{ marginRight: "5px" }}>
                  <label for="first-name" className="form-label">
                    First Name <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    className="form-control"
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
                required
              ></input>
              <label for="password" className="form-label">
                Password <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="password"
                className="form-control"
                name="password"
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
