import React, { Component } from "react";
import checkoutImg1 from "../images/images/extra_1.jpg";
import checkoutImg2 from "../images/images/extra_2.jpg";
import gallery1 from "../images/images/gallery_1.jpg";
import gallery2 from "../images/images/gallery_2.jpg";
import gallery3 from "../images/images/gallery_3.jpg";
import gallery4 from "../images/images/gallery_4.jpg";
import gallery5 from "../images/images/gallery_5.jpg";
import gallery6 from "../images/images/gallery_6.jpg";

class Checkout extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="checkout-container container-fluid">
          <div className="left-checkout-content checkout-content">
            <img src={checkoutImg1} className="img-fluid w-100 h-100" alt="" />
          </div>
          <div className="right-checkout-content checkout-content">
            <img src={checkoutImg2} className="img-fluid w-100 h-100" alt="" />
          </div>
        </div>

        <div className="wish-container">
          <div className="wish-hashtags">
            <div className="hashtags">
              <a href="#">#wish</a>
              <a href="#">#wishinstagram</a>
              <a href="#">#wishgirl</a>
            </div>
            <div className="wish-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              minus recusandae provident, labore nam maxime!
            </div>
            <button type="button">Submit</button>
          </div>
          <div className="wish-images">
            <img src={gallery1} className="img-fluid" alt="" />
            <img src={gallery2} className="img-fluid" alt="" />
            <img src={gallery3} className="img-fluid" alt="" />
            <img src={gallery4} className="img-fluid" alt="" />
            <img src={gallery5} className="img-fluid" alt="" />
            <img src={gallery6} className="img-fluid" alt="" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Checkout;
