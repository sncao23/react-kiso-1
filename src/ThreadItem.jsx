import { Link } from "react-router-dom";

function ThreadItem({ id, title }) {
    return (
        <li>
            <Link to={`/threads/${id}`}>
                {title}
            </Link>
        </li>
    );
}

export default ThreadItem;

