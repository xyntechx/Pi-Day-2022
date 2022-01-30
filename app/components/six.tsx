import styles from "../styles/styles.css";

export function links() {
    return [{ rel: "stylesheet", href: styles }];
}

export default function Six() {
    return (
        <main className="main">
            <p>Six</p>
            <a href="/26">Day 6, Qn 1</a>
        </main>
    );
}
