import React from 'react'
import './Home.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import loadingAnimation from '../loadingAnimation.gif';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function Home({loadingBarRef}) {

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
  
  // State variables 
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextPageToken, setNextPageToken] = useState(null);
  const [pageTokens, setPageTokens] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMorePages, setHasMorePages] = useState(true); // New state to track if more pages are available
    const fetchItems = async (pageToken = null, appendData = false) => {
    if (!appendData) {
      loadingBarRef.current?.continuousStart();
      setLoading(true);
    }
    try {
     
      const url = `https://newsdata.io/api/1/latest?country=in&apikey=${process.env.REACT_APP_NEWS_API_KEY}${pageToken ? `&page=${pageToken}` : ''}`;
      
      const res = await axios.get(url);
      
      // Check if we actually received any new articles
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
      
      // Always update the next page token from the API response
      setNextPageToken(res.data.nextPage);
      loadingBarRef.current?.complete();
      setLoading(false);
    } catch (err) {
      console.error("Error message:", err.message);
      console.error("Error response:", err.response);
      console.error("Error status:", err.response ? err.response.status : 'No response');
      setLoading(false);
      setHasMorePages(false);
      loadingBarRef.current?.complete();
    }
  };
  
  // Initial data fetch on component mount
  useEffect(() => {
    fetchItems();
  }, []);  // Load more data for infinite scroll
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
  //     // Get the previous page token
  //     const prevToken = pageTokens[pageTokens.length - 1];
      
  //     // Remove the last token from the history stack
  //     setPageTokens(pageTokens.slice(0, -1));
      
  //     // Fetch with the previous token
  //     fetchItems(prevToken);
      
  //     // Update page counter
  //     setCurrentPage(currentPage - 1);
      
  //     // Reset more pages flag when going back
  //     setHasMorePages(true);
  //   }
  // };

  // const handleNextClick = () => {
  //   if (nextPageToken && hasMorePages) {
  //     // Store current token in the history before navigating
  //     if (currentPage === 1) {
  //       // First page has no token, so we push null
  //       setPageTokens([...pageTokens, null]);
  //     } else {
  //       const currentToken = nextPageToken;
  //       setPageTokens([...pageTokens, currentToken]);
  //     }
      
  //     // Fetch with the next page token
  //     fetchItems(nextPageToken);
      
  //     // Update page counter
  //     setCurrentPage(currentPage + 1);
  //   }
  // };
  
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
      </div>        
      <div className="top-stories">
        <h2>Top Stories</h2>        {/* Uncomment below code when you want to use prev and next buttons instead of infinite scroll */}
        {/* {loading ? (
          <div className="loading-container">
            <img src={loadingAnimation} alt="Loading Animation"/>
          </div>
        ) : (
          <div className="news-grid">
            {items && items.length > 0 ? (
              items.map((item, index) => (
                <NewsItem key={index} item={item} />
              ))
            ) : (
              <p>No news available at the moment.</p>
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
        </div> */}        {/* Current implementation using infinite scroll */}
        {/* Uncomment below if you want to show loading image instead of top loading bar */}
        {/* {loading && items.length === 0 ? (
          <div className="loading-container">
            <img src={loadingAnimation} alt="Loading Animation"/>
          </div>
        ) : ( */}
        {loading && items.length === 0 ? (
          <div></div>
        ) : (
          <InfiniteScroll
            dataLength={items.length}
            next={fetchMoreData}            hasMore={hasMorePages}
            loader={
              /* Uncomment below if you want to show loading image instead of top loading bar */
              /* <div className="loading-container">
                <img src={loadingAnimation} alt="Loading Animation"/>
              </div> */
              <div></div>
            }
            endMessage={<p style={{ textAlign: 'center' }}><b>No more news to load</b></p>}
          >
            <div className="news-grid">
              {items && items.length > 0 ? (
                items.map((item, index) => (
                  <NewsItem key={index} item={item} />
                ))
              ) : (
                <p>No news available at the moment.</p>
              )}
            </div>
          </InfiniteScroll>
        )}


      </div>
    </div>
  )
}
