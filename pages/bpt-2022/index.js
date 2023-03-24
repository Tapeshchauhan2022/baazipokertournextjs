import React from "react";
import Head from "next/head";
import styles from "./style.module.css";
export default function index(props) {
  return (
    <>
      <Head>
        <title>BPT 2022</title>
        <meta name="description" content="About Us" />
      </Head>
      <section className="innersectioc">
        <div className="container">
          <h1 className="mainheads1 textgloden">BPT 2022</h1>
        </div>
      </section>
      <section class="pt-4 pt-sm-5 pb-1 pb-sm-4">
        <div class="container py-3">
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className={styles.videowrapers}>
                <h5 className="mb-3">BPT KICKOFF 54 LAC+ HEADS UP</h5>
                <iframe
                  src="https://www.youtube.com/embed/LNTKiuSbvcU"
                  allow="autoplay; encrypted-media"
                  className="fluidvids-item"
                  data-fluidvids="loaded"
                  width="200"
                  height="100"
                  frameborder="0"
                ></iframe>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className={styles.videowrapers}>
                <h5 className="mb-3">BPT BIG BOUNTY 15K</h5>
                <iframe
                  src="https://www.youtube.com/embed/jwKZc0rSAXg"
                  allow="autoplay; encrypted-media"
                  className="fluidvids-item"
                  data-fluidvids="loaded"
                  width="200"
                  height="100"
                  frameborder="0"
                ></iframe>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className={styles.videowrapers}>
                <h5 className="mb-3">BPT HIGHROLLER FINAL TABLE</h5>
                <iframe
                  src="https://www.youtube.com/embed/hUjb42DEGg8"
                  allow="autoplay; encrypted-media"
                  className="fluidvids-item"
                  data-fluidvids="loaded"
                  width="200"
                  height="100"
                  frameborder="0"
                ></iframe>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className={styles.videowrapers}>
                <h5 className="mb-3">BPT MAIN EVENT FEATURE TABLE</h5>
                <iframe
                  src="https://www.youtube.com/embed/vaH6MSjX9yM"
                  allow="autoplay; encrypted-media"
                  className="fluidvids-item"
                  data-fluidvids="loaded"
                  width="200"
                  height="100"
                  frameborder="0"
                ></iframe>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className={styles.videowrapers}>
                <h5 className="mb-3">BPT 35K MAIN EVENT FINAL TABLE</h5>
                <iframe
                  src="https://www.youtube.com/embed/c-Z9GzOSjVo"
                  allow="autoplay; encrypted-media"
                  className="fluidvids-item"
                  data-fluidvids="loaded"
                  width="200"
                  height="100"
                  frameborder="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Fetching data from the JSON file
import fsPromises from "fs/promises";
import path from "path";
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "/pages/api/Data.json");
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);
  return {
    props: objectData,
  };
}
