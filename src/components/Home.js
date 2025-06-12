import React from 'react'
import './Home.css'

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
        <h2>Top Stories</h2>
        <div className="news-grid">
          {/* News items will be inserted here */}
        </div>
      </div>
    </div>
  )
}
