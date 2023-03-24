import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "./style.module.css";
import PGimgA from "../../assets/images/playersguide/About-New.jpeg";
import PGimgB from "../../assets/images/playersguide/Accomodation.jpg";
import PGimgC from "../../assets/images/playersguide/Cashier-1.jpg";
import PGimgD from "../../assets/images/playersguide/Entertainment.jpg";
import PGimgE from "../../assets/images/playersguide/Poker.jpg";
export default function index(props) {
  return (
    <>
      <Head>
        <title>Players Guide</title>
        <meta name="description" content="Players Guide" />
      </Head>
      <section className="innersectioc">
        <div className="container">
          <h1 className="mainheads1 textgloden">Players Guide</h1>
        </div>
      </section>
      <section class="pt-5 pb-4">
        <div class="container py-3">
          <div class="row">
            <div class="col-md-6 mb-4">
              <div className={styles.playerguisesec}>
                <Image
                  src={PGimgA.src}
                  width={1500}
                  height={999}
                  alt=""
                  className="img-fluid w-100 mb-4"
                ></Image>
                <h2>Getting There</h2>
                <p>
                  Goa is one of the most popular tourist destinations in India,
                  and is easily accessible by road, flight or rail. The BPT is
                  hosted in the PokerBaazi LIVE room aboard Majestic Pride in
                  Panjim, and is a 25 km drive from the airport. The vessel is
                  docked in River Mandovi, and is accessible via Majestic Pride
                  Jettys that are available round the clock at intervals of
                  10-15 minutes. Ensure that you get there well before time to
                  avoid any delays!
                </p>
              </div>
            </div>
            <div class="col-md-6 mb-4">
              <div className={styles.playerguisesec}>
                <Image
                  src={PGimgB.src}
                  width={1500}
                  height={999}
                  alt=""
                  className="img-fluid w-100 mb-4"
                ></Image>
                <h2>Accommodation</h2>
                <p>
                  Panjim has tons of hotels to choose from! However, a point to
                  note is that the BPT attracts a large number of players from
                  across the country, so booking your stay well in advance is a
                  good idea. Alternatively, you could choose from our packages
                  and let us do all the running around!
                </p>

                <Link className="comanbutton" href="packages">
                  PACKAGES
                </Link>
              </div>
            </div>
            <div class="col-md-6 mb-4">
              <div className={styles.playerguisesec}>
                <Image
                  src={PGimgC.src}
                  width={1500}
                  height={999}
                  alt=""
                  className="img-fluid w-100 mb-4"
                ></Image>
                <h2>Cashier</h2>
                <p>
                  The PokerBaazi LIVE room has a dedicated Cash Cage for players
                  to make their buy-ins and cashouts with ease. All tournament
                  registrations take place at the cashier, where you will
                  receive your registration confirmation along your seating card
                  to the event. Additionally, players can choose to buy-in for
                  events via the PokerBaazi.com gaming client to save the
                  trouble of queuing-up for registrations before an event.
                </p>
              </div>
            </div>
            <div class="col-md-6 mb-4">
              <div className={styles.playerguisesec}>
                <Image
                  src={PGimgD.src}
                  width={1500}
                  height={999}
                  alt=""
                  className="img-fluid w-100 mb-4"
                ></Image>
                <h2>Entertainment</h2>
                <p>
                  Apart from Poker, there are tons of games, activities,
                  restaurants and shows scheduled all day-long at the Majestic
                  Pride Casino. You could give some of the house games a spin if
                  you’re feeling lucky, or watch one of the many shows organised
                  by the casino on the top deck. House games at the casino
                  include Roulette, Blackjack, Baccarat, Casino War, 3 Card
                  Poker, 5 Card Poker, Mini Flush, Slot Machines Tai Sai and
                  more! Visit the spanking new lounge area aboard the Majestic
                  Pride and relax at the brand new Shisha Lounge!{" "}
                </p>
              </div>
            </div>
          </div>
          <div className={styles.playerguisesec}>
            <div class="row align-items-center">
              <div class="col-md-6 mb-4">
                <Image
                  src={PGimgE.src}
                  width={1500}
                  height={999}
                  alt=""
                  className="img-fluid w-100 mb-4"
                ></Image>
              </div>
              <div class="col-md-6 mb-4">
                <h2>Player Services</h2>
                <p>
                  The comfort of our players is our top-most priority. A
                  dedicated PokerBaazi LIVE front desk has been set up at the
                  Jetty for all queries and information. Once aboard the ship,
                  our team will take care of all our players’ requirements
                  including any additional requests they may have. An airport
                  pick/drop facility will also be provided for players who wish
                  to make use of it, along with the option of booking a
                  stay/travel package with us beforehand. Details of the same
                  can be found in the “Packages” Section. Additionally, players
                  can reach out to us on the below numbers for further queries:
                  <br /> +9158885086, +9158885088
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
