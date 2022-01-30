import styles from "../styles/styles.css";

export function links() {
    return [{ rel: "stylesheet", href: styles }];
}

export default function Four() {
    return (
        <main className="main">
            <p>Four</p>
            <a href="/1">Day 4, Qn 1</a>
            <a href="/2">Day 4, Qn 2</a>
            <a href="/3">Day 4, Qn 3</a>
            <a href="/4">Day 4, Qn 4</a>
            <a href="/5">Day 4, Qn 5</a>
        </main>
    );
}
