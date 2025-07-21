import ThreadItem from './ThreadItem';

function ThreadList({ threads }) {

    return (
        <div>
            <h1>スレッド一覧</h1>
            <ul>
                {threads.map(thread => (
                    <ThreadItem key={thread.id} id={thread.id} title={thread.title} />
                ))}
            </ul>
        </div>
    );
}

export default ThreadList;
