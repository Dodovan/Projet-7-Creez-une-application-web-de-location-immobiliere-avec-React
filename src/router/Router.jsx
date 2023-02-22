import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import './Router.css'

import Home from "../pages/Home/Home";
import About from "../pages/About/About"
import Logement from "../pages/Logement/Logement";
import Error from "../pages/Error/Error";

 function Router() {
  return (
    <div className="Page">

      <Header/>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<Logement />}/>
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default Router;

