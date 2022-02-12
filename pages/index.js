import Head from "next/head";
import Image from "next/image";

import { Banner, Card } from "@/components/molecules";

import CoffeeStores from "../data/coffee-stores.json";

import styles from "@/styles/Home.module.css";

export async function getStaticProps(context) {
  console.log("getStaticProps");
  return {
    props: { CoffeeStores },
  };
}

export default function Home({ CoffeeStores }) {
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

        <div className={styles.heroImage}>
          <Image
            alt="cofee"
            src="/static/hero-image.png"
            width={700}
            height={400}
          />
        </div>

        <div className={styles.cardLayout}>
          {CoffeeStores?.map((CoffeeStore) => (
            <Card
              key={CoffeeStore.id}
              name={CoffeeStore.name}
              imgUrl={CoffeeStore.imgUrl}
              href={`/coffee-store/${CoffeeStore.id}`}
              className={styles.card}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
