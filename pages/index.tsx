import type { NextPage } from "next";
import Days from "../components/days";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useState } from "react";

const Home: NextPage = () => {
    const currDate = new Date();
    const dayOneDate = new Date(2022, 2, 8);
    const jokeDate = new Date(2022, 2, 14);

    const [answer, setAnswer] = useState("");
    const [correct, setCorrect] = useState(false);

    const checkAnswer = () => {
        if (answer === process.env.NEXT_PUBLIC_KEY) setCorrect(true);
    };

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
                    <p className={styles.subtitle}>
                        Come back on March 8, 2022!
                    </p>
                </>
            ) : (
                <>
                    <Days />
                    <br />
                    {currDate.getTime() >= jokeDate.getTime() ? (
                        <>
                            <input
                                type="text"
                                placeholder="The Code (26 Letters)..."
                                value={answer}
                                onChange={(e) => setAnswer(e.target.value)}
                                className={styles.input}
                            />
                            <button
                                className={styles.button}
                                onClick={() => checkAnswer()}
                            >
                                Check My Answer
                            </button>
                            <br />
                            {correct ? (
                                <Link href={"/joke"}>
                                    <a className={styles.button}>
                                        Give me the Joke
                                    </a>
                                </Link>
                            ) : (
                                <></>
                            )}
                        </>
                    ) : (
                        <></>
                    )}
                </>
            )}
        </main>
    );
};

export default Home;
