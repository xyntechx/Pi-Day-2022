import styles from "../styles/styles.css";

export function links() {
    return [{ rel: "stylesheet", href: styles }];
}

export default function Five() {
    return (
        <main className="main">
            <p>Five</p>
            <a href="/1">Day 5, Qn 1</a>
        </main>
    );
}
