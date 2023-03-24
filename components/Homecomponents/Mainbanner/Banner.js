import React from "react";
import styles from "./Banner.module.css";
import Image from "next/image";
import paralecximg from "../../../assets/images/BPT_Website_banner.jpg";
import topbannerlogo from "../../../assets/images/pokerbaazi-logo-white-2.png";
import topbannerlogo2 from "../../../assets/images/PB_Live_Website.png";

function Banner() {
  return (
    <>
      <section
        id="parallax1"
        style={{ backgroundImage: `url(${paralecximg.src})` }}
        className={styles["parallax-slide"] + " " + styles["mainbanner"]}
      >
        <div
          className={
            styles["mainbannerinner"] +
            " " +
            ["d-flex align-items-center justify-content-between"]
          }
        >
          <div className="container pt-0 pt-md-5">
            <div className="row justify-content-center">
              <div className="col-lg-7">
                <h5 className="text-white">Baazi Poker Tour </h5>
                <h2 className="text-white">
                  India's Premier
                  <br />
                  Live Poker Series{" "}
                </h2>
                <h5 className="text-white">#LiveTheBaazi </h5>
                <div className="pt-3">
                  <h5 className="text-white">Presented By </h5>
                  <Image
                    src={topbannerlogo.src}
                    width={220}
                    height={46}
                    alt=""
                    className="img-fluid"
                  ></Image>
                </div>
                <div className="pt-3">
                  <h5 className="text-white">Venue </h5>
                  <Image
                    src={topbannerlogo2.src}
                    width={220}
                    height={46}
                    alt=""
                    className="img-fluid"
                  ></Image>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
