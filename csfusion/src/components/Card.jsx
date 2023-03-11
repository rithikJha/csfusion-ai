import React, { useState } from 'react';
import ArticlePopup from './ArticlePopup';

function Card({title, date, description, image, content}) {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <div className="card" onClick={() => setShowPopup(true)}>
        <img src={image} alt="" />
        <div className="card-body">
          <h3>{title}</h3>
          <span className="date">{date}</span>
          <p>{description}</p>
          <a href="#" className="btn">Read more</a>
        </div>
      </div>
      {showPopup && (
        <div className="popup">
          <ArticlePopup
            title={title}
            date={date}
            image={image}
            content={content}
            onClose={() => setShowPopup(false)}
          />
        </div>
      )}
    </>
  );
}

export default Card;
