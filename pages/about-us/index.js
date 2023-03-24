import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "./style.module.css";

import Aboutusimg from "../../assets/images/BPT_Website_banner_Aboutus.png";
export default function index() {
  return (
    <>
      <Head>
        <title>About Us</title>
        <meta name="description" content="About Us" />
      </Head>

      <section className="innersectioc">
        <div className="container">
          <h1 className="mainheads1 textgloden">About us</h1>
        </div>
      </section>
      <section class="pt-5 pb-4">
        <div class="container py-3">
          <div class="row">
            <div class="col-md-6 mb-3">
              <p>
                “The Baazi Poker Tour (BPT) was introduced in 2016. The 4-day
                series witnessed a tremendous turnout, creating a benchmark for
                LIVE tournament poker in India. The 2019 edition took it up a
                notch, with the 6-day extravaganza attracting over 1300 entries
                with a total prize pool nearing ₹5.5 crores! For the 2020
                Edition, PokerBaazi decided to go the hybrid way with BPT Online
                and BPT Live. BPT Online included a similar tournament line-up
                as the Live series, with the exception of a few high guarantee
                weekly flagships added to the schedule. BPT Live attracted over
                1500 entries during its 7 days which created a prize pool of
                ₹4.3 CRORE+.
              </p>
              <p>
                The most recent edition of the popular series took place in
                March and was the first post-pandemic live poker series! The six
                day event of BPT ’22, quite fittingly, saw 2200+ entries,
                setting new landmarks for Indian poker and taking the prize pool
                to an amazing ₹6.96 CRORE. This included a record 900 entries in
                its Main Event. India could not have hoped for a more grand
                return to live poker!
              </p>
              <p>
                The BPT is powered by Online Poker giants PokerBaazi along with
                Parent Company Baazi Games – a disruptive entity in the online
                gaming industry in India. The company intends to provide poker
                players across the country with an ideal live poker environment
                to play and enjoy the game, with an exciting line-up of poker
                festivals, tournaments and series scheduled all year round.”
              </p>
            </div>
            <div class="col-md-6  mb-3 text-center text-md-end">
              <div class="ps-0 ps-md-4">
                <Image
                  src={Aboutusimg.src}
                  width={603}
                  height={596}
                  alt=""
                  className="img-fluid w-100"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
