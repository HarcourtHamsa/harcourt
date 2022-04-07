import React from "react";
import Head from "next/head";

import styles from "../sass/about.module.scss";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import FloatingButton from "../components/FloatingButton";

function about() {
  return (
    <>
      <Head>
        <title>Hām - About us </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Navigation />
      <div className={styles.page}>
        <div className="container">
          <h1>Our story</h1>
          <div className="grid">
            <div>
              <p>
                In 2022, we set out to eliminate the barriers that make it
                difficult for creatives to tap into tech especially in Nigeria.
                Since then, we've been building the most convinent way for the
                modern day creative to get a home whether you are starting your
                career, starting a family, or buying your first home - our
                mission is to bring home closer to you. wherever you are.
              </p>

              <p>
                We are the easiest way to find and pay for a home, offering
                flexible payments plans, lease terms, and housing options that
                are designed around your needs.
              </p>

              <p>
                Our hope is to usher a new generation of Nigerians away from a
                rigid and inconvinent past into the future of living in Nigeria
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </div>

      <section className={styles.section_4}>
        <div className="container">
          <h2>Still unsure? let's talk :)</h2>
          <p>Call & WhatsApp: +234 706 104 0362</p>
          <p>Email: info@ham.com</p>
        </div>
      </section>
      <FloatingButton />
      <Footer />
    </>
  );
}

export default about;
