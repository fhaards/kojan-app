import React, { Component } from "react";
import CollectionTumb1 from "../../assets/img/app/collection_1.jpg";
import CollectionTumb2 from "../../assets/img/app/collection_2.jpg";
import CollectionTumb3 from "../../assets/img/app/collection_3.jpg";

const homeCategory = [
  {
    name: "Streetfood",
    description: "Local Streetfood",
    href: "#",
    image: CollectionTumb1,
  },
  {
    name: "Coffee",
    description: "Local Coffee",
    href: "#",
    image: CollectionTumb2,
  },
  {
    name: "Drinks",
    description: "Other Drinks",
    href: "#",
    image: CollectionTumb3,
  },
];

export default class HomeCollection extends Component {
  render() {
    return (
      <div className="max-w-6xl mx-auto px-5 lg:px-0">
        <div className="max-w-2xl mx-auto py-16  lg:max-w-none text-center">
          <h1 className="mb-16 text-2xl text-yellow-300 font-semibold tracking-widest uppercase">
            Category
          </h1>

          <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
            {homeCategory.map((item) => (
              <div className="group relative mb-5">
                <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <img
                    src={item.image}
                    alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href="#">
                    <span className="absolute inset-0"></span>
                    {item.name}
                  </a>
                </h3>
                <p className="uppercase tracking-wide title-font text-lg font-semibold text-gray-900">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
