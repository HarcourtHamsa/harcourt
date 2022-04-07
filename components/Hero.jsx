import React from "react";
import Navigation from "./Navigation";

import styles from "../sass/Hero.module.scss";

function Hero() {
  return (
    <div className={styles.hero}>
      <Navigation />

      <div className="jumbotron">
        <h1>
          We build <span>products</span> from A to Z
        </h1>
        <p>
          We are a group of people with strong technical know-how, and we enjoy
          complicated, unconventional projects. We are based in Nigeria but we
          are global citizens.
        </p>
        <div id="btn_group">
          <button>Learn more</button>
          <button>See our work</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
