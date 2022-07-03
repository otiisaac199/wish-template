import React, { Component } from "react";
import product1 from "../images/images/product_1.jpg";
import product2 from "../images/images/product_2.jpg";
import product3 from "../images/images/product_3.jpg";

class NewArrivals extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="product-container">
          <div className="product-titles">
            <h5 className="text-muted">ONLY THE BEST</h5>
            <h1 className="title">NEW ARRIVALS</h1>
          </div>
          <div className="product-img-container container-fluid ">
            <div className="product-img-cont">
              <div className="product-img-content">
                <img className="img-fluid" src={product1} alt="" />
                <div className="mt-4">
                  <div className="product-rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                  </div>
                  <div className="product-detail">
                    <div className="left-product-detail">
                      <p className="mb-0">Women's Long Dress</p>
                      <p className="text-muted">$45.00</p>
                    </div>
                    <div className="right-product-detail">
                      <button className="border-0 mr-1 shopping-cart">
                        <i className="fa fa-shopping-bag text-light"></i>
                      </button>
                      <button className="border-0">+</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-img-cont">
              <div className="product-img-content">
                <img className="img-fluid" src={product2} alt="" />
                <div className="mt-4">
                  <div className="product-rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                  </div>
                  <div className="product-detail">
                    <div className="left-product-detail">
                      <p className="mb-0">2 Piece Swimsuits</p>
                      <p className="text-muted">$35.00</p>
                    </div>
                    <div className="right-product-detail">
                      <button className="border-0 mr-1 shopping-cart">
                        <i className="fa fa-shopping-bag text-light"></i>
                      </button>
                      <button className="border-0">+</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-img-cont">
              <div className="product-img-content">
                <img className="img-fluid" src={product3} alt="" />
                <div className="mt-4">
                  <div className="product-rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                  </div>
                  <div className="product-detail">
                    <div className="left-product-detail">
                      <p className="mb-0">Man Blue Jacket</p>
                      <p className="text-muted">$145.00</p>
                    </div>
                    <div className="right-product-detail">
                      <button className="border-0 mr-1 shopping-cart">
                        <i className="fa fa-shopping-bag text-light"></i>
                      </button>
                      <button className="border-0">+</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default NewArrivals;
