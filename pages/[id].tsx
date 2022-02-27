import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { useState } from "react";

const Quiz: NextPage = () => {
    const router = useRouter();
    const { id } = router.query;

    const currDate = new Date();
    // const dayOneDate = new Date(2022, 2, 8);
    const dayOneDate = new Date(2022, 0, 31);

    const dayTwoDate = new Date(2022, 2, 9);
    // const dayTwoDate = new Date(2022, 1, 1);

    const dayThreeDate = new Date(2022, 2, 10);
    // const dayThreeDate = new Date(2022, 1, 2);

    const dayFourDate = new Date(2022, 2, 11);
    // const dayFourDate = new Date(2022, 1, 3);

    const dayFiveDate = new Date(2022, 2, 12);
    // const dayFiveDate = new Date(2022, 1, 4);

    const daySixDate = new Date(2022, 2, 13);
    // const daySixDate = new Date(2022, 1, 5);

    switch (id) {
        case "1":
            if (currDate.getTime() >= dayOneDate.getTime()) return <Q1 />;
        case "2":
            if (currDate.getTime() >= dayOneDate.getTime()) return <Q2 />;
        case "3":
            if (currDate.getTime() >= dayOneDate.getTime()) return <Q3 />;
        case "4":
            if (currDate.getTime() >= dayOneDate.getTime()) return <Q4 />;
        case "5":
            if (currDate.getTime() >= dayOneDate.getTime()) return <Q5 />;
        default:
            return <Invalid />;
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

const Invalid: NextPage = () => {
    return (
        <main className={styles.main}>
            <Meta />
            <h1 className={styles.title}>Oops! This page does not exist!</h1>
            <br />
            <Link href="/">
                <a className={styles.button}>Back to Home</a>
            </Link>
        </main>
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
            <h1 className={styles.question}>What is 1 + 1?</h1>
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
                    <p className={styles.description}>Nice and easy 😁</p>
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

const Q2: NextPage = () => {
    const [answer, setAnswer] = useState("");
    const [answered, setAnswered] = useState(false);
    const [correct, setCorrect] = useState(false);
    const CORRECT = process.env.NEXT_PUBLIC_Q2;

    const checkAnswer = () => {
        setAnswered(true);
        if (answer === CORRECT) setCorrect(true);
    };

    return (
        <main className={styles.main}>
            <Meta />
            <h1 className={styles.question}>
                Solve for x, where x = 162*172839506
            </h1>
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
                    <p className={styles.description}>
                        Fun fact: it&apos; a palindrome!
                    </p>
                    <br />
                    <Link href="/3">
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

const Q3: NextPage = () => {
    const [answer, setAnswer] = useState("");
    const [answered, setAnswered] = useState(false);
    const [correct, setCorrect] = useState(false);
    const CORRECT = process.env.NEXT_PUBLIC_Q3;

    const checkAnswer = () => {
        setAnswered(true);
        if (answer === CORRECT) setCorrect(true);
    };

    return (
        <main className={styles.main}>
            <Meta />
            <h1 className={styles.question}>Solve 8/2(2+2)</h1>
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
                    <p className={styles.description}>
                        8/2 = 4, then 2+2 = 4, finally 4*4 = 16
                    </p>
                    <br />
                    <Link href="/4">
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

const Q4: NextPage = () => {
    const [answer, setAnswer] = useState("");
    const [answered, setAnswered] = useState(false);
    const [correct, setCorrect] = useState(false);
    const CORRECT = process.env.NEXT_PUBLIC_Q4;

    const checkAnswer = () => {
        setAnswered(true);
        if (answer === CORRECT) setCorrect(true);
    };

    return (
        <main className={styles.main}>
            <Meta />
            <h1 className={styles.question}>
                Xavier has 10 apples. He then buys 2 more apples and 6 bananas.
                If x:12 is the ratio of apples to bananas, what is x?
            </h1>
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
                    <p className={styles.description}>
                        When ratios were simple :&quot;)
                    </p>
                    <br />
                    <Link href="/5">
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

const Q5: NextPage = () => {
    const [answer, setAnswer] = useState("");
    const [answered, setAnswered] = useState(false);
    const [correct, setCorrect] = useState(false);
    const CORRECT = process.env.NEXT_PUBLIC_Q5;

    const checkAnswer = () => {
        setAnswered(true);
        if (answer === CORRECT) setCorrect(true);
    };

    return (
        <main className={styles.main}>
            <Meta />
            <h1 className={styles.question}>
                Ross pays $535 for a couch after incurring a 7% GST rate. What
                was the price of the couch before GST? Exclude &quot;$&quot; in
                your answer!
            </h1>
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
                    <p className={styles.description}>
                        pivot... Pivot... PIVOT!!! #F.R.I.E.N.D.S.
                    </p>
                    <br />
                    <Link href="/6">
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
