import React,{useState,useEffect} from 'react';
import "./QuickSearch.css"

const baseUrl="https://ticketbooking-xyft.onrender.com"
const QuickSearch= ()=>{

  const [location,setLocation] = useState('')
  const [restData, setTheatre] = useState('')

  useEffect(() =>{
      fetch(`${baseUrl}/locations`,{method:'GET'})
      .then((res)=>res.json())
      .then((data)=>{
        setLocation(data)
      })
  },[])
const renderCity=(data)=>{
  if(data){
    return data.map((item)=>{
      return(
        <option key={item._id} value={item.state_id}>{item.state_name}</option>
      )
    })
  }
}

const handleCity= (event)=>{
  let StateId = event.target.value
  fetch(`${baseUrl}/theatre`,{method:'GET'})
  .then((res)=>res.json())
  .then((data)=>{
    setTheatre(data)
    console.log(restData)
  })

}
const renderTheatre=(data)=>{
  if(data){
    return data.map((item)=>{
      return(
        <option key={item._id} value={item.state_id}>{item.state_name}</option>
      )
    })
  }
}

  return(
        <>
<div className="container-fluid showing-movie-contain shadow-sm">

<div className="row mt-5">

  <div className="col-lg-3 col-md-3 filter-section">
    <h4 className="filter-head">Filters</h4>

    <div className="mb-4 filter-genre shadow-sm">
      <h5 className="filter-title">Genres</h5>
      <div className="form-check py-1">
        <input className="form-check-input" type="radio" name="genre" id="action"/>
        <label className="form-check-label" for="action">Action</label>
      </div>
      <div className="form-check py-1">
        <input className="form-check-input" type="radio" name="genre" id="comedy"/>
        <label className="form-check-label" for="comedy">Comedy</label>
      </div>
      <div className="form-check py-1">
        <input className="form-check-input" type="radio" name="genre" id="drama"/>
        <label className="form-check-label" for="drama">Drama</label>
      </div>
      <div className="form-check py-1">
        <input className="form-check-input" type="radio" name="genre" id="thriller"/>
        <label className="form-check-label" for="thriller">Thriller</label>
      </div>
      <div className="form-check py-1">
        <input className="form-check-input" type="radio" name="genre" id="horror"/>
        <label className="form-check-label" for="horror">Horror</label>
      </div>
    </div>

    <div className="mb-4 filter-language shadow-sm">
      <h5 className="filter-title">Languages</h5>
      <div className="form-check py-1">
        <input className="form-check-input" type="radio" name="language" id="english"/>
        <label className="form-check-label" for="english">English</label>
      </div>
      <div className="form-check py-1">
        <input className="form-check-input" type="radio" name="language" id="Tamil"/>
        <label className="form-check-label" for="Tamil">Tamil</label>
      </div>
      <div className="form-check py-1">
        <input className="form-check-input" type="radio" name="language" id="Malayalam"/>
        <label className="form-check-label" for="Malayalam">Malayalam</label>
      </div>
      <div className="form-check py-1">
        <input className="form-check-input" type="radio" name="language" id="Telugu"/>
        <label className="form-check-label" for="Telugu">Telugu</label>
      </div>
      <div className="form-check py-1">
        <input className="form-check-input" type="radio" name="language" id="Hindi"/>
        <label className="form-check-label" for="Hindi">Hindi</label>
      </div>
    </div>

    <div className="mb-4 filter-format shadow-sm">
      <h5 className="filter-title">Format</h5>
      <div className="form-check py-1">
        <input className="form-check-input" type="radio" name="2D" id="2D"/>
        <label className="form-check-label" for="2D">2D</label>
      </div>
      <div className="form-check py-1">
        <input className="form-check-input" type="radio" name="3D" id="3D"/>
        <label className="form-check-label" for="3D">3D</label>
      </div>
      <div className="form-check py-1">
        <input className="form-check-input" type="radio" name="IMAX 2D" id="IMAX 2D"/>
        <label className="form-check-label" for="IMAX 2D">IMAX 2D</label>
      </div>
      <div className="form-check py-1">
        <input className="form-check-input" type="radio" name="MX4D" id="MX4D"/>
        <label className="form-check-label" for="MX4D">MX4D</label>
      </div>
    </div>


    <select onChange={handleCity} className="form-select shadow-sm" aria-label="Default select example">
      <option>All States</option>
      {renderCity(location)}

    </select>

  </div>


  <div className="col-lg-9 col-md-9 movies-section">

    <h3 className="show-title">Now showing movies</h3>

    <div className="row">

      <div className="col-lg-3 col-md-6">
    <div className="card mb-4">
      <img src="./assets/images/Por Thozhil.jpg" alt="2.0 photo" className="card-img-top"/>
      <div className="card-body">
        <h5 className="card-title">Por Thozhil</h5>
        <p className="card-text">U/A Tamil</p>
        <div className="btn-block">
          <a href="#" className="btn book-ticket">Book Ticket</a>
        </div>
      </div>
    </div>
      </div>

      <div className="col-lg-3 col-md-6">
        <div className="card mb-4">
          <img src="./assets/images/Flash.jpg" alt="Flash photo" className="card-img-top"/>
          <div className="card-body">
            <h5 className="card-title">Flash</h5>
            <p className="card-text">U/A Tamil</p>
            <div className="btn-block">
              <a href="#" className="btn book-ticket">Book Ticket</a>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-md-6">
        <div className="card mb-4">
          <img src="./assets/images/Pathaan.jpg" alt="2.0 photo" className="card-img-top"/>
          <div className="card-body">
            <h5 className="card-title">Pathaan</h5>
            <p className="card-text">U/A Tamil</p>
            <div className="btn-block">
              <a href="#" className="btn book-ticket">Book Ticket</a>
            </div>
          </div>
        </div>
      </div>



      <div className="col-lg-3 col-md-6">
        <div className="card mb-4">
          <img src="./assets/images/Flash.jpg" alt="Flash photo" className="card-img-top"/>
          <div className="card-body">
            <h5 className="card-title">Flash</h5>
            <p className="card-text">U/A Tamil</p>
            <div className="btn-block">
              <a href="#" className="btn book-ticket">Book Ticket</a>
            </div>
          </div>
        </div>
      </div>
  
      <div className="col-lg-3 col-md-6">
          <div className="card mb-4">
            <img src="./assets/images/Por Thozhil.jpg" alt="2.0 photo" className="card-img-top"/>
            <div className="card-body">
              <h5 className="card-title">Por Thozhil</h5>
              <p className="card-text">U/A Tamil</p>
              <div className="btn-block">
                <a href="#" className="btn book-ticket">Book Ticket</a>
              </div>
            </div>
          </div>
      </div>
  
      <div className="col-lg-3 col-md-6">
        <div className="card mb-4">
          <img src="./assets/images/Pathaan.jpg" alt="2.0 photo" className="card-img-top"/>
          <div className="card-body">
            <h5 className="card-title">Pathaan</h5>
            <p className="card-text">U/A Tamil</p>
            <div className="btn-block">
              <a href="#" className="btn book-ticket">Book Ticket</a>
            </div>
          </div>
        </div>
      </div>
  
      <div className="col-lg-3 col-md-6">
        <div className="card mb-4">
          <img src="./assets/images/2.0.jpg" alt="2.0 photo" className="card-img-top"/>
          <div className="card-body">
            <h5 className="card-title">2.O</h5>
            <p className="card-text">U/A Tamil</p>
            <div className="btn-block">
              <a href="#" className="btn book-ticket">Book Ticket</a>
            </div>
            
          </div>
        </div>
      </div>
  

      <div className="col-lg-3 col-md-6">
        <div className="card mb-4">
          <img src="./assets/images/blackwidow.jpg" alt="blackwidow photo" className="card-img-top"/>
          <div className="card-body">
            <h5 className="card-title">blackwidow</h5>
            <p className="card-text">U/A Tamil,English</p>
            <div className="btn-block">
              <a href="#" className="btn book-ticket">Book Ticket</a>
            </div>
          </div>
        </div>
      </div>
  
      <div className="col-lg-3 col-md-6">
        <div className="card mb-4">
          <img src="./assets/images/captain marvel.jpg" alt="captain marvel photo" className="card-img-top"/>
          <div className="card-body">
            <h5 className="card-title">Captain marvel</h5>
            <p className="card-text">U/A Tamil</p>
            <div className="btn-block">
              <a href="#" className="btn book-ticket">Book Ticket</a>
            </div>
          </div>
        </div>
      </div>
  
      <div className="col-lg-3 col-md-6">
        <div className="card mb-4">
          <img src="./assets/images/The Batman - 2022.jpg" alt="Dc batman photo" className="card-img-top"/>
          <div className="card-body">
            <h5 className="card-title">The batman</h5>
            <p className="card-text">U/A Tamil</p>
            <div className="btn-block">
              <a href="#" className="btn book-ticket">Book Ticket</a>
            </div>
          </div>
        </div>
      </div>
  
      <div className="col-lg-3 col-md-6">
        <div className="card mb-4">
          <img src="./assets/images/Joker [3840x2160].jpg" alt="Joker photo" className="card-img-top"/>
          <div className="card-body">
            <h5 className="card-title">Flash</h5>
            <p className="card-text">U/A Tamil</p>
            <div className="btn-block">
              <a href="#" className="btn book-ticket">Book Ticket</a>
            </div>
          </div>
        </div>
      </div>

  </div>
</div>
</div>
</div>


        </>
    )
}

export default QuickSearch;