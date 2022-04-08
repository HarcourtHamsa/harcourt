import React from "react";
import Head from "next/head";
import Image from "next/image";

import styles from "../sass/about.module.scss";

import rocket from "../assets/images/rocket1.svg";
import star from "../assets/images/star6.svg";

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
                Since then, we have been building the most convinent way for the
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
            <div>
              <Image src={rocket} alt=""/>
              <Image src={star} alt=""/>
            </div>
          </div>
        </div>
      </div>

      <section className={styles.section_1}>
        <div className="container">
          <p className="sub">Our values</p>
          <h2>Values we hold true.</h2>

          <div className="values">
            <div>
              <h3>Empathy</h3>
              <p>
                Our hope is to usher a new generation of Nigerians away from a
                rigid and inconvinent past into the future of living in Nigeria
              </p>
            </div>

            <div>
              <h3>Concise communication</h3>
              <p>
                Our hope is to usher a new generation of Nigerians away from a
                rigid and inconvinent past into the future of living in Nigeria
              </p>
            </div>

            <div>
              <h3>Excellence</h3>
              <p>
                Our hope is to usher a new generation of Nigerians away from a
                rigid and inconvinent past into the future of living in Nigeria
              </p>
            </div>

            <div>
              <h3>Growth mindset</h3>
              <p>
                Our hope is to usher a new generation of Nigerians away from a
                rigid and inconvinent past into the future of living in Nigeria
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section_2}>
        <div className="container">
          <p className="sub">Our team</p>
          <h2>Meet our superstars.</h2>

          <div className="grid">
            <div />
            <div />
            <div />
          </div>
        </div>
      </section>

      <section className={styles.section_4}>
        <div className="container">
          <h2>Still unsure? let&apos;s talk :)</h2>
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
