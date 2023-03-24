import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "./style.module.css";
import PackageImg from "../../assets/images/playersguide/Image-2.jpg";

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
          <div className={styles.packagesection}>
            <div class="row align-items-center">
              <div class="col-md-6 mb-4 mb-md-0 order-2 order-md-1">
                <div className="me-0 me-md-5 pe-0 pe-md-4">
                  <h2>Play your favourite cash games on PokerBaazi.com</h2>
                </div>
              </div>

              <div class="col-md-6 mb-0 order-1 order-md-2 ">
                <Image
                  src={PackageImg.src}
                  width={1500}
                  height={999}
                  alt=""
                  className="img-fluid w-100 mb-4"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
