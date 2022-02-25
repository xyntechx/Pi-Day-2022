import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { useState } from "react";

const Quiz: NextPage = () => {
    const router = useRouter();
    const { id } = router.query;

    switch (id) {
        case "1":
            return <Q1 />;
        case "2":
        // return <Q2 />;
        default:
            return <h1>hi?</h1>;
    }
};

const Meta: NextPage = () => {
    return (
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
            <meta property="og:url" content="https://pi-day-2022.vercel.app/" />
            <meta property="og:type" content="website" />
        </Head>
    );
};

const Q1: NextPage = () => {
    const [answer, setAnswer] = useState("");
    const [answered, setAnswered] = useState(false);
    const [correct, setCorrect] = useState(false);
    const CORRECT = process.env.NEXT_PUBLIC_Q1;

    const checkAnswer = () => {
        setAnswered(true);
        if (answer === CORRECT) setCorrect(true);
    };

    return (
        <main className={styles.main}>
            <Meta />
            <h1 className={styles.title}>What is 1 + 1?</h1>
            <input
                type="text"
                placeholder="My Answer"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                className={styles.input}
                onFocus={() => setAnswered(false)}
            />
            <button className={styles.button} onClick={() => checkAnswer()}>
                Check My Answer
            </button>
            <br />
            {correct ? (
                <>
                    <p className={styles.description}>Correct!</p>
                    <br />
                    <Link href="/2">
                        <a className={styles.button}>Next Question</a>
                    </Link>
                </>
            ) : (
                <>
                    {answered ? (
                        <p className={styles.description}>
                            Oops! That&apos;s not right...
                        </p>
                    ) : (
                        <></>
                    )}
                </>
            )}
        </main>
    );
};

export default Quiz;
