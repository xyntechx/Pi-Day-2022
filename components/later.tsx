import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

interface Props {
    date: string;
}

const Later: NextPage<Props> = ({ date }) => {
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
            <h1 className={styles.title}>Come back on {date}!</h1>
            <br />
            <Link href="/">
                <a className={styles.button}>Back to Home</a>
            </Link>
        </main>
    );
};

export default Later;
