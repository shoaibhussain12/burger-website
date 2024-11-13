import React from "react";
import Navbar from "../app/components/Navbar";
import Carousel from "../app/components/Carousel";
import Progressor from "../app/components/progressor";
import ProductList from "../app/components/productList";
import Burger from "../app/components/Burger";
import Banner from "../app/components/Banner";
import Offer from "../app/components/offer";
import Card from "../app/components/Card";
import Footer from "../app/components/Footer";
import Menuitem from "../app/components/Menuitem";

import Testimonial from "./components/Testimonial";
import Reservation from "./components/Reservation"

export default function App() {
  return (
    <div className="bg-gradient-to-r from-black to--slate-700 min-h-screen text-white">
      <Navbar />
      <Carousel />
      <Progressor />
      <ProductList />
      <Burger/>
      <Banner />
      <Offer />
      <Card />
      <Testimonal />
      <Footer />
      <Menuitem/>
      <Reservation/>
    </div>
  );
}
