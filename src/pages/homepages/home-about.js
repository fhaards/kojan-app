import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

export default class HomeTopProducts extends Component {
  render() {
    return (
      <div className="container py-24 bg-white max-w-6xl mx-auto px-4 sm:px-6 lg:px-0 sm:static">
        <div className="lg:text-center">
          <h2 className="mb-16 text-center text-2xl  text-yellow-300 font-semibold tracking-wide uppercase">
            About
          </h2>
          <p className="title-font uppercase text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A Cup of History
          </p>
          <p className="font-medium mt-16 mb-16 text-xl text-slate-500 lg:mx-auto">
            Wild coffee plants, probably from Kefa (Kaffa), Ethiopia, were taken
            to southern Arabia and placed under cultivation in the 15th century.
            One of many legends about the discovery of coffee is that of Kaldi,
            an Arab goatherd who was puzzled by the strange antics of his flock.
            About 850 CE Kaldi supposedly sampled the berries of the evergreen
            bush on which the goats were feeding and, on experiencing a sense of
            exhilaration, proclaimed his discovery to the world.
          </p>
          <NavLink
            to="/about"
            className="font-medium bg-yellow-300 hover:bg-amber-400 text-slate-800 hover:text-slate-900 rounded py-2 px-4 border border-yellow-300 hover:border-transparent"
          >
            The History {" "}
            <FontAwesomeIcon className="ml-4" icon={faCircleArrowRight} />
          </NavLink>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="relative"></div>
            <div className="relative"></div>
          </dl>
        </div>
      </div>
    );
  }
}
