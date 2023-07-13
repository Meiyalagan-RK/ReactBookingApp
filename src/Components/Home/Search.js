import React,{useEffect, useState} from 'react';
import "./Search.css"




const Search= ()=>{

    return(
        <>

<main>
    <section className="jumbotron landing-back">
      <div className="container">
        <h1>Find movies and more.</h1>
        <p>Book your tickets anywhere anytime.</p>
          <form className="d-flex ms-auto" role="search">
                <input className="form-control me-4 search-bar" id='searchLocation' type="search" placeholder="Search by location" aria-label="Search"/>
                <button className="btn btn-primary btn-lg land-btn"  type="submit">Search</button>
            </form>
      </div>
    </section>


    <a href="#" className="sticky-button" id="dark"><i className="fa-solid fa-moon fa-2xl" style={{color: "#0e0f11"}}></i></a>
 
  </main>


  <div className="modal fade" id="couponModal" tabIndex="-1" aria-labelledby="couponModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

        <div className="modal-body">
          <img src="https://i.ibb.co/dDBwYdV/The-MCU-s-Secret-Invasion-Will-Keep-You-On-Your-Toes.jpg" className="img-fluid" alt="Movie Poster"/>
   
        </div>
      </div>
    </div>
  </div>


<div id="carouselExample" className="carousel slide c-contain" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active c-item">
      <a href=""><img src="https://i.ibb.co/t848QP0/Spider-Mam-Into-The-Spider-Verse-5000x2250.jpg" className="c-img" alt="..."/></a>
    </div>
    <div className="carousel-item c-item">
      <a href=""><img src="https://i.ibb.co/sCKcjVR/Joker-3840x2160.jpg " className="c-img" alt="..."/></a> 
    </div>
    <div className="carousel-item c-item">
      <a href=""><img src="https://i.ibb.co/pfJjm0s/Avatar-The-Way-of-Water-2022-new.jpg" className="c-img" alt="..."/></a>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


        </>
    )
}

export default Search;