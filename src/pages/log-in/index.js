import React from "react";
// react router
import { Link } from "react-router-dom";
//styles
import "./styles.css";
import images from "../../constants/images";

const LogIn = () => {
  return (
    <div className="section-container">
      <div className="section-left">
        <img src={images.loginimg} alt="food img" />
      </div>

      <div className="section-right">
        <form className="fields">
          <div className="heading">
            <h2>
              <b>Welcome Back</b>
            </h2>
            <p>Please enter your contact details to log in.</p>
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
              placeholder="enter your password"
            />
          </div>
          <div class="forgot-password">
            <a href="">Forgot Password?</a>
          </div>
          <div>
            <button className="btnlogin" type="submit">
              <Link to="/admin">Log In</Link>
            </button>
          </div>
          <div class="link">
            <p>
              Don't have an account?
              <Link to="/sign-up">SignUp</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
