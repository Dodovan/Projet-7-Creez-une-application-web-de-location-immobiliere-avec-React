import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import './Router.css'

import Home from "../pages/Home";
import About from "../pages/About"
import Logement from "../pages/Logement";
import Error from "../pages/Error/Error";

 function App() {
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

export default App;

