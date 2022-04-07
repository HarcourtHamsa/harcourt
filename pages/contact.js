import React from "react";
import Head from "next/head";

import styles from "../sass/contact.module.scss";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import FloatingButton from "../components/FloatingButton";

function contact() {
  return (
    <div style={{ color: "white" }}>
      <Head>
        <title>Hām - Contact us </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Navigation />

      <div className={styles.page}>
        <div className="container">
          <div>
            <h1>Contact us</h1>
          </div>

          <div>
            <form>
              <div className="grid">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
              </div>
              <input type="email" placeholder="Email Address" />

              <textarea
                placeholder="Briefly tell us about your project"
                rows={10}
              />
              <button>Send message</button>
            </form>
            <small>You can also call (+234) 08020965367</small>
          </div>
        </div>
      </div>
      <FloatingButton />
      <Footer />
    </div>
  );
}

export default contact;
