import React from "react";
// react router
import { Link } from "react-router-dom";
//styles
import "./styles.css";
import images from "../../constants/images";

const SignUp = () => {
  return (
    <div className="section-container">
      <div className="section-left">
        <img src={images.loginimg} alt="food img" />
      </div>

      <div className="section-right">
        <form className="fields">
          <div className="heading">
            <h2>
              <b>Create an Account</b>
            </h2>
            <p>Please enter your contact details to Sign Up.</p>
          </div>

          <div className="form">
            <label className="login-label">Name</label>
            <input
              className="login-input"
              type="text"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
              placeholder="yourname"
            />
          </div>
          <div className="form">
            <label className="login-label">Email</label>
            <input
              className="login-input"
              type="email"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
              placeholder="yourname@gmail.com"
            />
          </div>

          <div className="form">
            <label className="login-label">Password</label>
            <input
              className="login-input"
              type="password"
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
              placeholder="create password"
            />
          </div>

          <div>
            <button className="btnlogin" type="submit">
              Sign Up
            </button>
          </div>
          <div className="link">
            <p>
              Already have an account?
              <Link to="/">LogIn</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
