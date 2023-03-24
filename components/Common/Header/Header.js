import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import { useRouter } from "next/router";
import Headerlogo from "../../../assets/images/bpt_website_logo2.png";
export default function Header() {
  const router = useRouter();
  return (
    <div>
      <header className={styles.headers}>
        <div className="container">
          <nav className="navbar navbar-expand-lg  justify-content-between d-flex">
            <div
              className={
                styles["mainlogoos"] +
                " " +
                ["justify-content-between d-flex align-items-center"]
              }
            >
              <Link
                className={styles["navbar-brand"] + " " + ["navbar-brand"]}
                href="/"
              >
                <Image
                  src={Headerlogo.src}
                  width={300}
                  height={91}
                  alt=""
                  className="img-fluid"
                ></Image>
              </Link>
              <button
                className="navbar-toggler text-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <FaBars />
              </button>
            </div>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <ul className={styles["navbar-nav"] + " " + ["navbar-nav"]}>
                <li className={styles["nav-item"] + " " + ["nav-item"]}>
                  <span className={router.pathname == "/" ? "active" : ""}>
                    <Link
                      className={styles["nav-link"] + " " + ["nav-link"]}
                      aria-current="page"
                      href="/"
                    >
                      Home
                    </Link>
                  </span>
                </li>
                <li className={styles["nav-item"] + " " + ["nav-item"]}>
                  <span
                    className={router.pathname == "/about-us" ? "active" : ""}
                  >
                    <Link
                      className={styles["nav-link"] + " " + ["nav-link"]}
                      href="about-us"
                    >
                      About us
                    </Link>
                  </span>
                </li>
                <li
                  className={styles["nav-item"] + " " + ["nav-item dropdown"]}
                >
                  <Link
                    className={
                      styles["nav-link"] + " " + ["nav-link dropdown-toggle"]
                    }
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Gallery
                  </Link>
                  <ul
                    className={
                      styles["dropdown-menu"] + " " + ["dropdown-menu"]
                    }
                  >
                    <li>
                      <Link className="dropdown-item" href="gallery-2022">
                        BPT 2022
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="#">
                        BPT 2020
                      </Link>
                    </li>
                  </ul>
                </li>
                <li
                  className={styles["nav-item"] + " " + ["nav-item dropdown"]}
                >
                  <Link
                    className={
                      styles["nav-link"] + " " + ["nav-link dropdown-toggle"]
                    }
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Stream
                  </Link>
                  <ul
                    className={
                      styles["dropdown-menu"] + " " + ["dropdown-menu"]
                    }
                  >
                    <li>
                      <Link className="dropdown-item" href="bpt-2022">
                        BPT 2022
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="#">
                        BPT 2020
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="Bpt2022">
                        BPT 2019
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className={styles["nav-item"] + " " + ["nav-item"]}>
                  <span
                    className={router.pathname == "/contact-us" ? "active" : ""}
                  >
                    {" "}
                    <Link
                      className={styles["nav-link"] + " " + ["nav-link"]}
                      href="contact-us"
                    >
                      Contact us
                    </Link>
                  </span>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}
