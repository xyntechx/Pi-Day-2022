import Days from "~/components/days";
import styles from "../styles/styles.css";

export function links() {
    return [{ rel: "stylesheet", href: styles }];
}

export default function Index() {
    const currDate = new Date();
    const dayOneDate = new Date(2022, 2, 8);
    // const dayOneDate = new Date(2022, 0, 31);

    return (
        <main className="main">
            {currDate.getTime() < dayOneDate.getTime() ? (
                <>
                    <h1 className="title">Pi Day 🥧</h1>
                    <p className="text">Come back on March 8, 2022!</p>
                </>
            ) : (
                <Days />
            )}
        </main>
    );
}
