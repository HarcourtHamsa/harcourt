import React from "react";
import Navigation from "./Navigation";

import styles from "../sass/Hero.module.scss";
import Image from "next/image";

// import hero from "../assets/images/homepage-hero-650x593.png";

function Hero() {
  return (
    <>
      <Navigation />
      <div className={styles.hero}>
        <div className="jumbotron">
          <h1>
            We build <span>products</span> from A to Z
          </h1>
          <p>
            We are a group of people with strong technical know-how, and we
            enjoy complicated, unconventional projects. We are based in Nigeria
            but we are global citizens.
          </p>
          <div id="btn_group">
            <button>Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
