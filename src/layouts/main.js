import Header from "./header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Food from "../pages/food/food";
import FoodDetail from "../pages/food/food-detail";
import Footer from "./footer";

function Main() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Navbar></Navbar> */}
        <Header></Header>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/food" element={<Food />} />
          <Route path="/food/detail/:id" element={<FoodDetail />} />
        </Routes>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default Main;
