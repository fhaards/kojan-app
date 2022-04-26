import React, { Component } from "react";
import HomeTopProduct from "./homepages/home-randomFood";
import Hero from "../layouts/hero";
import HomeAbout from "./homepages/home-about";
import HomeCollection from "./homepages/home-collection";

class Home extends Component {
  render() {
    return (
      <div className="py-16 text-left">
        <Hero></Hero>
        <HomeAbout></HomeAbout>
        <HomeCollection></HomeCollection>
        <HomeTopProduct></HomeTopProduct>
      </div>
    );
  }
}

export default Home;
