import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ThreadList from './ThreadList';
import ThreadNew from './ThreadNew';
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

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<ThreadList threads={threads} />}
        />
        <Route
          path="/threads/new"
          element={<ThreadNew onAddThread={(newThread) => setThreads([newThread, ...threads])} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;