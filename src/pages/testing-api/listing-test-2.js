import React from "react";
class Listing2 extends React.Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }
  
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });
  }
  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded)
      return (
        <div>
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
          {items.map((item) => (
            <div className="p-4 md:w-1/3">
              <div className="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-slate-50 to-white  overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                  src="https://images.unsplash.com/photo-1618172193622-ae2d025f4032?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    {" "}
                    User_Name: {item.username}{" "}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-600 mb-3">
                    Full_Name: {item.name}
                  </h1>
                  <p className="leading-relaxed mb-3">
                    {" "}
                    User_Email: {item.email}{" "}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Listing2;
