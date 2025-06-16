import React from 'react';
import PropTypes from 'prop-types';
import './Category.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import NewsItem from './NewsItem'; 
import loadingAnimation from '../loadingAnimation.gif';

export default function Category(props) {  
  const icons = {
    entertainment: '🎬',
    sports: '🏅',
    technology: '💻',
    politics: '🏛️',
    world: '🌎',
    other: '📌'
  };

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextPageToken, setNextPageToken] = useState(null);
  const [pageTokens, setPageTokens] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMorePages, setHasMorePages] = useState(true); // New state to track if more pages exist
  
  const fetchItems = async (pageToken = null) => {
    setLoading(true);
    try {
      const url = `https://newsdata.io/api/1/latest?country=in&apikey=${process.env.REACT_APP_NEWS_API_KEY}&category=${props.category}${pageToken ? `&page=${pageToken}` : ''}`;
      
      const res = await axios.get(url);
      
      // Check if we received actual results
      if (res.data.results && res.data.results.length > 0) {
        setItems(res.data.results);
        setHasMorePages(true); // We got results, so assuming more might be available
      } else {
        // No results returned, might keep the previous items visible
        setHasMorePages(false); // No more pages available
      }
      
      // Always update the next page token
      setNextPageToken(res.data.nextPage);
      setLoading(false);
    } catch (err) {
      console.error("Error message:", err.message);
      console.error("Error response:", err.response);
      console.error("Error status:", err.response ? err.response.status : 'No response');
      setLoading(false);
      setHasMorePages(false); // Assume no more pages on error
    }
  };
  
  useEffect(() => {
    // Reset everything when category changes
    setNextPageToken(null);
    setPageTokens([]);
    setCurrentPage(1);
    setHasMorePages(true); // Reset this flag too
    fetchItems();
  }, [props.category]);

  const handlePrevClick = () => {
    if (pageTokens.length > 0) {
      const prevToken = pageTokens[pageTokens.length - 1];
      
      setPageTokens(pageTokens.slice(0, -1));
      
      fetchItems(prevToken);
      
      setCurrentPage(currentPage - 1);
      
      // Reset more pages flag when going back
      setHasMorePages(true);
    }
  };

  const handleNextClick = () => {
    if (nextPageToken && hasMorePages) {
      if (currentPage === 1) {
        setPageTokens([...pageTokens, null]);
      } else {
        const currentToken = nextPageToken;
        setPageTokens([...pageTokens, currentToken]);
      }
      
      fetchItems(nextPageToken);
      
      setCurrentPage(currentPage + 1);
    }
  };

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
        {loading ? (
          <div className="loading-container">
            <p><img src={loadingAnimation} alt="loading animation" /></p>
          </div>
        ) : (
          <div className="category-news-grid">
            {items && items.length > 0 ? (
              items.map((item, index) => (
                <NewsItem key={index} item={item} />
              ))
            ) : (
              <p>No news available for this category at the moment.</p>
            )}
          </div>
        )}
        <div className="pagination-controls">
          <button 
            className="pagination-btn prev-btn" 
            onClick={handlePrevClick}
            disabled={pageTokens.length === 0 || loading}
          >
            &larr; Previous
          </button>
          <span className="page-indicator">Page {currentPage}</span>
          <button 
            className="pagination-btn next-btn" 
            onClick={handleNextClick}
            disabled={!nextPageToken || !hasMorePages || loading}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}

Category.propTypes = {
  category: PropTypes.string.isRequired
};

