import { useState } from "react";
import "./login.css";
import { FaHandPeace } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const loginHandler = (e) => {
    e.preventDefault();
    if (email === "ann@123" && password === "ann123") {
      navigate("/profile");
    } else {
      toast.error("Invalid login credentials");
    }
  };
  return (
    <div className="outer-main container-fluid">
      <div className="row">
        <div className="col-lg-12 main">
          <h2> Sign in to your account </h2>
          <p>
            to add your task{" "}
            <span style={{ color: "#e0900f" }}>
              <FaHandPeace />
            </span>
          </p>
          <div className="form-div">
            <form className="form-group" onSubmit={loginHandler}>
              <label for="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              ></input>
              <label for="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              ></input>
              <input
                type="checkbox"
                name="remember me"
                className="form-check-input"
                style={{ margin: "12px 10px 20px 0" }}
              ></input>
              <label
                for="rememberme"
                className="form-label"
                style={{ fontWeight: "400", fontSize: "14px" }}
              >
                Remember Me
              </label>
              <div className="d-grid btn-signin">
                <input type="submit" value="Sign In" className="btn"></input>
              </div>
              <p>
                New here? <a href="/"> Register</a>
              </p>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer transition={Zoom} theme="colored" />
    </div>
  );
}
