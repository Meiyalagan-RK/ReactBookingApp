import React from 'react';
import './Header.css'


const Header= ()=>{
    return(
        <>
       

       <nav className="navbar navbar-expand-lg head-contain">
  
  <div className="container-fluid">
    <a className="navbar-brand head-logo" href="./index.html">Booking<span>Movie</span></a>

    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="head-item" aria-current="page" href="./index.html">Home</a>
        </li>
        <li className="nav-item">
          <a className="head-item" href="./movie.html">Movies</a>
        </li>
        <li className="nav-item">
          <a className="head-item" href="./theaters.html">Theatres</a>
        </li>
      </ul>
      <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="head-item" aria-current="page" href="./signup.html">SignUp</a>
          </li>
          <li className="nav-item">
            <a className="head-item" href="./login.html">Login</a>
          </li>
          <li className="nav-item">
            <a className="head-item" id="weather" href="#"><span id="weather-info">weather</span></a>
          </li>
        </ul>
    </div>
  </div>
</nav>


        </>
    )
}

export default Header;