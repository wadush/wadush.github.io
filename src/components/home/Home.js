import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="Home main-section">
      <h2 className="h2-home">Hello World</h2>
      <p className="p-home">
        My name is{" "}
        <Link className="Wadush" to="/about">
          Vadim
        </Link>
        , I am web developer.
      </p>
      <p className="p-home">Nice to meet you.</p>

      <Link className="call-to-action" to="/works">
        Works
      </Link>
    </section>
  );
}

export default Home;
