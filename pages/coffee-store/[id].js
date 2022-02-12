import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

const CoffeeStore = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>CoffeeStore {router.query.id}</title>
      </Head>
      <Link href="/">
        <a>Back to home</a>
      </Link>

      <Link href="/">
        <a>Back to dynamic page</a>
      </Link>

      <div>CoffeeStore {router.query.id} </div>
    </>
  );
};

export default CoffeeStore;
