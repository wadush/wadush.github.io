import React from "react";
import "./App.css";
import Header from "../header/Header";
import Home from "../home/Home";
import Works from "../works/Works";
import Contact from "../contact/Contact";

function App() {
  return <div className="App">
    <Header />
    <Home />
    <Works />
    <Contact />
  </div>;
}

export default App;
