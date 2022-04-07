import React from "react";
import Image from "next/image";
import { useSpring, animated, config } from "react-spring";

import closeSVG from "../assets/images/close.svg";

import styles from "../sass/Navigation.module.scss";

function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen && (
        <nav className={styles.nav}>
          <div className="navigation_container">
            <div>
              <ul>
                <li>
                  <a tabIndex={0}>Home</a>
                </li>
                <li>
                  <a tabIndex={0}>About Us</a>
                </li>
                <li>
                  <a tabIndex={0}>Our Work</a>
                </li>
                <li>
                  <a tabIndex={0}>Contact Us</a>
                </li>
                <li>
                  <a tabIndex={0}>Careers</a>
                </li>
              </ul>
            </div>
            <div>
              <Image
                tabIndex={0}
                onClick={() => toggle()}
                id="close_btn"
                alt=""
                src={closeSVG}
              />

              <div className="navigation_contact_info">
                <p>
                  Call: <a href="#">+234 707 007 3451</a>
                </p>
                <p>
                  Email: <a href="#">info@harcourt.com</a>
                </p>

                <button>See out tips of the week</button>
              </div>
            </div>
          </div>
        </nav>
      )}

      <div
        className={styles.navigation_bar_default}
        style={{ display: isOpen ? "none" : "block" }}
      >
        <div>
          <p id="logo"> </p>

          <span id="hamburger" onClick={() => toggle()}>
            <p>Menu</p>

            <span>
              <div className="line"></div>
              <div className="line"></div>
            </span>
          </span>
        </div>
      </div>
    </>
  );
}

export default Navigation;
