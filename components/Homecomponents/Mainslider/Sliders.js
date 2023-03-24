import React from "react";
import Image from "next/image";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import homebanner2022a from "../../../assets/images/homebanners/2022/BPT-winner-website-gaurav.jpg";
import homebanner2022b from "../../../assets/images/homebanners/2022/BPT-winner-website-Karunanithi.jpg";
import homebanner2022c from "../../../assets/images/homebanners/2022/BPT-winner-website-nitin.jpg";
import homebanner2022d from "../../../assets/images/homebanners/2022/BPT-winner-website-ujjwal.jpg";
import homebanner2022e from "../../../assets/images/homebanners/2022/BPT-winner-website-zarvan.jpg";
import homebanner2020a from "../../../assets/images/homebanners/2020/kshitij.jpg";
import homebanner2020b from "../../../assets/images/homebanners/2020/devang.jpg";
import homebanner2020c from "../../../assets/images/homebanners/2020/ashish-ahuja.jpg";
import homebanner2020d from "../../../assets/images/homebanners/2020/navi.jpg";
import homebanner2020e from "../../../assets/images/homebanners/2020/tanmei.jpg";
import homebanner2019a from "../../../assets/images/homebanners/2019/winner-rhit.jpg";
import homebanner2019b from "../../../assets/images/homebanners/2019/winner-rohan.jpg";
import homebanner2019c from "../../../assets/images/homebanners/2019/winner-gokul.jpg";
import homebanner2019d from "../../../assets/images/homebanners/2019/winner-bharat.jpg";
import homebanner2019e from "../../../assets/images/homebanners/2019/winner-abhijeet.jpg";
import "@splidejs/react-splide/css";
import styles from "./Sliders.module.css";

function Sliders() {
  return (
    <>
      <section className=" pt-5 pb-3">
        <div className="container">
          <div className=" homefullbanner mb-5">
            <h1 className={styles["mainheads"] + " " + ["text-center"]}>
              Baazi Poker Tour 2022 Winners
            </h1>
            <Splide
              options={{ rewind: true, perPage: 1 }}
              aria-label="My Favorite Images"
            >
              <SplideSlide>
                <Image
                  src={homebanner2022a.src}
                  width={1400}
                  height={700}
                  alt="Baazi Poker Tour 2022 Winners"
                  className="img-fluid w-100"
                ></Image>
              </SplideSlide>
              <SplideSlide>
                <Image
                  src={homebanner2022b.src}
                  width={1400}
                  height={700}
                  alt="Baazi Poker Tour 2022 Winners"
                  className="img-fluid w-100"
                ></Image>
              </SplideSlide>
              <SplideSlide>
                <Image
                  src={homebanner2022c.src}
                  width={1400}
                  height={700}
                  alt="Baazi Poker Tour 2022 Winners"
                  className="img-fluid w-100"
                ></Image>
              </SplideSlide>
              <SplideSlide>
                <Image
                  src={homebanner2022d.src}
                  width={1400}
                  height={700}
                  alt="Baazi Poker Tour 2022 Winners"
                  className="img-fluid w-100"
                ></Image>
              </SplideSlide>
              <SplideSlide>
                <Image
                  src={homebanner2022e.src}
                  width={1400}
                  height={700}
                  alt="Baazi Poker Tour 2022 Winners"
                  className="img-fluid w-100"
                ></Image>
              </SplideSlide>
            </Splide>
          </div>
          <div className=" homefullbanner mb-5">
            <h2 className={styles["mainheads"] + " " + ["text-center"]}>
              Baazi Poker Tour 2020 Winners
            </h2>
            <Splide
              options={{ rewind: true, perPage: 1 }}
              aria-label="My Favorite Images"
            >
              <SplideSlide>
                <Image
                  src={homebanner2020a.src}
                  width={1400}
                  height={700}
                  alt="Baazi Poker Tour 2022 Winners"
                  className="img-fluid w-100"
                ></Image>
              </SplideSlide>
              <SplideSlide>
                <Image
                  src={homebanner2020b.src}
                  width={1400}
                  height={700}
                  alt="Baazi Poker Tour 2022 Winners"
                  className="img-fluid w-100"
                ></Image>
              </SplideSlide>
              <SplideSlide>
                <Image
                  src={homebanner2020c.src}
                  width={1400}
                  height={700}
                  alt="Baazi Poker Tour 2022 Winners"
                  className="img-fluid w-100"
                ></Image>
              </SplideSlide>
              <SplideSlide>
                <Image
                  src={homebanner2020d.src}
                  width={1400}
                  height={700}
                  alt="Baazi Poker Tour 2022 Winners"
                  className="img-fluid w-100"
                ></Image>
              </SplideSlide>
              <SplideSlide>
                <Image
                  src={homebanner2020e.src}
                  width={1400}
                  height={700}
                  alt="Baazi Poker Tour 2022 Winners"
                  className="img-fluid w-100"
                ></Image>
              </SplideSlide>
            </Splide>
          </div>
          <div className=" homefullbanner mb-5">
            <h2 className={styles["mainheads"] + " " + ["text-center"]}>
              Baazi Poker Tour 2019 Winners
            </h2>
            <Splide
              options={{ rewind: true, perPage: 1 }}
              aria-label="My Favorite Images"
            >
              <SplideSlide>
                <Image
                  src={homebanner2019a.src}
                  width={1400}
                  height={700}
                  alt="Baazi Poker Tour 2022 Winners"
                  className="img-fluid w-100"
                ></Image>
              </SplideSlide>
              <SplideSlide>
                <Image
                  src={homebanner2019b.src}
                  width={1400}
                  height={700}
                  alt="Baazi Poker Tour 2022 Winners"
                  className="img-fluid w-100"
                ></Image>
              </SplideSlide>
              <SplideSlide>
                <Image
                  src={homebanner2019c.src}
                  width={1400}
                  height={700}
                  alt="Baazi Poker Tour 2022 Winners"
                  className="img-fluid w-100"
                ></Image>
              </SplideSlide>
              <SplideSlide>
                <Image
                  src={homebanner2019d.src}
                  width={1400}
                  height={700}
                  alt="Baazi Poker Tour 2022 Winners"
                  className="img-fluid w-100"
                ></Image>
              </SplideSlide>
              <SplideSlide>
                <Image
                  src={homebanner2019e.src}
                  width={1400}
                  height={700}
                  alt="Baazi Poker Tour 2022 Winners"
                  className="img-fluid w-100"
                ></Image>
              </SplideSlide>
            </Splide>
          </div>
        </div>
      </section>
    </>
  );
}

export default Sliders;
