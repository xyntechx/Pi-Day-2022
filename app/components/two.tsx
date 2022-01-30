import styles from "../styles/styles.css";

export function links() {
    return [{ rel: "stylesheet", href: styles }];
}

export default function Two() {
    return (
        <main className="main">
            <p>Two</p>
            <a href="/1">Day 2, Qn 1</a>
            <a href="/2">Day 2, Qn 2</a>
            <a href="/3">Day 2, Qn 3</a>
            <a href="/4">Day 2, Qn 4</a>
            <a href="/5">Day 2, Qn 5</a>
            <a href="/6">Day 2, Qn 6</a>
            <a href="/7">Day 2, Qn 7</a>
        </main>
    );
}
