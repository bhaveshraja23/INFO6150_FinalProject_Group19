import React from 'react'
import "./styles.scss";
import NavBar from '../../../components/navbar/NavBar';
import images from "../../../constants/images";
import Footer from '../../../components/footer/footer';


const reservation = () => {
  return (
    <div>
      < NavBar />

      <div className='reserve-table'>
        <div className='reserve-form'>
        <div className="heading">
          <h3>
            <b>Reserve your table</b>
          </h3>
          <p>Book your table for hassle-free dining</p>
        </div>
          <div className='form'>
            <div className="form-item">
              <label className="form-label">Name</label>
              <input
                className="login-input"
                type="text"
                placeholder="Your name"
              />
            </div>
            <div className="form-item">
              <label className="form-label">Date</label>
              <input
                className="login-input"
                type="text"
                placeholder="Select Date"
              />
            </div>
            <div className="form-item">
              <label className="form-label">Time</label>
              <input
                className="login-input"
                type="text"
                placeholder="Select Time"
              />
            </div>
            <div className="form-item">
              <label className="form-label">No.of People</label>
              <input
                className="login-input"
                type="text"
                placeholder="pax"
              />
            </div>
            <div>
            <button className="btnlogin" type="submit">
            Reserve Now
            </button>
        </div>
          </div>
        </div>
        <div className='table-img'>
          <img src={images.table} alt="food img" />
        </div>
      </div>

      <div className='footer'>
        <Footer />
      </div>
    </div>
  )
}

export default reservation
