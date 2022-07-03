import React, { Component } from "react";
import slide from "../images/images/home_slider_1.jpg";

class Header extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div
          id="carouselExampleControls"
          className="carousel slide slide_container"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={slide} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              {/* <img src={slide} className="d-block w-100" alt="..." /> */}
            </div>
            <div className="carousel-item">
              <img src={slide} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
