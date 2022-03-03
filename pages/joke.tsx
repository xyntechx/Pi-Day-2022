import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import extra from "../styles/Hints.module.css";
import Later from "../components/later";
import { useState } from "react";

const Joke: NextPage = () => {
    const currDate = new Date();
    const jokeDate = new Date(2022, 2, 14);

    const [answer, setAnswer] = useState("");
    const [correct, setCorrect] = useState(false);
    const [answered, setAnswered] = useState(false);

    const checkAnswer = () => {
        setAnswered(true);
        if (answer === process.env.NEXT_PUBLIC_JOKE) setCorrect(true);
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

            {currDate.getTime() >= jokeDate.getTime() ? (
                <>
                    <h1 className={styles.title}>Happy π Day 🎉</h1>
                    <br />
                    <Image
                        src={"/squirrel.jpg"}
                        width={250}
                        height={250}
                        alt="Squirrel?"
                    />
                    <input
                        type="text"
                        placeholder="What's half of the animal above?"
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        className={styles.jokeInput}
                        onFocus={() => setAnswered(false)}
                    />
                    <button
                        className={styles.button}
                        onClick={() => checkAnswer()}
                    >
                        Did I get it?
                    </button>
                    {correct ? (
                        <p className={styles.text}>YES</p>
                    ) : (
                        <>
                            {answered ? (
                                <p className={styles.text}>
                                    Errr not exactly...
                                </p>
                            ) : (
                                <></>
                            )}
                        </>
                    )}
                    <section className={extra.hints}>
                        <div className={extra.tooltip}>
                            <div className={extra.button}>Hint #1</div>
                            <span className={extra.tooltiptext}>
                                Google Translate to Indonesian
                            </span>
                        </div>
                        <div className={extra.tooltip}>
                            <div className={extra.button}>Hint #2</div>
                            <span className={extra.tooltiptext}>
                                Say it out loud
                            </span>
                        </div>
                        <div className={extra.tooltip}>
                            <div className={extra.button}>Hint #3</div>
                            <span className={extra.tooltiptext}>2 letters</span>
                        </div>
                    </section>
                </>
            ) : (
                <Later date={"π Day"} />
            )}
        </main>
    );
};

export default Joke;
