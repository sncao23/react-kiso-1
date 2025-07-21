import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from './config';

function ThreadNew({ onAddThread }) {
    const [ title, setTitle ] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();

        try{
            const response = await fetch(`${BASE_URL}/threads`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ title })
            });

            if(!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            
            const newThread = await response.json();
            onAddThread(newThread);
            navigate("/");
        } catch (error) {
            console.error("スレッド作成失敗", error);
            alert("スレッドの作成に失敗しました");
        }
    };

    return (
        <div>
            <h2>新しいスレッドを作成</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="スレッドのタイトル"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button type="submit">作成</button>
            </form>
        </div>
    );
}

export default ThreadNew;
