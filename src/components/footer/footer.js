import React from "react";
import "./styles.scss";
import images from "../../constants/images";
import { Link } from "react-router-dom";

const footer = () => {
  return (
    <div>
      <div className="footer-basic">
        <footer>
          <div className="social">
            <img src={images.dineordel1} alt="food img" />
          </div>
          {/* <div className="social"><a href="#"><i className="icon ion-social-instagram"></i></a><a href="#"><i className="icon ion-social-snapchat"></i></a><a href="#"><i className="icon ion-social-twitter"></i></a><a href="#"><i className="icon ion-social-facebook"></i></a></div> */}
          <ul className="list-inline">
            <li className="list-inline-item">
              <Link to="/menu" className="link">
                Menu
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="/about" className="link">
                About
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="/reservation" className="link">
                Reserve
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="/log-in" className="link">
                Admin
              </Link>
            </li>
          </ul>
          <p className="copyright">Dineordel © 2023</p>
        </footer>
      </div>
    </div>
  );
};

export default footer;
