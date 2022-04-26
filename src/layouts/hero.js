import React from "react";
function Hero() {
  return (
    <div className="-top-16 relative text-white section-home bg-blend-overlay">
      <div className="h-full w-full absolute backdrop-opacity-10 backdrop-invert bg-black/50 z-0"></div>
      <div className="container md:max-w-6xl mx-auto flex h-full flex-col md:flex-row">
        <div className="flex flex-col w-full h-full justify-center items-center p-4 lg:p-0 z-10">
          <h1 className="title-font text-4xl font font-extrabold tracking-tight text-yellow-300 sm:text-6xl tracking-widest mb-3">
            THE JOURNEY
          </h1>
          <h3 className="text-3xl md:text-5xl sm:text-left text-center font-extrabold mb-2 ">
            LOCAL STREETFOOD
          </h3>
          <p className="mb-8 text-sm md:text-base sm:text-left text-center text-gray-50 mb-4 font-bold">
            “The most dangerous drinking game is seeing how long I can go
            without coffee.”
          </p>
          <a
            href="#"
            className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
          >
            Explore Now
          </a>
        </div>
      </div>
    </div>
  );
}
export default Hero;
