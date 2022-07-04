import React, { Component } from "react";
import promo1 from "../images/images/promo_1.jpg";
import promo2 from "../images/images/promo_2.jpg";
import promo3 from "../images/images/promo_3.jpg";

class Promo extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="promo-container">
          <div className="promo-titles">
            <h5 className="text-muted">ONLY THE BEST</h5>
            <h1>PROMO PRICES</h1>
          </div>
          <div className="promo-img-container container-fluid ">
            <div className="promo-img-cont">
              <div className="promo-img-content">
                <img className="img-fluid" src={promo1} alt="" />
                <div className="positioned-text text-light ">
                  <p className="h2">-30% off</p>
                  <p>ON ALL BAGS</p>
                </div>
              </div>
              <a href="#" className="promobtn">
                <button className="bg-dark text-light">Shop Now</button>
              </a>
            </div>
            <div className="promo-img-cont">
              <div className="promo-img-content">
                <img className="img-fluid" src={promo2} alt="" />
                <div className="positioned-text text-light ">
                  <p className="h2">-30% off</p>
                  <p>COATS & JACKET</p>
                </div>
              </div>
              <a href="#" className="promobtn">
                <button className="bg-dark text-light">Shop Now</button>
              </a>
            </div>
            <div className="promo-img-cont">
              <div className="promo-img-content">
                <img className="img-fluid" src={promo3} alt="" />
                <div className="positioned-text text-light ">
                  <p className="h2">-25% off</p>
                  <p>on Scandals</p>
                </div>
              </div>
              <a href="#" className="promobtn">
                <button className="bg-dark text-light">Shop Now</button>
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Promo;
