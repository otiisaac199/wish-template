import logo from "./logo.svg";
import "./App.css";
import "./CSS/style.css";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Promo from "./components/promo";
import NewArrivals from "./components/newArrivals";
import Checkout from "./components/checkout";
import React from "react";
import Testimonial from "./components/testimonials";
// import Footer from "./component/footer";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Header />
      <Promo />
      <NewArrivals />
      <Checkout />
      <Testimonial />
      {/* <Footer /> */}
    </React.Fragment>
  );
}

export default App;
