import React from "react";
import { useState } from "react";
import "./styles.scss";
import { NavLink } from "react-router-dom";
import images from "../../constants/images";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Offcanvas } from "react-bootstrap";



const NavBar = () => {
const [showNavbar, setShowNavbar] = useState(false);

//  const handleShowNavbar = () => {
//      setShowNavbar(!showNavbar);
//    };
  return (
      <>       
    <Navbar  bg="light" className="navbar" expand="lg">
      <Container className="container">
      <div className="logo">
        <img src={images.dineordel1} alt="food img" />
      </div>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`}/>
        <Navbar.Offcanvas id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
              <div className="logo">
        <img src={images.dineordel1} alt="food img" />
      </div>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav>
              <div className={`nav-elements  ${showNavbar && "active"}`}>
                <ul className="nav-col">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/menu">Menu</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/reservation">Reservation</NavLink></li>
                </ul>
              </div>
             </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
    </>
  );
};

export default NavBar;










{/* // <nav className="navbar">
    //   <div className="container">
    //     <div className="logo">
    //       <img src={images.dineordel1} alt="food img" />
    //     </div>
    //     <div className={`nav-elements  ${showNavbar && "active"}`}>
    //       <ul>
    //         <li>
    //           <NavLink to="/">Home</NavLink>
    //         </li>
    //         <li>
    //           <NavLink to="/menu">Menu</NavLink>
    //         </li>
    //         <li>
    //           <NavLink to="/about">About</NavLink>
    //         </li>
    //         <li>
    //           <NavLink to="/reservation">Reservation</NavLink>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav> */}