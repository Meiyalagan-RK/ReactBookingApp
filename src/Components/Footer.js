import React from 'react';
import "./Footer.css"


const Footer= ()=>{
    return(
        <>
<footer className="footer shadow-sm" >

<div className="row">

  <div className="col-md-3 col-sm-12">
    <div className="about">
      <ul className="nav-list navbar-nav">
          <h4>BookingMovie</h4>
          <li><a className="nav-item" href="">About us</a></li>
          <li><a className="nav-item"href="">Home</a></li>
          <li><a className="nav-item" href="">Food</a></li>
          <li><a className="nav-item" href="">Orders</a></li>
      </ul>       
  </div>
  </div>

  <div className="col-md-4 col-sm-12">
    <div className="address">
      <ul className="nav-list navbar-nav">
        <h4>Contact</h4>
        <p className="font-weight-bold">Address</p>
        <p><span>email:</span>rkmrk5865@gmail.com</p>
        <p className="text">500, Thirugnanasambandam Rd, Race Course, Gopalapuram, Coimbatore, Tamil Nadu 600080</p>
      </ul>
    </div>
  </div>

  <div className="col-md-5 col-sm-12">

    <div className="s-links d-flex ">
      <ul className="nav-list navbar-nav text-center">
          <h4>Social Links</h4>
          <span className="foot-btn">
              <button type="button" className="btn btn-outline-primary p-2 px-2 m-1"><i className="fa-brands fa-google-play"></i>Download</button>

              <button type="button" className="btn btn-outline-secondary p-2 px-2 m-1"><i className="fa-solid fa-download"></i>Download</button>
          </span>
          
          <span className="foot-logo d-flex">
              <a className="" id="logo" href="#"><i className="fa-brands fa-google-play fa-2x p-3" ></i></a>

              <a id="logo" href="#"><i className="fa-brands fa-instagram fa-2x p-3"></i></a>

              <a id="logo" href="#"><i className="fa-brands fa-whatsapp fa-2x p-3"></i></a>

              <a id="logo" href="#"><i className="fa-brands fa-facebook fa-2x p-3" ></i></a>
          </span>
      </ul>
  </div>
  </div>

</div>

<div className="d-flex flex-column flex-sm-row justify-content-between py-2 my-2 border-top">
    <p>&copy; 2023 Movie ticket Booking. All rights reserved.</p>
</div>

</footer>

        </>
    )
}

export default Footer;