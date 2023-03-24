import React from "react";
import Image from "next/image";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import homereviewimga from "../../../assets/images/reviewthumb/Kartik-150x150.png";
import homereviewimgb from "../../../assets/images/reviewthumb/Simon-150x150.png";
import homereviewimgc from "../../../assets/images/reviewthumb/Puneet-Dua-150x150.png";
import dottedbg from "../../../assets/images/dottted-bg.png";
import "@splidejs/react-splide/css";
import styles from "./Homereview.module.css";

function Homereview() {
  return (
    <>
      <section className=" pt-5 pb-5">
        <div className="container pb-5">
          <h2 className={styles["mainheads1"] + " " + ["mb-3 mb-sm-5"]}>
            From our
            <br /> Baazigars
          </h2>
          <Splide
            options={{
              rewind: true,
              perPage: 2,
              breakpoints: {
                640: {
                  perPage: 1,
                },
              },
              gap: "1rem",
            }}
            aria-label="My Favorite Images"
          >
            <SplideSlide>
              <div
                className={styles.qodef_testimonial_content}
                id="qodef-testimonial-144"
              >
                <div className={styles.qodef_testimonial_heading}>
                  <div className={styles.qodef_testimonial_image}>
                    <Image
                      src={homereviewimga.src}
                      width={150}
                      height={150}
                      alt=""
                      className="img-fluid w-100"
                    ></Image>
                  </div>
                  <span className={styles.qodef_testimonial_type_id}>
                    <span className={styles.qodef_bg_svg}>
                      <Image
                        src={dottedbg.src}
                        width={229}
                        height={223}
                        alt=""
                        className="img-fluid w-100"
                      ></Image>
                    </span>
                    <span className={styles.qodef_testimonial_icon_holder}>
                      “{" "}
                    </span>
                  </span>
                </div>
                <div className={styles.qodef_testimonial_text_holder}>
                  <p className="qodef-testimonial-text">
                    “I made my very first LIVE Final Table at BPT ‘16, and am
                    extremely excited about the upcoming Edition! Looking
                    forward to trademark Baazi hospitality and some big events
                    at BPT ’19!”
                  </p>
                  <div className="qodef-testimonial-author-holder clearfix">
                    <h5 className="qodef-testimonial-author-name">
                      <span>
                        Kartik Ved (High-Roller - 2nd Runner Up, BPT’16)
                      </span>
                    </h5>
                  </div>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div
                className={styles.qodef_testimonial_content}
                id="qodef-testimonial-144"
              >
                <div className={styles.qodef_testimonial_heading}>
                  <div className={styles.qodef_testimonial_image}>
                    <Image
                      src={homereviewimgb.src}
                      width={150}
                      height={150}
                      alt=""
                      className="img-fluid w-100"
                    ></Image>
                  </div>
                  <span className={styles.qodef_testimonial_type_id}>
                    <span className={styles.qodef_bg_svg}>
                      <Image
                        src={dottedbg.src}
                        width={229}
                        height={223}
                        alt=""
                        className="img-fluid w-100"
                      ></Image>
                    </span>
                    <span className={styles.qodef_testimonial_icon_holder}>
                      “{" "}
                    </span>
                  </span>
                </div>
                <div className={styles.qodef_testimonial_text_holder}>
                  <p className="qodef-testimonial-text">
                    “I’m looking forward to the next Edition of BPT! We have
                    missed the series for a few years now. I have very special
                    memories of the BPT, having finished 3rd in the Main Event
                    back in 2016!”
                  </p>
                  <div className="qodef-testimonial-author-holder clearfix">
                    <h5 className={styles.qodef_testimonial_author_name}>
                      <span>
                        Simon Mint (Main Event - 2nd Runner Up, BPT’16)
                      </span>
                    </h5>
                  </div>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div
                className={styles.qodef_testimonial_content}
                id="qodef-testimonial-144"
              >
                <div className={styles.qodef_testimonial_heading}>
                  <div className={styles.qodef_testimonial_image}>
                    <Image
                      src={homereviewimgc.src}
                      width={150}
                      height={150}
                      alt=""
                      className="img-fluid w-100"
                    ></Image>
                  </div>
                  <span className={styles.qodef_testimonial_type_id}>
                    <span className={styles.qodef_bg_svg}>
                      <Image
                        src={dottedbg.src}
                        width={229}
                        height={223}
                        alt=""
                        className="img-fluid w-100"
                      ></Image>
                    </span>
                    <span className={styles.qodef_testimonial_icon_holder}>
                      “{" "}
                    </span>
                  </span>
                </div>
                <div className={styles.qodef_testimonial_text_holder}>
                  <p className="qodef-testimonial-text">
                    {" "}
                    “I’m absolutely stoked that the BPT is back! The previous
                    Edition witnessed an incredible turnout and to be honest,
                    I’ve been waiting for Edition 2 ever since!”
                  </p>
                  <div className="qodef-testimonial-author-holder clearfix">
                    <h5 className={styles.qodef_testimonial_author_name}>
                      <span>Puneet Dua (Main Event Winner, BPT’16)</span>
                    </h5>
                  </div>
                </div>
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </section>
    </>
  );
}

export default Homereview;
