import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import Footerlogo from "../../../assets/images/bpt_website_logo2.png";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaArrowAltCircleUp,
} from "react-icons/fa";
import Footerpokerlogo from "../../../assets/images/pokerbaazi-logo-white-2.png";
export default function Footer() {
  return (
    <>
      <footer className={styles["footersec"] + " " + ["pt-5 pb-4"]}>
        <div className="container py-4">
          <div className="row">
            <div className="col-md-3 mb-3">
              <Image
                src={Footerlogo.src}
                width={200}
                height={61}
                alt=""
                className="img-fluid"
              ></Image>
            </div>
            <div className="col-md-3 mb-3">
              <h5 className="text-white mb-3">Links</h5>
              <Link href="players-guide" className="text-white">
                Players Guide
              </Link>
            </div>
            <div className="col-md-3 mb-3">
              <h5 className="text-white mb-3">Presented By</h5>
              <Image
                src={Footerpokerlogo.src}
                width={220}
                height={46}
                alt=""
                className="img-fluid"
              ></Image>
            </div>
            <div className="col-md-3 mb-3">
              <h5 className="text-white mb-3">Follow Us</h5>
              <div className={styles.footersocila}>
                <Link
                  href="https://www.facebook.com/baazipokertour"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  href="https://www.instagram.com/_baazipokertour/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaInstagram />
                </Link>
                <Link
                  href="https://twitter.com/baazipokertour"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaTwitter />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-danger btn-floating btn-lg"
          id="btn-back-to-top"
        >
          <FaArrowAltCircleUp />
        </button>
      </footer>
    </>
  );
}
