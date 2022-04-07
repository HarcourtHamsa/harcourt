import React from "react";
import styles from '../sass/Marquee.module.scss';

function Marquee() {
  return (
    <div className={styles.marquee}>
      <div>
        <p id="marquee_text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          deserunt explicabo alias omnis sapiente suscipit?
        </p>
      </div>
    </div>
  );
}

export default Marquee;
