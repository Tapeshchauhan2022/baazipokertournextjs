import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "./style.module.css";

import Aboutusimg from "../../assets/images/BPT_Website_banner_Aboutus.png";
export default function index() {
  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Contact  Us" />
      </Head>

      <section className="innersectioc">
        <div className="container">
          <h1 className="mainheads1 textgloden">Contact Us</h1>
        </div>
      </section>
      <section className="pt-4 pt-sm-5 pb-1 pb-sm-4">
        <div className="container py-3">
          <div className="row">
            <div className="col-md-3 mb-2">
              <h2 className="mainheads-1">Reach out to Us</h2>
            </div>
            <div className="col-md-5  mb-4">
              <form action="#" className="mx-0 mx-md-3">
                <div className={styles["formfirld"] + " " + ["mb-4"]}>
                  <input
                    type="text"
                    name="text-512"
                    value=""
                    size="40"
                    className={styles.forminput}
                    aria-required="true"
                    aria-invalid="false"
                    placeholder="Name*"
                  />
                </div>
                <div className={styles["formfirld"] + " " + ["mb-4"]}>
                  <input
                    type="email"
                    name="email-113"
                    value=""
                    size="40"
                    className={styles.forminput}
                    aria-required="true"
                    aria-invalid="false"
                    placeholder="Email*"
                  />
                </div>
                <div className={styles["formfirld"] + " " + ["mb-4"]}>
                  <input
                    type="text"
                    name="text-941"
                    value=""
                    size="40"
                    className={styles.forminput}
                    aria-invalid="false"
                    placeholder="Subject"
                  />
                </div>
                <div className={styles["formfirld"] + " " + ["mb-4"]}>
                  <textarea
                    name="textarea-642"
                    rows="3"
                    className={styles.forminput}
                    aria-invalid="false"
                    placeholder="Message"
                  ></textarea>
                </div>
                <button className="comanbutton" type="button">
                  <span>
                    <span>Send Message</span>
                    <i className=""></i>
                  </span>
                </button>
              </form>
            </div>
            <div className="col-md-4 ">
              <h5 className=" mb-3 fw-bold">Phone No:</h5>
              <p>+91-9158885086 ,+91-9158885088</p>
            </div>
          </div>{" "}
        </div>
      </section>
    </>
  );
}
