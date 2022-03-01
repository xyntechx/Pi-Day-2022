import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Question from "../components/question";
import { useRouter } from "next/router";

const Quiz: NextPage = () => {
    const router = useRouter();
    const { id } = router.query;

    const currDate = new Date();
    // const dayOneDate = new Date(2022, 2, 8);
    const dayOneDate = new Date(2022, 0, 31);

    // const dayTwoDate = new Date(2022, 2, 9);
    const dayTwoDate = new Date(2022, 1, 1);

    // const dayThreeDate = new Date(2022, 2, 10);
    const dayThreeDate = new Date(2022, 1, 2);

    const dayFourDate = new Date(2022, 2, 11);
    // const dayFourDate = new Date(2022, 1, 3);

    const dayFiveDate = new Date(2022, 2, 12);
    // const dayFiveDate = new Date(2022, 1, 4);

    const daySixDate = new Date(2022, 2, 13);
    // const daySixDate = new Date(2022, 1, 5);

    switch (id) {
        case "1":
            if (currDate.getTime() >= dayOneDate.getTime())
                return (
                    <Question
                        index={1}
                        CORRECT={process.env.NEXT_PUBLIC_Q1}
                        question={"What is 1 + 1?"}
                        description={"Nice and easy 😁"}
                    />
                );
        case "2":
            if (currDate.getTime() >= dayOneDate.getTime())
                return (
                    <Question
                        index={2}
                        CORRECT={process.env.NEXT_PUBLIC_Q2}
                        question={"Solve for x, where x = 162*172839506"}
                        description={"Fun fact: it's a palindrome!"}
                    />
                );
        case "3":
            if (currDate.getTime() >= dayOneDate.getTime())
                return (
                    <Question
                        index={3}
                        CORRECT={process.env.NEXT_PUBLIC_Q3}
                        question={"Solve 8/2(2+2)"}
                        description={"8/2 = 4, then 2+2 = 4, finally 4*4 = 16"}
                    />
                );
        case "4":
            if (currDate.getTime() >= dayOneDate.getTime())
                return (
                    <Question
                        index={4}
                        CORRECT={process.env.NEXT_PUBLIC_Q4}
                        question={
                            "Xavier has 10 apples. He then buys 2 more apples and 6 bananas. If x:12 is the ratio of apples to bananas, what is x?"
                        }
                        description={"When ratios were simple :')"}
                    />
                );
        case "5":
            if (currDate.getTime() >= dayOneDate.getTime())
                return (
                    <Question
                        index={5}
                        CORRECT={process.env.NEXT_PUBLIC_Q5}
                        question={
                            "Ross pays $535 for a couch after incurring a 7% GST rate. What was the price of the couch before GST? Exclude $ in your answer!"
                        }
                        description={
                            "pivot... Pivot... PIVOT!!! #F.R.I.E.N.D.S."
                        }
                    />
                );
        case "6":
            if (currDate.getTime() >= dayOneDate.getTime())
                return (
                    <Question
                        index={6}
                        CORRECT={process.env.NEXT_PUBLIC_Q6}
                        question={
                            "There are 23 flowers and 6 children: Axl, Bob, Claire, Derek, Elle, Finn. The flowers are distributed amongst them, with Axl getting the first flower, Bob getting the second flower, and so on and so forth. Axl will next get the 7th flower, Bob the 8th flower, and so on and so forth. The distribution stops when the last flower has been given out. Who has the least number of flowers?"
                        }
                        description={
                            "Well, at least Finn has Jake #AdventureTime"
                        }
                    />
                );
        case "7":
            if (currDate.getTime() >= dayOneDate.getTime())
                return (
                    <Question
                        index={7}
                        CORRECT={process.env.NEXT_PUBLIC_Q7}
                        question={
                            "Given five letters A L O U D, how many different arrangements can you make with those letters if you can use each letter more than once?"
                        }
                        description={
                            "I wonder how many words amongst those arrangements are valid for Wordle..."
                        }
                    />
                );
        case "8":
            if (currDate.getTime() >= dayTwoDate.getTime())
                return (
                    <Question
                        index={8}
                        CORRECT={process.env.NEXT_PUBLIC_Q8}
                        question={
                            "How many different arrangements can you make with the letters in Question 7 if you can only use each letter once?"
                        }
                        description={
                            "This would make for a less frustrating Wordle ;)"
                        }
                    />
                );
            else {
                return (
                    <Later
                        date={(
                            dayTwoDate.getDate().toString() +
                            "/" +
                            (dayTwoDate.getMonth() + 1)
                        ).toString()}
                    />
                );
            }
        case "9":
            if (currDate.getTime() >= dayTwoDate.getTime())
                return (
                    <Question
                        index={9}
                        CORRECT={process.env.NEXT_PUBLIC_Q9}
                        question={
                            "After repeated shooting drills, it is found that Nikki scores 8 basketballs out of 10, regardless of whether the shot was a 2- or 3-pointer. If she misses any shot, her coach punishes her by deducting 1 point from her total score. Given that Nikki shoots 40 2-pointers and 10 3-pointers, what is her likely total score?"
                        }
                        description={"What's your shooting percentage?"}
                    />
                );
            else {
                return (
                    <Later
                        date={(
                            dayTwoDate.getDate().toString() +
                            "/" +
                            (dayTwoDate.getMonth() + 1)
                        ).toString()}
                    />
                );
            }
        case "10":
            if (currDate.getTime() >= dayTwoDate.getTime())
                return (
                    <Question
                        index={10}
                        CORRECT={process.env.NEXT_PUBLIC_Q10}
                        question={
                            "Given a function f(n), where n is a real number, and that f(x) + f(y) = 2f(x), is x necessarily equal to y? Answer 'Yes' or 'No', without the ''"
                        }
                        description={"Even... odd..."}
                    />
                );
            else {
                return (
                    <Later
                        date={(
                            dayTwoDate.getDate().toString() +
                            "/" +
                            (dayTwoDate.getMonth() + 1)
                        ).toString()}
                    />
                );
            }
        case "11":
            if (currDate.getTime() >= dayTwoDate.getTime())
                return (
                    <Question
                        index={11}
                        CORRECT={process.env.NEXT_PUBLIC_Q11}
                        question={
                            "Don ran with a velocity v = x² - 7x, where x is the displacement in metres with respect to his starting point where he was stationary (x >= 7). What is his acceleration in m/s² when v = 8 m/s?"
                        }
                        description={"NAPFA :0"}
                    />
                );
            else {
                return (
                    <Later
                        date={(
                            dayTwoDate.getDate().toString() +
                            "/" +
                            (dayTwoDate.getMonth() + 1)
                        ).toString()}
                    />
                );
            }
        case "12":
            if (currDate.getTime() >= dayTwoDate.getTime())
                return (
                    <Question
                        index={12}
                        CORRECT={process.env.NEXT_PUBLIC_Q12}
                        question={
                            "What is the probability (in decimal form) that an even number between 2 and 100 inclusive is divisible by 4?"
                        }
                        description={
                            "Some random things I think about when I'm not doing anything..."
                        }
                    />
                );
            else {
                return (
                    <Later
                        date={(
                            dayTwoDate.getDate().toString() +
                            "/" +
                            (dayTwoDate.getMonth() + 1)
                        ).toString()}
                    />
                );
            }
        case "13":
            if (currDate.getTime() >= dayTwoDate.getTime())
                return (
                    <Question
                        index={13}
                        CORRECT={process.env.NEXT_PUBLIC_Q13}
                        question={
                            "Starting from point O, Audrey walks 12 steps northwards, then 5 steps westwards. What is the least distance between Audrey and point O (in steps)?"
                        }
                        description={"Pythagoras!"}
                    />
                );
            else {
                return (
                    <Later
                        date={(
                            dayTwoDate.getDate().toString() +
                            "/" +
                            (dayTwoDate.getMonth() + 1)
                        ).toString()}
                    />
                );
            }
        case "14":
            if (currDate.getTime() >= dayTwoDate.getTime())
                return (
                    <Question
                        index={14}
                        CORRECT={process.env.NEXT_PUBLIC_Q14}
                        question={"What is 11111100110 in decimal?"}
                        description={
                            "Yeah I'm a coder so... we got to have a question on this! I hope you didn't just copy-paste from Google ;D"
                        }
                    />
                );
            else {
                return (
                    <Later
                        date={(
                            dayTwoDate.getDate().toString() +
                            "/" +
                            (dayTwoDate.getMonth() + 1)
                        ).toString()}
                    />
                );
            }
        case "15":
            if (currDate.getTime() >= dayThreeDate.getTime())
                return (
                    <Question
                        index={15}
                        CORRECT={process.env.NEXT_PUBLIC_Q15}
                        question={
                            "The price of one cookie is $2, and the cost of making a batch of 20 cookies is $5. How much (in $) will we earn if 100 cookies are sold?"
                        }
                        description={
                            "H3 Game Theory peeps do a more complicated version of this problem... and it requires differentiation."
                        }
                    />
                );
            else {
                return (
                    <Later
                        date={(
                            dayThreeDate.getDate().toString() +
                            "/" +
                            (dayThreeDate.getMonth() + 1)
                        ).toString()}
                    />
                );
            }
        case "16":
            if (currDate.getTime() >= dayThreeDate.getTime())
                return (
                    <Question
                        index={16}
                        CORRECT={process.env.NEXT_PUBLIC_Q16}
                        question={
                            "3 basketballs cost $15. 1 basketball and 2 footballs cost $25. 1 basketball, 1 football, and 1 tennis ball cost $17. How much do 2 footballs and 1 tennis ball cost (in $)?"
                        }
                        description={
                            "Like those Math questions circulated in WhatsApp HAHA!"
                        }
                    />
                );
            else {
                return (
                    <Later
                        date={(
                            dayThreeDate.getDate().toString() +
                            "/" +
                            (dayThreeDate.getMonth() + 1)
                        ).toString()}
                    />
                );
            }
        default:
            return <Invalid />;
    }
};

const Invalid: NextPage = () => {
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
            <h1 className={styles.title}>Oops! This page does not exist!</h1>
            <br />
            <Link href="/">
                <a className={styles.button}>Back to Home</a>
            </Link>
        </main>
    );
};

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

export default Quiz;
