import React from 'react'
import "./styles.scss";
import images from "../../constants/images";
import { Link } from 'react-router-dom';

const footer = () => {
  return (
    <div>
      <div class="footer-basic">
        <footer>
            <div className='social'><img src={images.dineordel1} alt="food img" /></div>
            {/* <div class="social"><a href="#"><i class="icon ion-social-instagram"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-facebook"></i></a></div> */}
            <ul class="list-inline">
                <li class="list-inline-item">
                    <Link to="/menu" className="link">
                        Menu
                    </Link>
                </li>
                <li class="list-inline-item">
                    <Link to="/about" className="link">
                        About
                    </Link>
                </li>
                <li class="list-inline-item">
                    <Link to="/reservation" className="link">
                        Reserve
                    </Link>
                </li>
                <li class="list-inline-item">
                    <Link to="/log-in" className="link">
                        Admin
                    </Link>
                </li>
            </ul>
            <p class="copyright">Dineordel © 2023</p>
        </footer>
    </div>
    </div>
  )
}

export default footer
