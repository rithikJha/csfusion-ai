import React from 'react';

function ArticlePopup({ title, date, description, image, content, onClose }) {
  return (
    <div className="article-popup">
      <div className="article-popup-content">
        <button className="article-popup-close" onClick={onClose}>X</button>
        <img src={image} alt="" />
        <div className="article-popup-body">
          <h3>{title}</h3>
          <span className="date">{date}</span>
          <div className="article-popup-text">{content}</div>
        </div>
      </div>
    </div>
  );
}

export default ArticlePopup;
