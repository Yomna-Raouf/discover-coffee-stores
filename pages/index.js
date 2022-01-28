import Head from "next/head";

import { Banner } from "@/components/molecules";

import styles from "@/styles/Home.module.css";

export default function Home() {
  const getNearbyStores = () => {
    console.log("Helloooooz");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoisseur</title>
        <meta name="description" content="Explore coffee stores near you!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner
          buttonLabel="View stores nearby"
          buttonHandler={getNearbyStores}
        />
      </main>
    </div>
  );
}
