import React from "react";
// react router
import { Link, useNavigate } from "react-router-dom";
// images
import images from "../../constants/images";
//styles
import "./styles.css";
// services
import { authService } from "../../services/auth.service";
// session storage
import { createSessionStorage } from "../../session/session-storage";

const LogIn = ({ handleAuth }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });
  const handleFormData = (key, value) => {
    setFormData((prevData) => ({ ...prevData, [key]: value }));
  };

  const submitLogin = () => {
    const payload = {
      email: formData.email,
      password: formData.password,
    };

    authService
      .login(payload)
      .then((response) => {
        console.log(response);
        if (response && response.data && handleAuth) {
          handleAuth(response.data);
          createSessionStorage(response.data);
          if (response.data.role.toUpperCase() === "ADMIN") navigate("/admin");
          if (response.data.role.toUpperCase() === "STAFF") navigate("/staff");
        }
      })
      .catch((error) => {
        alert(error.message);
      });

      
    console.log("payload", payload);
  };

  return (
    <div className="section-container">
      <div className="section-left">
        <img src={images.loginimg} alt="food img" />
      </div>

      <div className="section-right">
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
            value={formData.email}
            onChange={(e) => handleFormData("email", e.target.value)}
            placeholder="yourname@gmail.com"
          />
        </div>

        <div className="form">
          <label className="login-label">Password</label>
          <input
            className="login-input"
            type="password"
            value={formData.password}
            onChange={(e) => handleFormData("password", e.target.value)}
            placeholder="enter your password"
          />
        </div>
        {/* <div className="forgot-password">
          <a href="">Forgot Password?</a>
        </div> */}
        <div>
          <button className="btnlogin" type="submit" onClick={submitLogin}>
            Log In
          </button>
        </div>
        {/* <div className="link">
          <p>
            Don't have an account?
            <Link to="/sign-up">SignUp</Link>
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default LogIn;
