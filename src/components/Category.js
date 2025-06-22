import React from 'react';
import PropTypes from 'prop-types';
import './Category.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import NewsItem from './NewsItem'; 
import loadingAnimation from '../loadingAnimation.gif';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function Category({loadingBarRef,...props}) {  
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
    const fetchItems = async (pageToken = null, appendData = false) => {
    if (!appendData) {
      setLoading(true);
      loadingBarRef.current?.continuousStart();  
    }
    try {
      const url = `https://newsdata.io/api/1/latest?country=in&apikey=${process.env.REACT_APP_NEWS_API_KEY}&category=${props.category}${pageToken ? `&page=${pageToken}` : ''}`;
      
      const res = await axios.get(url);
      
      // Check if we received actual results
      if (res.data.results && res.data.results.length > 0) {
        if (appendData) {
          setItems(prevItems => [...prevItems, ...res.data.results]);
        } else {
          setItems(res.data.results);
        }
        setHasMorePages(!!res.data.nextPage);
      } else {
        setHasMorePages(false);
      }
      
      // Always update the next page token
      setNextPageToken(res.data.nextPage);
      loadingBarRef.current?.complete();
      setLoading(false);
    } catch (err) {
      console.error("Error message:", err.message);
      console.error("Error response:", err.response);
      console.error("Error status:", err.response ? err.response.status : 'No response');
      loadingBarRef.current?.complete();
      setLoading(false);
      setHasMorePages(false);
    }
  };
  useEffect(() => {
    // Update document title when category changes
    document.title = `BuzzBoard - ${props.category.charAt(0).toUpperCase() + props.category.slice(1)}`;
    
    // Reset everything when category changes
    setNextPageToken(null);
    setPageTokens([]);
    setCurrentPage(1);
    setHasMorePages(true);
    fetchItems();
  }, [props.category]);

  // Load more data for infinite scroll
  const fetchMoreData = () => {
    if (nextPageToken && hasMorePages) {
      fetchItems(nextPageToken, true);
    }
  };

  // Uncomment below functions when you want to use next and prev buttons instead of infinite scroll
  // To Switch to Pagination:
  // 1. Comment out the "Current implementation using infinite scroll" section
  // 2. Uncomment the pagination code section
  // 3. Uncomment the handlePrevClick and handleNextClick functions
  // const handlePrevClick = () => {
  //   if (pageTokens.length > 0) {
  //     const prevToken = pageTokens[pageTokens.length - 1];
      
  //     setPageTokens(pageTokens.slice(0, -1));
      
  //     fetchItems(prevToken);
      
  //     setCurrentPage(currentPage - 1);
      
  //     // Reset more pages flag when going back
  //     setHasMorePages(true);
  //   }
  // };

  // const handleNextClick = () => {
  //   if (nextPageToken && hasMorePages) {
  //     if (currentPage === 1) {
  //       setPageTokens([...pageTokens, null]);
  //     } else {
  //       const currentToken = nextPageToken;
  //       setPageTokens([...pageTokens, currentToken]);
  //     }
      
  //     fetchItems(nextPageToken);
      
  //     setCurrentPage(currentPage + 1);
  //   }
  // };

  return (
    <div className={`category-container category-${props.category}`}>
      <div className="category-header">
        <div className="category-header-content">
          <div className="category-icon-wrapper">
            <span className="category-icon">{icons[props.category]}</span>
          </div>
          <h1>{props.category}</h1>
        </div>
      </div>      <div className="category-content">
        {/* Uncomment below code when you want to use prev and next buttons instead of infinite scroll */}
        {/* {loading ? (
          <div className="loading-container">
            <img src={loadingAnimation} alt="loading animation" />
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
        </div> */}

        {/* Current implementation using infinite scroll */}
        {loading && items.length === 0 ? (
          /* Uncomment below if you want to show loading image instead of top loading bar */
              /* <div className="loading-container">
                <img src={loadingAnimation} alt="Loading Animation"/>
              </div> */
          <div></div>
        ) : (
          <InfiniteScroll
            dataLength={items.length}
            next={fetchMoreData}
            hasMore={hasMorePages}
            loader={<div className="loading-container">
                <img src={loadingAnimation} alt="loading animation" />
              </div>}
            endMessage={<p style={{ textAlign: 'center' }}><b>No more news to load</b></p>}
          >
            <div className="category-news-grid">
              {items && items.length > 0 ? (
                items.map((item, index) => (
                  <NewsItem key={index} item={item} />
                ))
              ) : (
                <p>No news available for this category at the moment.</p>
              )}
            </div>
          </InfiniteScroll>
        )}
      </div>
    </div>
  );
}

Category.propTypes = {
  category: PropTypes.string.isRequired
};

