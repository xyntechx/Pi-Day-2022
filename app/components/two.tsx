import styles from "../styles/styles.css";

export function links() {
    return [{ rel: "stylesheet", href: styles }];
}

export default function Two() {
    return (
        <main className="main">
            <p>Two</p>
            <a href="/8">Day 2, Qn 1</a>
            <a href="/9">Day 2, Qn 2</a>
            <a href="/10">Day 2, Qn 3</a>
            <a href="/11">Day 2, Qn 4</a>
            <a href="/12">Day 2, Qn 5</a>
            <a href="/13">Day 2, Qn 6</a>
            <a href="/14">Day 2, Qn 7</a>
        </main>
    );
}
