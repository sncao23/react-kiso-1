import ThreadItem from './ThreadItem';
import { Link } from "react-router-dom";

function ThreadList({ threads }) {

    return (
        <div>
            <h1>スレッド一覧</h1>
            <Link to="/threads/new">
                <button type="button">+ 新しいスレッドを作成</button>
            </Link>
            <ul>
                {threads.map(thread => (
                    <ThreadItem key={thread.id} id={thread.id} title={thread.title} />
                ))}
            </ul>
        </div>
    );
}

export default ThreadList;
