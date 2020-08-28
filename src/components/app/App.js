import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "../header/Header";
import Home from "../home/Home";
import Works from "../works/Works";
import Contact from "../contact/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/works" exact component={Works} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
