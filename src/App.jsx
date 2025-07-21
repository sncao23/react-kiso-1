import { useState, useEffect } from "react";
import ThreadList from "./ThreadList";
import { BASE_URL } from "./config";
import './App.css'

function App() {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${BASE_URL}/threads`);
      const data = await response.json();
      const topTen = data.slice(0, 10);
      setThreads(topTen);
    };

    fetchData();
  }, []);

  return <ThreadList threads={threads} />;
}

export default App;
