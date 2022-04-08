import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../sass/Navigation.module.scss";

import { AiOutlineClose } from "react-icons/ai";

function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className={styles.nav}>
        <div className="container">
          <div id="logo">Hām</div>
          <div id="nav_links" className={isOpen ? "active" : null}>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/">Our Services</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/">Solutions</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {isOpen ? (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              data-v-7dd2d515=""
              onClick={() => toggle()}
            >
              <circle
                cx="14"
                cy="14"
                r="14"
                fill="#F0F4FD"
                data-v-7dd2d515=""
              ></circle>{" "}
              <path
                d="M14.0001 12.7626L18.3314 8.4314L19.5686 9.66865L15.2374 13.9999L19.5686 18.3311L18.3314 19.5684L14.0001 15.2371L9.66889 19.5684L8.43164 18.3311L12.7629 13.9999L8.43164 9.66865L9.66889 8.4314L14.0001 12.7626Z"
                fill="#001140"
                data-v-7dd2d515=""
              ></path>
            </svg>
          ) : (
            <div id="hamburger" onClick={() => toggle()}>
              <div className="line" />
              <div className="line" />
              <div className="line" />
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navigation;
