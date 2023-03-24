import Head from "next/head";

import Banner from "../components/Homecomponents/Mainbanner/Banner";
import Sliders from "../components/Homecomponents/Mainslider/Sliders";
import Homereview from "../components/Homecomponents/Homereview/Homereview";
import Homeparalexbanner from "../components/Homecomponents/Homeparalexbanner/Homeparalexbanner";

export default function Home() {
  return (
    <>
      <Head>
        <title>Baazi Poker Tour - Baazi Games</title>
        <meta name="description" content="Baazi Poker Tour - Baazi Games" />
      </Head>
      <main>
        <Banner />
        <Sliders />
        <Homereview />
        <Homeparalexbanner />
      </main>
    </>
  );
}
