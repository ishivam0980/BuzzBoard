import React from 'react'
import PropTypes from 'prop-types';
import './Category.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import NewsItem from './NewsItem'; 

export default function Category(props) {  const icons = {
    entertainment: '🎬',
    sports: '🏅',
    technology: '💻',
    politics: '🏛️',
    world: '🌎',
    other: '📌'
  };

  const [items, setItems] = useState([]);
    useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await axios.get(`https://newsdata.io/api/1/latest?country=in&apikey=${process.env.REACT_APP_NEWS_API_KEY}&category=${props.category}`);
        setItems(res.data.results);               
      } catch (err) {
        // console.error('error : ', err);
        console.error("Error message:", err.message);
        console.error("Error response:", err.response);
        console.error("Error status:", err.response ? err.response.status : 'No response');
      }
    };
    
    fetchItems();
  }, [props.category]);

    return (
    <div className={`category-container category-${props.category}`}>
      <div className="category-header">
        <div className="category-header-content">
          <div className="category-icon-wrapper">
            <span className="category-icon">{icons[props.category]}</span>
          </div>
          <h1>{props.category}</h1>
        </div>
      </div>
        <div className="category-content">
          <div className="category-news-grid">
          {items.map((item, index) => (
            <NewsItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

Category.propTypes = {
  category: PropTypes.string.isRequired
};

