import Five from "~/components/five";
import Four from "~/components/four";
import Joke from "~/components/joke";
import One from "~/components/one";
import Six from "~/components/six";
import Three from "~/components/three";
import Two from "~/components/two";
import styles from "../styles/styles.css";

export function links() {
    return [{ rel: "stylesheet", href: styles }];
}

export default function Index() {
    const currDate = new Date();
    const dayOneDate = new Date(2022, 2, 8);
    const dayTwoDate = new Date(2022, 2, 9);
    const dayThreeDate = new Date(2022, 2, 10);
    const dayFourDate = new Date(2022, 2, 11);
    const dayFiveDate = new Date(2022, 2, 12);
    const daySixDate = new Date(2022, 2, 13);
    const jokeDate = new Date(2022, 2, 14);

    switch (currDate.toDateString()) {
        case dayOneDate.toDateString():
            return <One />;
        case dayTwoDate.toDateString():
            return (
                <>
                    <One />
                    <Two />
                </>
            );
        case dayThreeDate.toDateString():
            return (
                <>
                    <One />
                    <Two />
                    <Three />
                </>
            );
        case dayFourDate.toDateString():
            return (
                <>
                    <One />
                    <Two />
                    <Three />
                    <Four />
                </>
            );
        case dayFiveDate.toDateString():
            return (
                <>
                    <One />
                    <Two />
                    <Three />
                    <Four />
                    <Five />
                </>
            );
        case daySixDate.toDateString():
            return (
                <>
                    <One />
                    <Two />
                    <Three />
                    <Four />
                    <Five />
                    <Six />
                </>
            );
        case jokeDate.toDateString():
            return (
                <>
                    <One />
                    <Two />
                    <Three />
                    <Four />
                    <Five />
                    <Six />
                    <Joke />
                </>
            );
        default:
            return (
                <main className="main">
                    <h1 className="title">Pi Day 🥧</h1>
                    <p className="text">Wait till March 8, 2022!</p>
                </main>
            );
    }
}
