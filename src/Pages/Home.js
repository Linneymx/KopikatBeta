import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../Assets/top2.jpg";
import "../Styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>KopiKat</h1>
        <p>The House & shop coffee</p>
        <Link to="/menu">
          <button> Look our Menu</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;