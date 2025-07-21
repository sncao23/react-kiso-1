import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BASE_URL } from "./config";

function PostList() {
    const { thread_id } = useParams();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async() => {
            try{
                const response = await fetch(`${BASE_URL}/threads/${thread_id}/posts`);
                if(!response.ok) {
                    throw new Error(`Error:${response.status}`);
                }
                const data = await response.json();
                setPosts(data.posts);
            } catch (error) {
                console.error("投稿の取得に失敗しました", error);
                alert("投稿の取得に失敗しました");
            }
        };

        fetchPosts();
    },[thread_id]);

    return (
        <div>
            <h1>投稿一覧</h1>
            <h2>スレッドID：{thread_id}</h2>
            {posts.length ===0 ? (
                <p>投稿はまだありません</p>
                ) : (
            <ul>
                {posts.map((post) => (
                  <li key={post.id}>{post.post}</li>
                ))}
            </ul>
                )}
        </div>
    );
}

export default PostList;
