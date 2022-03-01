import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";

interface Props {
    index: number;
    CORRECT: string | undefined;
    question: string;
    description: string;
}

const Question: NextPage<Props> = ({
    index,
    CORRECT,
    question,
    description,
}) => {
    const [answer, setAnswer] = useState("");
    const [answered, setAnswered] = useState(false);
    const [correct, setCorrect] = useState(false);

    useEffect(() => {
        setAnswer("");
        setAnswered(false);
        setCorrect(false);
    }, [index]);

    const checkAnswer = () => {
        setAnswered(true);
        if (answer === CORRECT) setCorrect(true);
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

            <h1 className={styles.question}>{question}</h1>
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
                    <p className={styles.description}>{description}</p>
                    <br />
                    <Link href={"/" + (Number(index) + 1).toString()}>
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

export default Question;
