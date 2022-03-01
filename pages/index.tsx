import type { NextPage } from "next";
import Days from "../components/days";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
    const currDate = new Date();
    const dayOneDate = new Date(2022, 2, 8);
    // const dayOneDate = new Date(2022, 0, 31);

    return (
        <main className={styles.main}>
            <Head>
                <title>3.14</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Squirrel?" />
                <meta name="author" content="Nyx Iskandar"></meta>
                <meta property="og:title" content="3.14" />
                <meta property="og:description" content="Squirrel?" />
                <meta
                    property="og:image"
                    content="https://pi-day-2022.vercel.app/favicon.ico"
                />
                <meta
                    property="og:url"
                    content="https://pi-day-2022.vercel.app/"
                />
                <meta property="og:type" content="website" />
            </Head>

            {currDate.getTime() < dayOneDate.getTime() ? (
                <>
                    <h1 className={styles.title}>Pi Day 🥧</h1>
                    <p className={styles.subtitle}>Come back on March 8, 2022!</p>
                </>
            ) : (
                <Days />
            )}
        </main>
    );
};

export default Home;
