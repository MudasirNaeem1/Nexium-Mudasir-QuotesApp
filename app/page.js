'use client';
import { useState } from 'react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { quotes } from './quotes';

export default function Home() {
  const [topic, setTopic] = useState('');
  const [results, setResults] = useState([]);
  const [showOptions, setShowOptions] = useState(false);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const selected = quotes[topic.toLowerCase()] || [];
    setResults(selected.slice(0, 3));
  };

  const handleOptionClick = (option) => {
    setTopic(option);
    setShowOptions(false);
  };

  return (
    <div className="container">
      <h1>📜 Quote Generator App 💬</h1>
      <p>Type a topic like <b>life</b>, <b>love</b>, or <b>success</b> to get inspiring quotes!</p>
      
      <form onSubmit={handleSubmit}>
        <div className="suggest-input-wrapper">
          <input
            placeholder="Enter a topic..."
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            onFocus={() => setShowOptions(true)}
            onBlur={() => setTimeout(() => setShowOptions(false), 150)}
          />
          {showOptions && (
            <ul className="suggestion-list">
              {['life', 'success', 'love'].map((item) => (
                <li key={item} onClick={() => handleOptionClick(item)}>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
        <button type="submit">🔍 Click here to Generate Quotes</button>
      </form>

      <ul>
        {results.map((q, i) => (
          <li key={i}>{q}</li>
        ))}
      </ul>
    </div>
  );
}

