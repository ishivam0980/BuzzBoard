import React from 'react'

export default function NewsItem(props) {
  const item=props.item;

  return (
    <div>
      <div className="card mb-3">
        <img src={item.image_url || "https://dummyimage.com/300x200/e0e0e0/707070.png&text=No+Image"} className="card-img-top" alt={item.title} />
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{item.description}</p>
          <p className="card-text">
            <small className="text-muted">
              {item.creator ? `By ${Array.isArray(item.creator) ? item.creator[0] : item.creator}` : ""} | 
              {new Date(item.pubDate).toLocaleDateString()} | 
              Source: {item.source_name || "Unknown"}
            </small>
          </p>
          <a href={item.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Read more</a>
        </div>
      </div>
    </div>
  )
}
