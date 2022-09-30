import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Employee List | Home</title>
        <meta name="keywords" content="employees" />
      </Head>
      <div className="homepage">
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          This is a practice app on how to fetch data in next.js
        </p>
        <Link href="/employees">
          <a className={styles.btn}>See Employee List</a>
        </Link>
      </div>
    </>
  );
}
