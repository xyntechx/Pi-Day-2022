import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Days: NextPage = () => {
    const currDate = new Date();
    const dayOneDate = new Date(2022, 2, 8);
    const dayTwoDate = new Date(2022, 2, 9);
    const dayThreeDate = new Date(2022, 2, 10);
    const dayFourDate = new Date(2022, 2, 11);
    const dayFiveDate = new Date(2022, 2, 12);
    const daySixDate = new Date(2022, 2, 13);

    return (
        <>
            <section className={styles.days}>
                <Link
                    href={
                        currDate.getTime() >= dayOneDate.getTime() ? "/1" : "/"
                    }
                >
                    <a
                        className={
                            currDate.getTime() >= dayOneDate.getTime()
                                ? styles.day
                                : styles.disabled
                        }
                    >
                        Day 1
                    </a>
                </Link>
                <Link
                    href={
                        currDate.getTime() >= dayTwoDate.getTime() ? "/8" : "/"
                    }
                >
                    <a
                        className={
                            currDate.getTime() >= dayOneDate.getTime()
                                ? styles.day
                                : styles.disabled
                        }
                    >
                        Day 2
                    </a>
                </Link>
                <Link
                    href={
                        currDate.getTime() >= dayThreeDate.getTime()
                            ? "/15"
                            : "/"
                    }
                >
                    <a
                        className={
                            currDate.getTime() >= dayOneDate.getTime()
                                ? styles.day
                                : styles.disabled
                        }
                    >
                        Day 3
                    </a>
                </Link>
            </section>
            <h1 className={styles.title}>Pi Day 🥧</h1>
            <section className={styles.days}>
                <Link
                    href={
                        currDate.getTime() >= dayFourDate.getTime()
                            ? "/20"
                            : "/"
                    }
                >
                    <a
                        className={
                            currDate.getTime() >= dayOneDate.getTime()
                                ? styles.day
                                : styles.disabled
                        }
                    >
                        Day 4
                    </a>
                </Link>
                <Link
                    href={
                        currDate.getTime() >= dayFiveDate.getTime()
                            ? "/25"
                            : "/"
                    }
                >
                    <a
                        className={
                            currDate.getTime() >= dayFiveDate.getTime()
                                ? styles.day
                                : styles.disabled
                        }
                    >
                        Day 5
                    </a>
                </Link>
                <Link
                    href={
                        currDate.getTime() >= daySixDate.getTime() ? "/26" : "/"
                    }
                >
                    <a
                        className={
                            currDate.getTime() >= daySixDate.getTime()
                                ? styles.day
                                : styles.disabled
                        }
                    >
                        Day 6
                    </a>
                </Link>
            </section>
        </>
    );
};

export default Days;
