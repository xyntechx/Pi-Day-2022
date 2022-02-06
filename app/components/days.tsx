import styles from "../styles/styles.css";

export function links() {
    return [{ rel: "stylesheet", href: styles }];
}

export default function Days() {
    const currDate = new Date();
    const dayOneDate = new Date(2022, 2, 8);
    // const dayOneDate = new Date(2022, 0, 31);

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

    const jokeDate = new Date(2022, 2, 14);

    return (
        <>
            <section className="days">
                <a
                    href={
                        currDate.getTime() >= dayOneDate.getTime() ? "/1" : "/"
                    }
                    className={
                        currDate.getTime() >= dayOneDate.getTime()
                            ? "day"
                            : "disabled"
                    }
                >
                    Day 1
                </a>
                <a
                    href={
                        currDate.getTime() >= dayTwoDate.getTime() ? "/8" : "/"
                    }
                    className={
                        currDate.getTime() >= dayTwoDate.getTime()
                            ? "day"
                            : "disabled"
                    }
                >
                    Day 2
                </a>
                <a
                    href={
                        currDate.getTime() >= dayThreeDate.getTime()
                            ? "/15"
                            : "/"
                    }
                    className={
                        currDate.getTime() >= dayThreeDate.getTime()
                            ? "day"
                            : "disabled"
                    }
                >
                    Day 3
                </a>
            </section>
            <h1 className="title">Pi Day 🥧</h1>
            <section className="days">
                <a
                    href={
                        currDate.getTime() >= dayFourDate.getTime()
                            ? "/20"
                            : "/"
                    }
                    className={
                        currDate.getTime() >= dayFourDate.getTime()
                            ? "day"
                            : "disabled"
                    }
                >
                    Day 4
                </a>
                <a
                    href={
                        currDate.getTime() >= dayFiveDate.getTime()
                            ? "/25"
                            : "/"
                    }
                    className={
                        currDate.getTime() >= dayFiveDate.getTime()
                            ? "day"
                            : "disabled"
                    }
                >
                    Day 5
                </a>
                <a
                    href={
                        currDate.getTime() >= daySixDate.getTime() ? "/26" : "/"
                    }
                    className={
                        currDate.getTime() >= daySixDate.getTime()
                            ? "day"
                            : "disabled"
                    }
                >
                    Day 6
                </a>
            </section>
        </>
    );
}
