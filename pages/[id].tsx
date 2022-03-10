import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Question from "../components/question";
import Later from "../components/later";
import { useRouter } from "next/router";

const Quiz: NextPage = () => {
    const router = useRouter();
    const { id } = router.query;

    const currDate = new Date();
    const dayOneDate = new Date(2022, 2, 8);
    const dayTwoDate = new Date(2022, 2, 9);
    const dayThreeDate = new Date(2022, 2, 10);
    const dayFourDate = new Date(2022, 2, 11);
    const dayFiveDate = new Date(2022, 2, 12);
    const daySixDate = new Date(2022, 2, 13);

    switch (id) {
        case "1":
            if (currDate.getTime() >= dayOneDate.getTime()) {
                return (
                    <Question
                        index={1}
                        CORRECT={process.env.NEXT_PUBLIC_Q1}
                        question={"What is 1 + 1?"}
                        description={"Nice and easy 😁"}
                    />
                );
            } else {
                return (
                    <Later
                        date={(
                            dayOneDate.getDate().toString() +
                            "/" +
                            (dayOneDate.getMonth() + 1)
                        ).toString()}
                    />
                );
            }
        case "2":
            if (currDate.getTime() >= dayOneDate.getTime()) {
                return (
                    <Question
                        index={2}
                        CORRECT={process.env.NEXT_PUBLIC_Q2}
                        question={"Solve for x, where x = 162*172839506"}
                        description={"Fun fact: it's a palindrome!"}
                    />
                );
            } else {
                return (
                    <Later
                        date={(
                            dayOneDate.getDate().toString() +
                            "/" +
                            (dayOneDate.getMonth() + 1)
                        ).toString()}
                    />
                );
            }
        case "3":
            if (currDate.getTime() >= dayOneDate.getTime()) {
                return (
                    <Question
                        index={3}
                        CORRECT={process.env.NEXT_PUBLIC_Q3}
                        question={"Solve 8/2(2+2)"}
                        description={"8/2 = 4, then 2+2 = 4, finally 4*4 = 16"}
                    />
                );
            } else {
                return (
                    <Later
                        date={(
                            dayOneDate.getDate().toString() +
                            "/" +
                            (dayOneDate.getMonth() + 1)
                        ).toString()}
                    />
                );
            }
        case "4":
            if (currDate.getTime() >= dayOneDate.getTime()) {
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
            } else {
                return (
                    <Later
                        date={(
                            dayOneDate.getDate().toString() +
                            "/" +
                            (dayOneDate.getMonth() + 1)
                        ).toString()}
                    />
                );
            }
        case "5":
            if (currDate.getTime() >= dayOneDate.getTime()) {
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
            } else {
                return (
                    <Later
                        date={(
                            dayOneDate.getDate().toString() +
                            "/" +
                            (dayOneDate.getMonth() + 1)
                        ).toString()}
                    />
                );
            }
        case "6":
            if (currDate.getTime() >= dayOneDate.getTime()) {
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
            } else {
                return (
                    <Later
                        date={(
                            dayOneDate.getDate().toString() +
                            "/" +
                            (dayOneDate.getMonth() + 1)
                        ).toString()}
                    />
                );
            }
        case "7":
            if (currDate.getTime() >= dayOneDate.getTime()) {
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
            } else {
                return (
                    <Later
                        date={(
                            dayOneDate.getDate().toString() +
                            "/" +
                            (dayOneDate.getMonth() + 1)
                        ).toString()}
                    />
                );
            }
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
                            "Given a function f(n), where n is a real number, and that f(x) + f(y) = 2f(x), is x necessarily equal to y? Answer 'Yes' or 'No', without the ''."
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
                            "Don ran with a velocity v = x² - 7x, where x is time in seconds. What is his acceleration in m/s² when v = 8 m/s?"
                        }
                        description={"NAPFA 🤯"}
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
        case "17":
            if (currDate.getTime() >= dayThreeDate.getTime())
                return (
                    <Question
                        index={17}
                        CORRECT={process.env.NEXT_PUBLIC_Q17}
                        question={
                            "Given a function f(x) = y, if f'(x) > 0, does f(x) always cut the x-axis? Answer 'Yes' or 'No', without the ''."
                        }
                        description={"y = e^x is a counter-example!"}
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
        case "18":
            if (currDate.getTime() >= dayThreeDate.getTime())
                return (
                    <Question
                        index={18}
                        CORRECT={process.env.NEXT_PUBLIC_Q18}
                        question={
                            "Milo drinks for 5 seconds from a full 1-litre bottle of water before running. Since he's not very thirsty, he drinks 20ml of water every second. He is then ready to run. After running, Milo is very thirsty, and he needs to finish up his bottle to quench his thirst before the next run. How fast must Milo drink if the next run starts in 20 seconds, in ml per second?"
                        }
                        description={
                            "Does anyone know what is the normal water drinking rate for the average human?"
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
        case "19":
            if (currDate.getTime() >= dayThreeDate.getTime())
                return (
                    <Question
                        index={19}
                        CORRECT={process.env.NEXT_PUBLIC_Q19}
                        question={
                            "Jann is given a project by her teachers to complete within 10 weeks. There are a total of 6 broad tasks: planning, completing draft 1, waiting for feedback for draft 1, completing draft 2, waiting for feedback for draft 2, and completing the final draft. The 6 tasks consume different amounts of time in the ratio 2:5:2:6:2:11. How much time (in days) must she dedicate to completing the 3 drafts?"
                        }
                        description={
                            "We should keep track of PW hours to verify this time distribution..."
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
        case "20":
            if (currDate.getTime() >= dayFourDate.getTime())
                return (
                    <Question
                        index={20}
                        CORRECT={process.env.NEXT_PUBLIC_Q20}
                        question={
                            "Tony has 70 minutes of homework to complete today. To help him concentrate, Tony enjoys listening to music while he does work. He has an unlimited numnber of songs to play, and each song is either 3 or 4 minutes long. Tony hates it when he finishes his work before or after finishing a song, so he always chooses a combination of songs to make sure that the total duration of the songs is exactly equal to the total duration of doing his homework. Tony also wants to listen to as many songs as possible. How many 3-minute songs will Tony play given his preferences?"
                        }
                        description={"What are your favourite songs?"}
                    />
                );
            else {
                return (
                    <Later
                        date={(
                            dayFourDate.getDate().toString() +
                            "/" +
                            (dayFourDate.getMonth() + 1)
                        ).toString()}
                    />
                );
            }
        case "21":
            if (currDate.getTime() >= dayFourDate.getTime())
                return (
                    <Question
                        index={21}
                        CORRECT={process.env.NEXT_PUBLIC_Q21}
                        question={
                            "Is π equal to e? Answer 'Yes' or 'No', without the ''."
                        }
                        description={"@engineers 👀"}
                    />
                );
            else {
                return (
                    <Later
                        date={(
                            dayFourDate.getDate().toString() +
                            "/" +
                            (dayFourDate.getMonth() + 1)
                        ).toString()}
                    />
                );
            }
        case "22":
            if (currDate.getTime() >= dayFourDate.getTime())
                return (
                    <Question
                        index={22}
                        CORRECT={process.env.NEXT_PUBLIC_Q22}
                        question={
                            "A and B are two different smartphone manufacturers. B can choose whether to sell its latest product. A, if B decides to sell its latest product, can choose whether to sell its own latest product at a higher price, lower price, or the same price as B's latest product. If B decides not to sell, A has the same choices as if B decides to sell. How many different permutations of choices does A have for across the two cases (e.g. one permutation is 'sell at higher price if B sells, sell at lower price if B doesn't sell')?"
                        }
                        description={"Another Game Theory-esque question 😜"}
                    />
                );
            else {
                return (
                    <Later
                        date={(
                            dayFourDate.getDate().toString() +
                            "/" +
                            (dayFourDate.getMonth() + 1)
                        ).toString()}
                    />
                );
            }
        case "23":
            if (currDate.getTime() >= dayFourDate.getTime())
                return (
                    <Question
                        index={23}
                        CORRECT={process.env.NEXT_PUBLIC_Q23}
                        question={
                            "From x = -3 to x = 3 (inclusive), is the area under y = x^2 more than the area of a trapezium of parallel sides of lengths 6 and 10 units separated by a perpendicular distance of 2 units? Answer 'Yes' or 'No', without the ''."
                        }
                        description={
                            "Some light integration for those who love calculus!"
                        }
                    />
                );
            else {
                return (
                    <Later
                        date={(
                            dayFourDate.getDate().toString() +
                            "/" +
                            (dayFourDate.getMonth() + 1)
                        ).toString()}
                    />
                );
            }
        case "24":
            if (currDate.getTime() >= dayFourDate.getTime())
                return (
                    <Question
                        index={24}
                        CORRECT={process.env.NEXT_PUBLIC_Q24}
                        question={
                            "Given that I is directly proportional to A^2 and that I = 5 when A = 25, what is I when A^3 = 343"
                        }
                        description={"Hey, Physics friends! Get the reference?"}
                    />
                );
            else {
                return (
                    <Later
                        date={(
                            dayFourDate.getDate().toString() +
                            "/" +
                            (dayFourDate.getMonth() + 1)
                        ).toString()}
                    />
                );
            }
        case "25":
            if (currDate.getTime() >= dayFiveDate.getTime())
                return (
                    <Question
                        index={25}
                        CORRECT={process.env.NEXT_PUBLIC_Q25}
                        question={
                            "Solve for |a| where (24x^2 + 25x - 47)/(ax - 2) = -8x - 3 - 53/(ax - 2)"
                        }
                        description={"Algebra is always fun!"}
                    />
                );
            else {
                return (
                    <Later
                        date={(
                            dayFiveDate.getDate().toString() +
                            "/" +
                            (dayFiveDate.getMonth() + 1)
                        ).toString()}
                    />
                );
            }
        case "26":
            if (currDate.getTime() >= daySixDate.getTime())
                return (
                    <Question
                        index={26}
                        CORRECT={process.env.NEXT_PUBLIC_Q26}
                        question={
                            "Given a circle inscribed in a square with sides of length 2 units, what is the four times the probability that a dart thrown towards the shape will land inside the inscribed circle (leave your answer in 3sf)?"
                        }
                        description={"🎉 π 🎉"}
                    />
                );
            else {
                return (
                    <Later
                        date={(
                            daySixDate.getDate().toString() +
                            "/" +
                            (daySixDate.getMonth() + 1)
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

export default Quiz;
