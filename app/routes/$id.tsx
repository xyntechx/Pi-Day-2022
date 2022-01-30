import styles from "../styles/styles.css";
import { useLoaderData } from "remix";

interface Params {
    id: string;
}

export const loader = async ({ params }: { params: Params }) => {
    return params.id;
};

export function links() {
    return [{ rel: "stylesheet", href: styles }];
}

export default function Home() {
    const id = useLoaderData();
    return (
        <main className="main">
            <p>{id}</p>
        </main>
    );
}

// TODO: For quizzes of each day (id is question id)
// TODO: Create questions and assoc to qn id via obj
