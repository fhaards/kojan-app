import React from "react";
import axios from "axios";

export default class Listing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  componentDidMount() {
    var url1 = "https://dummyjson.com/products";
    var url2 = "https://jsonplaceholder.typicode.com/users";
    axios.get(url1).then((res) => {
      const items = res.data.products;
      this.setState({ items, DataisLoaded: true });
      console.log(items);
    });
  }

  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded)
      return (
        <div className="container mx-auto max-w-6xl text-center">
          <h1> Pleses wait some time.... </h1>{" "}
        </div>
      );

    return (
      <div className="container py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-0 sm:static">
        <div className="lg:text-center mb-8">
          <h2 className="text-base text-yellow-300 font-semibold tracking-wide uppercase">
            Top Products
          </h2>
        </div>
        <div className="flex flex-wrap -m-4">
          {items.slice(0, 3).map((item) => (
            <div className="p-4 md:w-1/3">
              <div className="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-slate-50 to-white  overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                  src={item.thumbnail}
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 uppercase">
                    {item.brand} {" - "} {item.category}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-slate-700 mb-3 uppercase font-bold">
                    {item.title}
                  </h1>
                  <div className="flex flex-wrap justify-between items-center">
                    <p className="leading-relaxed text-left font-semibold text-slate-500">$ {item.price}</p>
                    <div className="flex items-center justify-center flex-wrap ">
                      <button className="font-medium bg-yellow-300 hover:bg-amber-400 text-slate-800 hover:text-slate-900 rounded py-2 px-4 border border-yellow-300 hover:border-transparent">
                        Detail
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
