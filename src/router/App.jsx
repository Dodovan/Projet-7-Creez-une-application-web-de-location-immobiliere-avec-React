import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

import Home from "../pages/Home";
import About from "../pages/About"

export default function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

