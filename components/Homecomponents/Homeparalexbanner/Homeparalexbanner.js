import React from "react";
import Link from "next/link";
import styles from "./Homeparalexbanner.module.css";
import paralecximgb from "../../../assets/images/main-home-parallax.jpg";
function Homeparalexbanner() {
  return (
    <>
      <section
        id="parallax11"
        style={{ backgroundImage: `url(${paralecximgb.src})` }}
        className={styles["paralexcontent"] + " " + ["text-center"]}
      >
        <div className="container">
          <div className="px-2">
            <h2 className="mainheads-1 text-white mb-5">
              If you’re visiting us for the first time, visit our Players Guide
              Section for a complete overview on our services, facilities and
              policies.
            </h2>
            <Link className="comanbutton" href="#">
              <span>Players Guide</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Homeparalexbanner;
