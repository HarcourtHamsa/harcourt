import React from "react";
import styles from "../sass/Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="footer_row_container">
        {/* row  */}
        <div>
          {/* list row */}
          <ul>
            <li>Our Products</li>
            <li>Moniepoint</li>
            <li>Monnify</li>
          </ul>

          {/* list row */}
          <ul>
            <li>Information</li>
            <li>Our Culture</li>
            <li>Careers</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* row  */}
        <div>
          {/* list row */}
          <ul>
            <li>Say Hello</li>
            <li>info@harcourt.com</li>
            
          </ul>

          {/* list row */}
          <ul>
            <li>Location</li>
            <li>14 Chief Ehule Street, Agip by Ada-George, Rivers State</li>
            
          </ul>
        </div>

        {/* row  */}
        <div>
          <p>&copy; 2022 Harcourt Tech, Ltd All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
