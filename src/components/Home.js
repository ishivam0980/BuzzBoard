import React from 'react'
import './Home.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

export default function Home() {

  const formatDate = () => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date().toLocaleDateString(undefined, options);
  };
   
  const heroBackgroundStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/logo.png)`,
    backgroundPosition: '105% 105%',
    backgroundSize: '150px',
    backgroundRepeat: 'no-repeat',
    opacity: 0.05,
    zIndex: 0
  };
  

  const [items, setItems] = useState([]);  const fetchItems = async () => {
      try {
        const res = await axios.get(`https://newsdata.io/api/1/latest?country=in&apikey=${process.env.REACT_APP_NEWS_API_KEY}`);
        setItems(res.data.results);  
                
      } catch (err) {
        console.error("Error message:", err.message);
        console.error("Error response:", err.response);
        console.error("Error status:", err.response ? err.response.status : 'No response');
      }
  };
  useEffect(() => {
    fetchItems();
  }, []);
  return (
    <div className="home-container">
      <div className="hero-section">
        <div style={heroBackgroundStyle}></div>
        <div className="logo-container">
          <img src="/images/logo.png" alt="BuzzBoard Logo" />
        </div>
        <h1>Welcome to BuzzBoard</h1>
        <p>Your one-stop destination for the latest news in Entertainment, Sports, and Technology.</p>
        <div className="timestamp">{formatDate()}</div>
      </div>        <div className="top-stories">
        <h2>Top Stories</h2>
        <div className="news-grid">
          {items.map((item, index) => (
            <NewsItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}
