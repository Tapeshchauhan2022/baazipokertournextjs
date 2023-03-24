import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "./style.module.css";
import gallery1 from "../../assets/images/gallery/2022/DSC03606-1.jpg";

const myLoader = ({ src, width, quality }) => {
  return `http://localhost:3000/${src}?w=${width}&q=${quality || 75}`;
};
export default function index(props) {
  const posts = props.posts;
  return (
    <>
      <Head>
        <title>Gallery 2022</title>
        <meta name="description" content="About Us" />
      </Head>
      <section className="innersectioc">
        <div className="container">
          <h1 className="mainheads1 textgloden">Gallery 2022</h1>
        </div>
      </section>
      <section class="pt-4 pt-sm-5 pb-1 pb-sm-4">
        <div class="container py-3">
          <div class={styles.maingallery}>
            <ul class="row p-0">
              {posts.map((post) => (
                <li class="col-md-4 col-sm-6" key={post.id}>
                  <div class={styles.gallerartcicel}>
                    <Link href={gallery1.src}>
                      <Image
                        src={require(`/assets/${post.src}`)}
                        loader={myLoader}
                        width={350}
                        height={350}
                        alt="test"
                        className="img-fluid w-100"
                      ></Image>
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
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
