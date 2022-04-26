import React, { Component } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightLong,
  faArrowRight,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";

// function makeid(length) {
//   var result = "";
//   var characters = "abcdefghijklmnopqrstuvwxyz";
//   var charactersLength = characters.length;
//   for (var i = 0; i < length; i++) {
//     result += characters.charAt(Math.floor(Math.random() * charactersLength));
//   }
//   return result;
// }

export default class HomeTopProducts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  componentDidMount() {
    var url1 = "https://dummyjson.com/products";
    var url2 = "https://foodbukka.herokuapp.com/api/v1/menu";
    var url3 =
      "https://www.themealdb.com/api/json/v1/1/search.php?f=b";
    axios.get(url3).then((res) => {
      const items = res.data.meals;
      this.setState({ items, DataisLoaded: true });
      console.log(items);
    });
  }

  render() {
    const { DataisLoaded, items } = this.state;

    if (!DataisLoaded)
      return (
        <div className="container mx-auto max-w-6xl text-center items-center py-32">
          <h1> Pleses wait some time.... </h1>{" "}
        </div>
      );

    return (
      <div className="container py-16 max-w-6xl mx-auto px-5 lg:px-0 sm:static mt-5">
        <div className="lg:text-center mb-16">
          <h2 className="section-title text-center text-2xl text-yellow-300 font-semibold tracking-wide uppercase">
            Random Food
          </h2>
        </div>
        <div className="flex flex-wrap -m-4">
          {items.slice(0, 6).map((item) => (
            <div className="p-4 md:w-1/3  w-1/2">
              <div className="h-full border border-gray-100 rounded-xl shadow-cla-blue bg-gradient-to-r from-white to-gray-100  overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                  src={item.strMealThumb}
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="md:block hidden tracking-widest text-xs font-medium text-gray-400 mb-1 uppercase">
                    {item.strTags}
                  </h2>
                  <h1 className="title-font sm:text-lg text-xs font-bold text-slate-700 mb-3 uppercase font-bold tracking-wide">
                    {item.strMeal}
                  </h1>
                  <div className="flex flex-wrap justify-between items-center">
                    {/* <p className="leading-relaxed text-left font-semibold text-slate-500">$ {item.price}</p> */}
                    <div className="flex items-center justify-center flex-wrap ">
                      <a
                        href=""
                        className="font-medium sm:text-md text-xs uppercase text-yellow-400 tracking-widest"
                      >
                        Detail{" "}
                        <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
                      </a>
                      {/* <button className="font-medium bg-yellow-300 hover:bg-amber-400 text-slate-800 hover:text-slate-900 rounded py-2 px-4 border border-yellow-300 hover:border-transparent">
                        Detail
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center w-full justify-center py-16">
          <NavLink
            to="/menu"
            className="font-medium bg-yellow-300 hover:bg-amber-400 text-slate-800 hover:text-slate-900 rounded py-2 px-4 border border-yellow-300 hover:border-transparent"
          >
            Show More{" "}
            <FontAwesomeIcon className="ml-4" icon={faCircleArrowRight} />
          </NavLink>
        </div>
      </div>
    );
  }
}
