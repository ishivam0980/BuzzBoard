import React from 'react'
import PropTypes from 'prop-types';
import './Category.css';

export default function Category(props) {
  const icons = {
    entertainment: '🎬',
    sports: '🏅',
    technology: '💻'
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
        <p>Latest {props.category} news and updates will appear here. Stay tuned for breaking stories, expert analysis, and in-depth coverage.</p>
        <div className="category-news-grid">
          {/* News items will be inserted here */}
        </div>
      </div>
    </div>
  )
}

Category.propTypes = {
  category: PropTypes.string.isRequired
};

