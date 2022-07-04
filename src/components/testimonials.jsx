import React, { Component } from "react";
import review1 from "../images/images/review_1.jpg";
import review2 from "../images/images/review_2.jpg";

class Testimonial extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="testimonials-container">
          <div className="testimonials-titles">
            <h5 className="text-muted">ONLY THE BEST</h5>
            <h1 className="title">TESTIMONIALS</h1>
          </div>
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner testimonial-carousel">
              <div className="carousel-item active">
                <p className="text-muted">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                  culpa eaque, facere voluptatem autem facilis aliquid. Mollitia
                  magni unde vel explicabo minima id excepturi dolores
                  repudiandae possimus cumque.
                </p>
                <img src={review1} className="d-block" alt="..." />
                <p className="h4">Christinne Smith</p>
              </div>
              <div className="carousel-item">
                <p className="text-muted">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                  culpa eaque, facere voluptatem autem facilis aliquid. Mollitia
                  magni unde vel explicabo minima id excepturi dolores
                  repudiandae possimus cumque.
                </p>
                <img src={review2} className="d-block" alt="..." />
                <p className="h4">Sarah Smith</p>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
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
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Testimonial;
