import { NextPage } from "next";
import Head from "next/head";
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
    const answer = useState("");

    return (
        <main className={styles.main}>
            <Meta />
            <p>Question 1</p>
        </main>
    );
};

export default Quiz;
