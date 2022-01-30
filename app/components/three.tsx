import styles from "../styles/styles.css";

export function links() {
    return [{ rel: "stylesheet", href: styles }];
}

export default function Three() {
    return (
        <main className="main">
            <p>Three</p>
            <a href="/15">Day 3, Qn 1</a>
            <a href="/16">Day 3, Qn 2</a>
            <a href="/17">Day 3, Qn 3</a>
            <a href="/18">Day 3, Qn 4</a>
            <a href="/19">Day 3, Qn 5</a>
        </main>
    );
}
